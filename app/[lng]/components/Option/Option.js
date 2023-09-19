"use client";
import React, { useContext, useEffect, useState } from "react";
import "./option.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "@/app/i18n/client";
export default function Option( { lng } ) {
  const { t } = useTranslation(lng);
  const hide = () => {
    const Option = document.querySelector(".option");
    const iconOption = document.querySelector(".iconOption");
    Option.classList.toggle("showOption");
    iconOption.classList.toggle("fa-spin");
  };
  const changeColor = (e) => {
    const colorBody = e.target.dataset.colorbody;
    const colorBoxes = e.target.dataset.colorboxes;
    const textColor = e.target.dataset.textcolor;
    const spansTheme = document.querySelectorAll(".themes span");

    // set colors in local storage
    localStorage.setItem("colorbody", colorBody);
    localStorage.setItem("colorboxes", colorBoxes);
    // remove active class  from all span
    spansTheme.forEach((span) => {
      span.classList.remove("active");
    });
    // add active class to the target span
    e.target.classList.add("active");
    // set the colors to the project
    document.documentElement.style.setProperty(
      "--secondBg-color",
      `${colorBody}`
    );
    document.documentElement.style.setProperty("--bg-color", `${colorBoxes}`);
    document.documentElement.style.setProperty("--text-color", `${textColor}`);
  };
  const changeColorProduct = (e) => {
    const colorProduct = e.target.dataset.colorproduct;
    const spansTheme = document.querySelectorAll(".colorProduct div span");
    // set colors in local storage
    localStorage.setItem("colorproduct", colorProduct);
    // remove active class  from all span
    spansTheme.forEach((span) => {
      span.classList.remove("active");
    });
    // add active class to the target span
    e.target.classList.add("active");
    // set the colors to the project
    document.documentElement.style.setProperty(
      "--product-color",
      `${colorProduct}`
    );
  };
  const resetOptions = (e) => {
    const spansTheme = document.querySelectorAll(".option span");

    // remove active class  from all span
    spansTheme.forEach((span) => {
      span.classList.remove("active");
    });
    // add active class to the target span

    localStorage.removeItem("colorproduct");
    localStorage.removeItem("colorbody");
    localStorage.removeItem("colorboxes");
    document.documentElement.style.setProperty("--product-color", "");
    document.documentElement.style.setProperty("--bg-color", "");
    document.documentElement.style.setProperty("--secondBg-color", "");
    document.documentElement.style.setProperty("--text-color", "");
  };
  const [lan, setLan] = useState("en");
  useEffect(() => {
    if (typeof window != "undefined") {
      setLan(localStorage.getItem("i18nextLng"));

      const colorBody = localStorage.getItem("colorbody");
      const colorProduct = localStorage.getItem("colorproduct");
      const spansTheme = document.querySelectorAll(".themes span");
      const colorProductSpans = document.querySelectorAll(".colorProduct span");
      if (colorBody !== null) {
        spansTheme.forEach((span) => {
          if (colorBody === span.dataset.colorbody) {
            span.click();
          }
        });
      }
      if (colorProduct !== null) {
        colorProductSpans.forEach((span) => {
          if (colorProduct === span.dataset.colorproduct) {
            span.click();
          }
        });
      }
    }
  }, []);
  return (
    <div className={`${lan === "ar" ? "ar" : ""} option`}>
      <span
        className={`${lan === "ar" ? "ar" : ""} position-absolute`}
        onClick={hide}
      >
        {/* fa-spin */}
        <FontAwesomeIcon icon={faGear} className="iconOption" />
      </span>
      <h6>{t("colors")}</h6>
      <div className="themes">
        {/* #83e */}
        <span
          className="resetSpan"
          data-colorbody="#112e42"
          data-colorboxes="#081b29"
          data-textcolor="#fff"
          onClick={changeColor}
        ></span>
        <span
          data-colorbody="#112e42"
          data-colorboxes="#081b29"
          data-textcolor="#fff"
          onClick={changeColor}
        ></span>
      </div>
      <div className="colorProduct d-flex flex-column align-items-center justify-content-center">
        <h6 className="position-absolute">{t("subColors")}</h6>
        <div className="d-flex justify-content-center align-items-center gap-2 ">
          <span
            className="resetSpan"
            data-colorproduct="#863eff"
            onClick={changeColorProduct}
          ></span>
          <span data-colorproduct="#fe6c00" onClick={changeColorProduct}></span>
          <span data-colorproduct="#e91e63" onClick={changeColorProduct}></span>
          <span data-colorproduct="#00abf0" onClick={changeColorProduct}></span>
        </div>
      </div>
      <button
        className="mt-3  border-0 text-white mainBg py-2 px-1 resetBtn"
        onClick={resetOptions}
      >
        {t("reset")}
      </button>
    </div>
  );
}
