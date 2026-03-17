import type { Metadata } from "next";
import { Barlow_Condensed, EB_Garamond, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-barlow",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-garamond",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "FIELD",
  description: "Centralised reference retrieval for creative professionals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} ${garamond.variable} ${plexMono.variable} min-h-screen`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
