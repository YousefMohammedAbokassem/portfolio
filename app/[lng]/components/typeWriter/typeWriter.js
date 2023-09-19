"use client";
import { useTranslation } from "@/app/i18n/client";
import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";

export default function TypeWriter({ myWords, lng }) {
  const [bool, setBool] = useState(true);
  const { t } = useTranslation(lng);
  return (
    <>
      <Typewriter
        words={myWords.map((word) => t(word))}
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={1000}
        loop={false}
        cursor={true}
        cursorBlinking={bool}
        cursorStyle={" |"}
        onType={() => setBool(false)}
        onDelete={() => setBool(false)}
        onDelay={() => setBool(true)}
      />
    </>
  );
}
