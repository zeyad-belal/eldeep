"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const MySwiper = () => {
  return (
    <Swiper
      spaceBetween={20} // Space between slides
      slidesPerView={1} // Number of slides per view
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      <SwiperSlide>
        <a
          className="cursor-pointer flex flex-col justify-center items-center "
          href="/book"
        >
          {" "}
          <Image
            src={"/productDesign/pictures/book/1-min.png"}
            width={450}
            height={450}
          />{" "}
          <div className="gradient-background px-3 rounded-b-sm  py-4 w-full max-w-[450px]">
            Book{" "}
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a
          className="cursor-pointer flex flex-col justify-center items-center"
          href="/phone"
        >
          {" "}
          <Image
            src={"/productDesign/pictures/phone/4-min.png"}
            width={450}
            height={450}
          />{" "}
          <div className="gradient-background px-3 rounded-b-sm  py-4 w-full max-w-[450px]">
            Phone{" "}
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a
          className="cursor-pointer flex flex-col justify-center items-center"
          href="/sauvage"
        >
          {" "}
          <Image
            src={"/productDesign/pictures/sauvage perfume/1-min.png"}
            width={450}
            height={450}
          />{" "}
          <div className="gradient-background px-3 rounded-b-sm  py-4 w-full max-w-[450px]">
            Sauvage Perfume{" "}
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a
          className="cursor-pointer flex flex-col justify-center items-center"
          href="/spiro"
        >
          {" "}
          <Image
            src={"/productDesign/pictures/spiro spates/2-min.png"}
            width={450}
            height={450}
          />{" "}
          <div className="gradient-background px-3 rounded-b-sm  py-4 w-full max-w-[450px]">
            Spiro pates{" "}
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a
          className="cursor-pointer flex flex-col justify-center items-center"
          href="/sweet"
        >
          {" "}
          <Image
            src={"/productDesign/pictures/sweet vanilla serum/thumb.png"}
            width={450}
            height={450}
          />{" "}
          <div className="gradient-background px-3 rounded-b-sm  py-4 w-full max-w-[450px]">
            Sweet Vanilla Serum{" "}
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a
          className="cursor-pointer flex flex-col justify-center items-center"
          href="/airFilter"
        >
          {" "}
          <Image
            src={"/productDesign/pictures/air filter/thumb.png"}
            width={450}
            height={450}
          />{" "}
          <div className="gradient-background  px-3 rounded-b-sm  py-4 w-full max-w-[450px]">
            Air Filter{" "}
          </div>
        </a>
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
