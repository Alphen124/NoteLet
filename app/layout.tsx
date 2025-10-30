import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "NoteLet",
  description: "Device rental app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="topbar">
          <div className="topbar-inner">
            <div className="brand">
              <Link href="/">
                <span className="brand-logo">NOTELET</span>
              </Link>
            </div>

            <div className="search">
              <input aria-label="Search" placeholder="Search" />
            </div>

            <nav className="nav-actions">
              <a className="nav-link" href="#">Cart</a>
              <a className="nav-link" href="#">Favorites</a>
              <button className="btn-primary">Rent out ➜</button>
              <button className="btn-ghost">User</button>
            </nav>
          </div>
        </header>

        <main className="page-root">
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  );
}
