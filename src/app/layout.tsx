import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Lohit Majumder | Full-Stack Developer & Cloud Engineer",
  description: "Computer Science & Engineering Graduate from IIIT Guwahati specializing in full-stack development, cloud technologies, and innovative solutions. Experience with Go, Python, AWS, and modern web frameworks.",
  keywords: ["Lohit Majumder", "Full-Stack Developer", "Cloud Engineer", "IIIT Guwahati", "Computer Science", "Go", "Python", "AWS", "React", "Next.js"],
  authors: [{ name: "Lohit Majumder" }],
  creator: "Lohit Majumder",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "",
    title: "Lohit Majumder | Full-Stack Developer & Cloud Engineer",
    description: "Computer Science & Engineering Graduate from IIIT Guwahati specializing in full-stack development, cloud technologies, and innovative solutions.",
    siteName: "Lohit Majumder Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lohit Majumder | Full-Stack Developer & Cloud Engineer",
    description: "Computer Science & Engineering Graduate from IIIT Guwahati specializing in full-stack development, cloud technologies, and innovative solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}