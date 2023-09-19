"use client";
import { useTranslation } from "@/app/i18n/client";
import { languages } from "@/app/i18n/settings";
import Link from "next/link";

export default  function Lngs({ name, lng }) {
  const { t } =  useTranslation(lng);
  return (
    <>
      {languages.map((l, index) => {
        return (
          <li key={l} className={`text-center`}>
            <Link
              href={`/${l}${name()}`}
              onClick={() => set(l)}
              className=" text-decoration-none text-white  py-2 px-3 pointer liLan text-center d-block"
            >
              {/* ????????? */}
              {l}
            </Link>
          </li>
        );
      })}
    </>
  );
}
