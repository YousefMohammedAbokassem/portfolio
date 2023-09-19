// Import Swiper React components
import { useTranslation as UseTranslation } from "@/app/i18n";
import HeadPage from "../components/headPage/headPage";
// import { useTranslation } from "@/app/i18n";
import Swiper2 from "./Swiper";

export async function generateMetadata({ params: { lng } }) {
  const { t } = await UseTranslation(lng);
  return { title: t("gallery") };
}
export default function Gallery({ params: { lng } }) {
  // const { t } = await useTranslation(lng);
  return (
    <div id="gallery">
      <HeadPage word1={"someof "} word2={"mywork"} lng={lng} />
      <div>
        <div className="row px-0">
          <div className="px-0 ">
            <Swiper2 />
          </div>
        </div>
      </div>
    </div>
  );
}
