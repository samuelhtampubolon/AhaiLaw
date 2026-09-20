import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AhaiLaw — Gamifikasi Simulasi Peradilan & Dilema Hukum Indonesia",
  description: "Platform gamifikasi edukasi dan simulasi peradilan hukum Indonesia berbasis 8 Liga, 80 Gugusan Pulau, dan 240 Kasus Dilema Yuridis Nyata (KUHP, KUHPerdata, UU ITE, Tipikor, UU PDP). Menguji integritas Majelis Hakim dalam menyeimbangkan Keadilan, Kepastian Hukum, dan Kemanfaatan.",
  keywords: ["AhaiLaw", "Hukum Indonesia", "Gamifikasi Hukum", "Simulasi Hakim", "KUHP", "KUHPerdata", "UU ITE", "Tipikor", "Radbruch"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
