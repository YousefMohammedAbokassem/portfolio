// import Translation from "../Components/i18next/Translation";
import { useTranslation as UseTranslation } from "@/app/i18n";
import HeadPage from "../components/headPage/headPage";
import Image from "next/image";
import myImage from "/public/img/myImage.png";
import Head from "next/head";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await UseTranslation(lng);
  return { title: t("about") };
}
export default async function About({ params: { lng } }) {
  // http://localhost:5000/products
  const { t } = await UseTranslation(lng);
  return (
    <div
      id="about"
      className="d-flex flex-column py-5 justify-content-center align-items-center"
    >
      <HeadPage word1={"about "} word2={"me"} lng={lng} />
      <div className="image">
        <Image
          src={myImage}
          alt="no image"
          width={"200"}
          height={"200"}
          // priority
        />
      </div>
      <h2 className="py-3 mb-0">{t("myWork")}</h2>
      <p className="text-center">{t("thisIs")}</p>
      <a
        href="/cv.pdf"
        className="text-decoration-none py-2 px-4 radius-5 textColor"
        download={"cv"}
      >
        {t("cv")}
      </a>
    </div>
  );
}
