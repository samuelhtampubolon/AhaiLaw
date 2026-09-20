using System;
using System.Diagnostics;
using System.IO;
using System.Net;
using System.Threading;
using System.Windows.Forms;

namespace AhaiLawDesktop
{
    static class Program
    {
        private static HttpListener listener;
        private static Thread listenerThread;
        private static volatile bool isRunning = true;

        [STAThread]
        static void Main()
        {
            string projectDir = AppDomain.CurrentDomain.BaseDirectory;
            string outDir = Path.Combine(projectDir, "out");
            string appUrl = "http://localhost:3000";

            Process devServerProcess = null;

            try
            {
                // If static export folder exists, serve it offline via built-in HttpListener
                if (Directory.Exists(outDir) && File.Exists(Path.Combine(outDir, "index.html")))
                {
                    int port = 41733;
                    appUrl = "http://127.0.0.1:" + port + "/";
                    StartStaticServer(outDir, port);
                }
                else
                {
                    // Fallback to local dev server (npm run dev)
                    if (!IsServerRunning(appUrl))
                    {
                        ProcessStartInfo serverPsi = new ProcessStartInfo
                        {
                            FileName = "cmd.exe",
                            Arguments = "/c npm.cmd run dev",
                            WorkingDirectory = projectDir,
                            CreateNoWindow = true,
                            UseShellExecute = false,
                            WindowStyle = ProcessWindowStyle.Hidden
                        };

                        devServerProcess = Process.Start(serverPsi);

                        int attempts = 0;
                        while (attempts < 30 && !IsServerRunning(appUrl))
                        {
                            Thread.Sleep(500);
                            attempts++;
                        }
                    }
                }

                // Locate Edge executable
                string edgePath = FindEdgePath();
                if (string.IsNullOrEmpty(edgePath))
                {
                    Process.Start(appUrl);
                    return;
                }

                string profileDir = Path.Combine(projectDir, ".desktop_profile");

                ProcessStartInfo appPsi = new ProcessStartInfo
                {
                    FileName = edgePath,
                    Arguments = "--app=" + appUrl + " --window-size=1366,850 --user-data-dir=\"" + profileDir + "\"",
                    UseShellExecute = false
                };

                Process appProcess = Process.Start(appPsi);
                if (appProcess != null)
                {
                    appProcess.WaitForExit();
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Gagal menjalankan AhaiLaw Desktop: " + ex.Message, "AhaiLaw Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
            finally
            {
                isRunning = false;
                if (listener != null)
                {
                    try { listener.Stop(); } catch { }
                }
            }
        }

        static void StartStaticServer(string rootDir, int port)
        {
            listener = new HttpListener();
            listener.Prefixes.Add("http://127.0.0.1:" + port + "/");
            listener.Start();

            listenerThread = new Thread(() =>
            {
                while (isRunning)
                {
                    try
                    {
                        HttpListenerContext context = listener.GetContext();
                        ThreadPool.QueueUserWorkItem((c) => ServeRequest((HttpListenerContext)c, rootDir), context);
                    }
                    catch
                    {
                        break;
                    }
                }
            });
            listenerThread.IsBackground = true;
            listenerThread.Start();
        }

        static void ServeRequest(HttpListenerContext context, string rootDir)
        {
            try
            {
                string relPath = context.Request.Url.AbsolutePath.TrimStart('/');
                if (string.IsNullOrEmpty(relPath)) relPath = "index.html";

                string filePath = Path.Combine(rootDir, relPath.Replace('/', Path.DirectorySeparatorChar));

                if (Directory.Exists(filePath))
                {
                    filePath = Path.Combine(filePath, "index.html");
                }

                if (!File.Exists(filePath))
                {
                    // SPA fallback
                    filePath = Path.Combine(rootDir, "index.html");
                }

                if (File.Exists(filePath))
                {
                    byte[] bytes = File.ReadAllBytes(filePath);
                    context.Response.ContentType = GetMimeType(Path.GetExtension(filePath));
                    context.Response.ContentLength64 = bytes.Length;
                    context.Response.OutputStream.Write(bytes, 0, bytes.Length);
                }
                else
                {
                    context.Response.StatusCode = 404;
                }
            }
            catch
            {
                context.Response.StatusCode = 500;
            }
            finally
            {
                try { context.Response.OutputStream.Close(); } catch { }
            }
        }

        static string GetMimeType(string ext)
        {
            switch (ext.ToLower())
            {
                case ".html": return "text/html; charset=utf-8";
                case ".js": return "application/javascript; charset=utf-8";
                case ".css": return "text/css; charset=utf-8";
                case ".json": return "application/json; charset=utf-8";
                case ".svg": return "image/svg+xml";
                case ".png": return "image/png";
                case ".jpg":
                case ".jpeg": return "image/jpeg";
                case ".ico": return "image/x-icon";
                default: return "application/octet-stream";
            }
        }

        static bool IsServerRunning(string url)
        {
            try
            {
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
                request.Timeout = 800;
                request.Method = "GET";
                using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
                {
                    return response.StatusCode == HttpStatusCode.OK;
                }
            }
            catch
            {
                return false;
            }
        }

        static string FindEdgePath()
        {
            string[] possiblePaths = new string[]
            {
                Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ProgramFilesX86), @"Microsoft\Edge\Application\msedge.exe"),
                Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles), @"Microsoft\Edge\Application\msedge.exe"),
                Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), @"Microsoft\Edge\Application\msedge.exe")
            };

            foreach (string p in possiblePaths)
            {
                if (File.Exists(p)) return p;
            }
            return null;
        }
    }
}
