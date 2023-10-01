// import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "./components/Nav/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/layout.scss";
import Option from "./components/Option/Option";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import { useTranslation } from "../i18n";
import TypeWriter from "./components/typeWriter/typeWriter";
import Image from "next/image";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;
// import WOW from "wowjs";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",

  // charset: "UTF-8",
};
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function RootLayout({ children, params: { lng } }) {
  const { t } = await useTranslation(lng);
  // console.log(WOW);
  // new WOW.WOW().init();

  // componentDidMount() {
  // new WOW().init()
  // }
  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <meta
          name="description"
          content="A playground to explore new Next.js 13 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching."
        />
      </head>
      <body className={inter.className}>
        <Nav lng={lng} />
        <Option lng={lng} />
        {children}
      </body>
    </html>
  );
}
