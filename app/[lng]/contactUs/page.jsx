import HeadPage from "../components/headPage/headPage";
import Anchore from "../components/anchore/Anchore";
import { useTranslation } from "@/app/i18n";

export default async function ContactUs({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <div
      id="contact"
      className="d-flex flex-column py-5 justify-content-center align-items-center"
    >
      <HeadPage word1={"contact"} word2={"us"} lng={lng} />
      <form className="row">
        <div className="col-md-6">
          <input type="text" placeholder={t("fullName")} />
        </div>
        <div className="col-md-6">
          <input type="email" placeholder={t("emailAddress")} />
        </div>
        <div className="col-md-6">
          <input type="text" placeholder={t("number")} />
        </div>
        <div className="col-md-6">
          <input type="email" placeholder={t("emailSubject")} />
        </div>
        <div className="col-12">
          <textarea placeholder={t("yourmessage")}></textarea>
        </div>
      </form>
      {/* <Anchore lng={lng} word={"sumbit"} /> */}
    </div>
  );
}
