import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webtune | Votre Gestionnaire de contenu",
  description: "Webtune est un projet qui a pour but de se liberer du temps , en minimisant les actions pour couvrir tout les réseaux sociaux!" +
      "Le tout en un , te feras gagné un temps fou",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="fr">
      <Head>
          <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
      </html>
  );
}
