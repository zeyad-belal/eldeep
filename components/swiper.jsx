"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import Image from "next/image";

const MySwiper = () => {
  return (
    <Swiper
      spaceBetween={50} // Space between slides
      slidesPerView={3} // Number of slides per view
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Image src={"/logo.png"} width={300} height={300} />{" "}
      </SwiperSlide>
      <SwiperSlide>
        <Image src={"/logo.png"} width={300} height={300} />{" "}
      </SwiperSlide>
      <SwiperSlide>
        <Image src={"/logo.png"} width={300} height={300} />{" "}
      </SwiperSlide>
      <SwiperSlide>
        <Image src={"/logo.png"} width={300} height={300} />{" "}
      </SwiperSlide>
      {/* Additional slides here */}
    </Swiper>
  );
};

export default MySwiper;
