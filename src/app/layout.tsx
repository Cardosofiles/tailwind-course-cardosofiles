import { Sidebar } from "@/components/Sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TailwindCSS Course",
  description: "Dashboard User",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased dark">
      <head>
        {/* Meta tags para SEO e compartilhamento em redes sociais */}
        <meta name="title" content="Curso de TailwindCSS" />
        <meta name="description" content="Dashboard User" />

        {/* Open Graph tags para compartilhamento no Facebook, LinkedIn, etc. */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Curso de TailwindCSS" />
        <meta property="og:description" content="Dashboard User" />
        <meta property="og:image" content="/tailwind-course.png" />
        <meta property="og:url" content="https://your-website-url.com" />
        <meta property="og:site_name" content="Curso de TailwindCSS" />

        {/* Twitter card tags para compartilhamento no Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Curso de TailwindCSS" />
        <meta name="twitter:description" content="Dashboard User" />
        <meta name="twitter:image" content="/path-to-your-image.jpg" />
        <meta name="twitter:url" content="https://your-website-url.com" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen lg:grid lg:grid-cols-app dark:bg-zinc-900">
          <Sidebar />
          <main className="px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8 max-w-[100vw]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
