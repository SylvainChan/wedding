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
import { TopNavBar } from "@/app/view/TopNavBar";
import { Suspense } from "react";
import Loading from "@/app/loading";

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
        <div className="container mx-auto text-df font-default">
          <div
            className="bg-cover bg-fixed bg-no-repeat min-h-screen"
            style={{
              backgroundImage:
                'url("https://wedsites.s3.amazonaws.com/accounts/3493/header/898/wallpaper-1620343201.png")',
            }}
          >
            <TopNavBar />
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </div>
        </div>
      </body>
    </html>
  );
}
