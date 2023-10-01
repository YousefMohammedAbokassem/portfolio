// import { useTranslation } from "next-i18next";
// import Translation from "./Components/i18next/Translation";
import TypeWriter from "./components/typeWriter/typeWriter";
import { Footer } from "./components/Footer";
// import { useTranslation } from "../i18n/index";
import Image from "next/image";
import { fallbackLng, languages } from "../i18n/settings";
import me0 from "/public/img/me0.png";
import { useTranslation as UseTranslation } from "../i18n";
import Anchore from "./components/anchore/Anchore";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await UseTranslation(lng);
  return { title: t("home") };
}
export default async function Home({ params: { lng, d } }) {
  console.log(d,"d");
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await UseTranslation(lng);
  return (
    <main className="mainBg home textColor container-fluid">
      <div className="infoAndImg d-flex align-items-center justify-content-center justify-content-md-between px-2 gap-md-4 ">
        <div className="info">
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
          <Anchore lng={lng} />
        </div>
        {/*  */}
        <div className="image d-none d-md-block">
          <Image src={me0} alt="no image" width={"200"} height={"400"} />
        </div>
      </div>
    </main>
  );
}
