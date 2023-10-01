"use client";
import { useTranslation } from "@/app/i18n/client";
import React, { useEffect } from "react";
import { moveButton } from "../Button";
// import WOW from "wowjs";
import template101 from "/public/img/template101.png";
import Image from "next/image";

export default function Anchore({ lng }) {
  const { t } = useTranslation(lng);

  useEffect(() => {
    // console.log(WOW);
    // new WOW.WOW().init();
  }, []);

  // const moveButton = (e) => {
  //   const x = e.pageX - e.target.offsetLeft;
  //   const y = e.pageY - e.target.offsetTop - 60;
  //   console.log(x, "x");
  //   console.log(y, "y");
  //   e.target.style.setProperty("--x", `${x}px`);
  //   e.target.style.setProperty("--y", `${y}px`);
  // };

  return (
    <a
      className="text-decoration-none py-2 px-4 radius-5 textColor cv"
      href={`/cv.pdf`}
      download
      onMouseMove={moveButton}
    >
      {t("cv")}
    </a>
  );
}
