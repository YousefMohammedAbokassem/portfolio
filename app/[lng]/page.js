// import { useTranslation } from "next-i18next";
// import Translation from "./Components/i18next/Translation";
import TypeWriter from "./components/typeWriter/typeWriter";
// import styles from './page.moAdule.css'
import { Footer } from "./components/Footer";
import { useTranslation } from "../i18n";
import Image from "next/image";
import { fallbackLng, languages } from "../i18n/settings";
import me0 from "/public/img/me0.png";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return { title: t("home") };
}
export default async function Home({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng);
  return (
    <main className="mainBg home textColor container-fluid">
      <div className="infoAndImg d-flex align-items-center justify-content-center justify-content-md-between px-2 gap-md-4 ">
        <div className="info">
          <h1>{t("en")}</h1>
          {/* <Footer lng={lng} /> */}
          <h3>
            <b className="textColorProduct">
              {t("iam")} {/* <Translation word="iam" />{" "} */}
            </b>
            <TypeWriter
              myWords={["myWork", "myUniversity", "myStudy"]}
              lng={lng}
            />
          </h3>
          <p className="my-4 text-capitalize">
            {/* <Translation word="thisIs" /> */}
            {t("thisIs")}
          </p>
          <a
            className="text-decoration-none  py-2 px-4 radius-5 textColor"
            href="./cv"
            download={"CV"}
          >
            {t("cv")}
          </a>
        </div>
        {/*  */}
        <div className="image d-none d-md-block">
          <Image src={me0} alt="no image" width={"200"} height={"400"} />
        </div>
      </div>
    </main>
  );
}