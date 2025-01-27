import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import Navbar from "./components/navigation/Navbar";
import "./globals.css";

// Import Roboto font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Atur weight sesuai kebutuhan
  variable: "--font-roboto",
});

// Import local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SMK Negeri 1 Adiwerna",
  description: "Dikelola Oleh Tim Media Kreatif SMKN 1 Adiwerna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="pt-16">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
