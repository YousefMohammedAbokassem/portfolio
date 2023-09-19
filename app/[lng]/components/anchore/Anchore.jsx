"use client";
import { useTranslation } from "@/app/i18n/client";
import React from "react";
import { moveButton } from "../Button";
export default function Anchore({ lng }) {
  const { t } = useTranslation(lng);
  //   const moveButton = (e) => {
  //     const x = e.pageX - e.target.offsetLeft;
  //     const y = e.pageY - e.target.offsetTop;
  //     console.log(e.pageX,"pagex")
  //     console.log(e.target.offsetLeft);
  //     e.target.style.setProperty("--x", `${x}px`);
  //     e.target.style.setProperty("--y", `${y}px`);
  //   };

  return (
    <a
      className="text-decoration-none  py-2 px-4 radius-5 textColor cv"
      href="./cv"
      download={"CV"}
      onMouseMove={moveButton}
    >
      {t("cv")}
    </a>
  );
}
