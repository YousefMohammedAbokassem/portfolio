"use client";
import Link from "next/link";
import { languages } from "../../../i18n/settings";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "@/app/i18n/client";

export default function Local({ lng }) {
  // const { t } = useTranslation(lng);
  const set = (e) => {
    localStorage.setItem("i18nextLng", e);
  };
  const showLanguage = () => {
    let languages = document.querySelector(".languages");
    // setBool(!bool);
    languages.classList.toggle("active");
  };
  return (
    <div className="lan mx-2 pointer textColor position-relative">
      <FontAwesomeIcon
        icon={faLanguage}
        className="lanIcon"
        onClick={showLanguage}
      />
      <ul className="languages position-absolute list-unstyled mb-0 ">
        <span></span>
        {languages.map((l, index) => {
          return (
            <li key={l} className={`text-center`}>
              <Link
                href={`/${l}`}
                onClick={() => set(l)}
                className=" text-decoration-none text-white  py-2 px-3 pointer liLan text-center d-block"
              >
                {l}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
