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
        [STAThread]
        static void Main()
        {
            string appUrl = "http://localhost:3000";

            try
            {
                // Check if server is running
                if (!IsServerRunning(appUrl))
                {
                    string projectDir = AppDomain.CurrentDomain.BaseDirectory;
                    ProcessStartInfo serverPsi = new ProcessStartInfo
                    {
                        FileName = "cmd.exe",
                        Arguments = "/c npm.cmd run dev",
                        WorkingDirectory = projectDir,
                        CreateNoWindow = true,
                        UseShellExecute = false,
                        WindowStyle = ProcessWindowStyle.Hidden
                    };

                    Process.Start(serverPsi);

                    // Wait for server to come online
                    int attempts = 0;
                    while (attempts < 25 && !IsServerRunning(appUrl))
                    {
                        Thread.Sleep(600);
                        attempts++;
                    }
                }

                // Locate Edge executable
                string edgePath = FindEdgePath();
                if (string.IsNullOrEmpty(edgePath))
                {
                    Process.Start(appUrl);
                    return;
                }

                string profileDir = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, ".desktop_profile");

                // Launch Edge in standalone desktop app mode
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
