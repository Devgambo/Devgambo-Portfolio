import type { Metadata } from "next";
import { Tektur, Noto_Sans_Mono, Yesteryear, Monsieur_La_Doulaise, Audiowide} from "next/font/google";
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

const yesteryear = Yesteryear({
  variable: "--font-yesteryear",
  subsets: ['latin'],
  weight: "400",
})

const monsieur = Monsieur_La_Doulaise({
  variable: "--font-monsieurladoulaise",
  subsets: ['latin'],
  weight: "400",
})

const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ['latin'],
  weight: "400",
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
        className={`${tektur.variable}  ${noto.variable} ${yesteryear.variable} ${monsieur.variable} ${audiowide.variable} antialiased vsc-initialized`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
