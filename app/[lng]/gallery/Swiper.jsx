"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";


import Image from "next/image";
import template101 from "/public/img/template101.png";
import template102 from "/public/img/template201.png";
import template103 from "/public/img/template301.png";
import template104 from "/public/img/template401.png";
import template105 from "/public/img/template501.png";
import template106 from "/public/img/template601.png";
import template107 from "/public/img/template701.png";
import template108 from "/public/img/template801.png";
import template109 from "/public/img/template901.png";

export default function Swiper2() {
  return <>
    <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        //   dir="rtl"
        // autoplay={{
        //   delay: 1500,
        //   disableOnInteraction: false,
        // }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className={`mySwiper`}
      >
        <SwiperSlide>
          <a href="https://yousefmohammedabokassem.github.io/trmplate-1-html-css/">
            <Image
              src={template101}
              alt="no image"
              width={"200"}
              height={"400"}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href=" https://yousefmohammedabokassem.github.io/temlate-2/">
            <Image
              src={template102}
              alt="no image"
              width={"200"}
              height={"400"}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href=" https://yousefmohammedabokassem.github.io/template_3/">
            <Image
              src={template103}
              alt="no image"
              width={"200"}
              height={"400"}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://yousefmohammedabokassem.github.io/Template_4/">
            <Image
              src={template104}
              alt="no image"
              width={"200"}
              height={"400"}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href=" https://yousefmohammedabokassem.github.io/Bootstrap_Design_1/">
            <Image
              src={template105}
              alt="no image"
              width={"200"}
              height={"400"}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://yousefmohammedabokassem.github.io/Template-7/">
            <Image
              src={template107}
              alt="no image"
              width={"200"}
              height={"400"}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://yousefmohammedabokassem.github.io/dashboard/">
            <Image
              src={template108}
              alt="no image"
              width={"200"}
              height={"400"}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://yousefmohammedabokassem.github.io/mobile/">
            <Image
              src={template109}
              alt="no image"
              width={"200"}
              height={"400"}
              priority
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://yousefmohammedabokassem.github.io/todo/">
            <Image
              src={template106}
              alt="no image"
              width={"200"}
              height={"400"}
              priority
            />
          </a>
        </SwiperSlide>
      </Swiper></>;
}
