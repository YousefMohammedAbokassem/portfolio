"use client";
import React, { useEffect, useState } from "react";
import HeadPage from "../components/headPage/headPage";
import { useTranslation } from "@/app/i18n/client";
// import WOW from "wowjs";

export default function Skills({ params: { lng } }) {
  const { t } = useTranslation(lng);
  let [sum, setSum] = useState(1);
  const progresses = () => {
    const progs = document.querySelectorAll(".prog");
    const lanProgs = document.querySelectorAll(".lanProg");
    progs.forEach((prog) => {
      let sum = 0;
      let counter = setInterval(() => {
        prog.style.cssText = `background: conic-gradient(var(--product-color) ${
          sum * 3.6
        }deg, transparent 0deg)`;
        if (sum >= prog.dataset.progress) {
          sum = 0;
          clearInterval(counter);
        }
        sum++;
      }, 1500 / prog.dataset.progress);
    });
    lanProgs.forEach((lanProg) => {
      let sumLan = 0;
      let counterLan = setInterval(() => {
        lanProg.innerHTML = `${sumLan}%`;
        if (sumLan >= lanProg.dataset.progress) {
          sumLan = 0;
          clearInterval(counterLan);
        }
        sumLan++;
      }, 1500 / lanProg.dataset.progress);
    });
  };
  useEffect(() => {
    // new WOW.WOW().init();
    progresses();
  }, []);
  return (
    <>
      <div
        id="Skills"
        className="d-flex flex-column py-5 justify-content-center align-items-center gap-3"
      >
        {/* <HeadPage word1="jobSkills" word2="theJob" lng={lng} /> */}
        {/* <Progress progress={75} reduction ={0}/>; */}
        <div className="progresses row mx-0 ">
          {[
            { id: 1, progress: "90", programmingLan: "HTML" },
            { id: 2, progress: "80", programmingLan: "CSS" },
            { id: 3, progress: "75", programmingLan: "BOOTSTRAP" },
            { id: 4, progress: "85", programmingLan: "SCSS" },
            { id: 5, progress: "70", programmingLan: "JS" },
            { id: 6, progress: "60", programmingLan: "Typescript" },
            { id: 7, progress: "65", programmingLan: "REACT" },
            { id: 8, progress: "50", programmingLan: "NEXT" },
          ].map((item) => {
            return (
              <div
                className="col-sm-6 col-md-4 col-lg-3  mt-4 mt-sm-3"
                key={item.id}
              >
                <div className="prog" data-progress={item.progress}>
                  <span>{item.programmingLan}</span>{" "}
                  <b className="lanProg" data-progress={item.progress}>
                    {item.progress}%
                  </b>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
