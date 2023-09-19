import { useTranslation } from "@/app/i18n";
import React from "react";
export default async function HeadPage({ word1, word2, lng }) {
  const { t } =await useTranslation(lng);
  return (
    <h1 style={{ marginTop: -40, fontSize: 40 }}>
      <span>{t(word1)}</span>{" "}
      <span style={{ color: `var(--product-color)` }}>{t(word2)}</span>
    </h1>
  );
}
