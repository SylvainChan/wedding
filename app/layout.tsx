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

const qwitcher_grypen = Qwitcher_Grypen({
  subsets: ["latin"],
  variable: "--font-qwitcher_grypen",
  weight: ["400", "700"],
});

const dancing_script = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-ds",
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

const mw = Merriweather({
  subsets: ["latin"],
  variable: "--font-mw",
  weight: ["300", "400", "700", "900"],
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
      className={`${qwitcher_grypen.variable} ${dancing_script.variable} ${lato.variable} ${mw.variable}`}
    >
      <body>
        <Container className="px-0 text-df font-default">{children}</Container>
      </body>
    </html>
  );
}
