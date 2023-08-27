import "./globals.css";
import type { Metadata } from "next";
import {
  Dancing_Script,
  Inter,
  Lato,
  Merriweather,
  Merriweather_Sans,
  Qwitcher_Grypen,
  Roboto_Mono,
} from "next/font/google";
import { Container } from "@mui/material";
import { undefined } from "zod";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const qwitcher_grypen = Qwitcher_Grypen({
  subsets: ["latin"],
  variable: "--font-qwitcher_grypen",
  weight: "400",
});

const dancing_script = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-ds",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: "300",
});

const mw = Merriweather({
  subsets: ["latin"],
  variable: "--font-mw",
  weight: "300",
});

export const metadata: Metadata = {
  title: "Sylvain & Janice",
  description: "The Big Day - Sylvain & Janice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto_mono.variable} ${qwitcher_grypen.variable} ${dancing_script.variable} ${lato.variable} ${mw.variable}`}
    >
      <body>
        <Container className="px-0">{children}</Container>
      </body>
    </html>
  );
}
