import type { Metadata } from "next";
import { Tektur, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/store/Provider";


const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ['latin'],
})

const noto = Noto_Sans_Mono({
  variable: "--font-mono",
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Devgambo",
  description: "My Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* TODO: remove vsc */}
      <body
        className={`${tektur.variable}  ${noto.variable} antialiased vsc-initialized`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
