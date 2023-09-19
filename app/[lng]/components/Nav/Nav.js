"use client";
import { useTranslation } from "../../../i18n/client";
import { faBars, faClose, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { memo, useEffect, useState } from "react";
import { Footer } from "../Footer/client";
import { usePathname } from "next/navigation";
// import { Footer } from "../Footer/client";
// import Translation from "../i18next/Translation";
function Nav({ lng }) {
  const [bool, setBool] = useState(true);
  const [lan, setLan] = useState("en");
  const { t } = useTranslation(lng, "client-page");
  const pathname = usePathname();
  const showNav = () => {
    setBool(!bool);
    const myUlNav = document.querySelector(".myUlNav");
    myUlNav.classList.toggle("active");
  };

  const changeActiveClass = (e) => {
    // remove active class from all lis
    const liLan = document.querySelectorAll(".ulBar ul li a");

    liLan.forEach((li) => {
      li.classList.remove("active");
    });
    // add active class to the target
    e.target.classList.add("active");
  };
  return (
    <nav className="secondBg container-fluid d-flex align-items-center justify-content-between">
      <div className="logoLan d-flex align-items-center justify-content-center">
        <div className="logo textColor fw-bold ">{t("yousef")}</div>
        <Footer lng={lng} />
      </div>
      <div className="ulBar d-flex align-items-center justify-content-center">
        <ul
          className="list-unstyled mb-0 d-flex align-items-center justify-content-center myUlNav"
          onClick={showNav}
        >
          <li className="d-block">
            <Link
              href={`/${lng}`}
              className={`${lan === "ar" ? "ar" : ""} ${
                pathname === `/${lng}`
                  ? "active text-decoration-none d-block  mx-0 mx-md-2 px-2 py-2"
                  : "text-decoration-none d-block  mx-0 mx-md-2 px-2 py-2"
              }`}
              onClick={changeActiveClass}
              prefetch={true}
            >
              {t("home")}
            </Link>
          </li>
          <li className="d-block">
            <Link
              href={`/${lng}/skills`}
              className={`${lan === "ar" ? "ar" : ""} ${
                pathname === `/${lng}/skills`
                  ? "active text-decoration-none d-block  mx-0 mx-md-2 px-2 py-2"
                  : "text-decoration-none d-block  mx-0 mx-md-2 px-2 py-2"
              }`}
              onClick={changeActiveClass}
            >
              {t("skills")}
            </Link>
          </li>
          <li className="d-block">
            <Link
              href={`/${lng}/gallery`}
              className={`${lan === "ar" ? "ar" : ""} ${
                pathname === `/${lng}/gallery`
                  ? "active text-decoration-none d-block  mx-0 mx-md-2 px-2 py-2"
                  : "text-decoration-none d-block  mx-0 mx-md-2 px-2 py-2"
              }`}
              onClick={changeActiveClass}
            >
              {t("gallery")}
            </Link>
          </li>
          <li className="d-block">
            <Link
              href={`/${lng}/about`}
              className={`${lan === "ar" ? "ar" : ""} ${
                pathname === `/${lng}/about`
                  ? "active text-decoration-none d-block  mx-0 mx-md-2 px-2 py-2"
                  : "text-decoration-none d-block  mx-0 mx-md-2 px-2 py-2"
              }`}
              onClick={changeActiveClass}
            >
              {t("about")}
            </Link>
          </li>
          <li className="d-block">
            <Link
              href={`/${lng}/contactUs`}
              className={`${lan === "ar" ? "ar" : ""} ${
                pathname === `/${lng}/contactUs`
                  ? "active text-decoration-none d-block  mx-0 mx-md-2 px-2 py-2"
                  : "text-decoration-none d-block  mx-0 mx-md-2 px-2 py-2"
              }`}
              onClick={changeActiveClass}
            >
              {t("contactUs")}
            </Link>
          </li>
        </ul>
        <FontAwesomeIcon
          icon={bool ? faBars : faClose}
          className="textColor pointer BarIcon d-block d-md-none"
          onClick={showNav}
        />
      </div>
    </nav>
  );
}
export default memo(Nav);
