import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./theme/globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sturdy Wings | Education and Consulting Services",
  description: "An online education platform for learning and growth.",
  keywords: [
    "education",
    "learning",
    "growth",
    "online education",
    "consulting",
  ],
  openGraph: {
    title: "Sturdy Wings | Education and Consulting Services",
    description: "An online education platform for learning and growth.",
    type: "website",
    locale: "en",
  },
  twitter: {
    title: "Sturdy Wings | Education and Consulting Services",
    description: "An online education platform for learning and growth.",
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  themeColor: "#000000",
  appleWebApp: {
    title: "Sturdy Wings | Education and Consulting Services",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider options={{ key: "css" }}>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
