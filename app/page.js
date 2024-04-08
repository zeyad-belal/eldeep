"use client";

import Modal from "@/components/Modal";
import Nav from "@/components/nav";
import RotatingText from "@/components/rotatingText";
import MySwiper from "@/components/swiper";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const videos = [
    {
      src: "/productDesign/animations/product animation/0001-0600.mp4",
      type: "video/mp4",
    },
    {
      src: "/productDesign/animations/product animation/book animation.mp4",
      type: "video/mp4",
    },
    {
      src: "/productDesign/animations/product animation/bottle 3d animation.mp4",
      type: "video/mp4",
    },
    {
      src: "/productDesign/animations/product animation/Micropthone - maono.mp4",
      type: "video/mp4",
    },
    {
      src: "/productDesign/animations/product animation/perfume animation suavage.mp4",
      type: "video/mp4",
    },
    {
      src: "/productDesign/animations/product animation/PRODUCT DESIGN - PHONE.mp4",
      type: "video/mp4",
    },
    {
      src: "/productDesign/animations/product animation/Skillet.mp4",
      type: "video/mp4",
    },
  ];

  return (
    <>
      <main id="heroSec">
        <Nav />
        <div
          id="home"
          className="hero flex justify-between items-center h-[85vh] px-3 md:px-6 lg:px-12 mx-2 lg:mx-6"
        >
          <div className="flex flex-col gap-2 w-full">
            <RotatingText />
            <p className="text-3xl md:text-4xl lg:text-6xl ">with 3D Design.</p>
            <p
              className="flex items-center gap-4 mt-12 text-lg cursor-pointer hover:bg-white hover:bg-opacity-20 w-fit px-1 rounded py-2"
              onClick={() => setModalOpen(true)}
            >
              <svg
                width="25"
                height="20"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M25 10 L75 50 L25 90 V10" fill="white" />
              </svg>
              Check out my work
            </p>

            {modalOpen && (
              <div className="relative !w-full !h-full bg-white">
                <div
                  className="mt-[5%] max-w-[80%] max-h-[70%] z-30 fixed inset-0 mx-auto"
                  onClose={() => setModalOpen(false)}
                >
                  <div className="self-end cursor-pointer font-bold text-lg " onClick={() => setModalOpen(false)}>X</div>
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    {videos.map((video, index) => (
                      <SwiperSlide key={index}>
                        <video controls width="100%">
                          <source src={video.src} type={video.type} />
                          Your browser does not support the video tag.
                        </video>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            )}

            <p className="mt-12 max-w-[300px] text-lg tracking-wider font-thin">
              High-Quality 3D Renders and animations for your brand.
            </p>
          </div>
          <ul className="flex flex-col justify-center items-center gap-3">
            <a
              className="cursor-pointer hover:bg-white hover:bg-opacity-20 rounded-full"
              href="https://wa.me/+971581202186"
            >
              <Image
                src={"/social/whatsapp-svgrepo-com.svg"}
                width={25}
                height={25}
              />
            </a>
            <a
              className="cursor-pointer hover:bg-white hover:bg-opacity-20 rounded-full"
              href="https://www.linkedin.com/in/ziad-eldeeb/"
            >
              {" "}
              <Image
                src={"/social/linkedin-svgrepo-com.svg"}
                width={35}
                height={35}
              />
            </a>
            <a
              className="cursor-pointer hover:bg-white hover:bg-opacity-20 rounded-full"
              href="https://t.me/zeldeeb33"
            >
              {" "}
              <Image
                src={"/social/telegram-svgrepo-com.svg"}
                width={35}
                height={35}
              />
            </a>
          </ul>
          <div className="overlay"></div>
        </div>
      </main>
      {/* ==========================================portfolio====================================================== */}
      <div
        id="portfolio"
        className="  min-h-[450px]  px-3 md:px-6 lg:px-12 mx-2 lg:mx-6 "
      >
        <h2 className="text-xl mb-8"> PORTFOLIO:</h2>
        <MySwiper />
      </div>
      {/* ==========================================services====================================================== */}
      <div
        id="services"
        className="  min-h-[400px] px-3 md:px-6 lg:px-12 mx-2 lg:mx-6 flex flex-col justify-center items-center"
      >
        <h2 className="text-xl self-start"> SERVICES:</h2>
        <h4 className=" w-fit mx-auto text-lg font-thin tracking-widest  mt-4">
          What I DO ?
        </h4>
        <ul className="w-full grid grid-cols-4 gap-4 justify-around items-center py-12 px-6">
          <li className="text-lg lg:col-span-1 sm:col-span-2 col-span-4  flex flex-col  justify-center items-center gap-4 border border-white border-opacity-10 shadow-lg shadow-[#ffffff39] px-12 py-6  min-w-[24%]  rounded hover:scale-[1.02] cursor-pointer">
            <p className="mx-auto w-fit mb-3">UI/UX</p>
            <Image
              src={"/services/crown-minimalistic-svgrepo-com.svg"}
              width={100}
              height={100}
            />
          </li>
          <li className="text-lg lg:col-span-1 sm:col-span-2 col-span-4  flex flex-col  justify-center items-center gap-4 border border-white border-opacity-10 shadow-lg shadow-[#ffffff39] px-12 py-6  min-w-[24%]  rounded hover:scale-[1.02] cursor-pointer">
            <p className="mx-auto w-fit mb-3">Web Design</p>
            <Image
              src={"/services/screen-desktop-svgrepo-com.svg"}
              width={100}
              height={100}
            />
          </li>
          <li className="text-lg lg:col-span-1 sm:col-span-2 col-span-4  flex flex-col  justify-center items-center gap-4 border border-white border-opacity-10 shadow-lg shadow-[#ffffff39] px-12 py-6  min-w-[24%]  rounded hover:scale-[1.02] cursor-pointer">
            <p className="mx-auto w-fit mb-3">App Design</p>
            <Image
              src={"/services/mobile-svgrepo-com.svg"}
              width={100}
              height={100}
            />
          </li>
          <li className="text-lg lg:col-span-1 sm:col-span-2 col-span-4  flex flex-col  justify-center items-center gap-4 border border-white border-opacity-10 shadow-lg shadow-[#ffffff39] px-12 py-6  min-w-[24%]  rounded hover:scale-[1.02] cursor-pointer">
            <p className="mx-auto w-fit mb-3">SEO </p>
            <Image
              src={"/services/stats-1368-svgrepo-com.svg"}
              width={100}
              height={100}
            />
          </li>
        </ul>
      </div>
      {/* ==========================================about me====================================================== */}
      <div
        id="about"
        className="h-[80vh] min-h-[450px] mt-6 sm:mt-0 flex flex-col items-center justify-center px-3 md:px-6 lg:px-12 mx-2 lg:mx-6 "
      >
        <h2 className="text-xl mb-8 self-start mx-6"> ABOUT ME:</h2>
        <div className="flex flex-wrap md:flex-nowrap items-center gap-8 mx-6">
          <div className="max-w-[200px] md:max-w-[600px] h-fit ">
            <Image
              src={"/eldeep.jpg"}
              width={600}
              height={600}
              className="rounded-lg shadow-lg shadow-[#ffffff4e]"
            />
          </div>
          <div>
            <h4 className="tracking-widest">ZIAD ELDEEP</h4>
            <h6 className="font-thin mb-4">3D Desginer</h6>
            <p className="sm:max-w-[70%] w-full tracking-wider text-gray-300 text-sm sm:text-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident, pariatur, aperiam aut autem voluptas odit. Odio ducimus
              delectus totam sed aliquam sequi praesentium mollitia, illum
              repudiandae quidem quod, magni magnam. <br></br> Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Enim, eius, nam. Quo
              praesentium qui temporibus voluptatum, facilis aliquid eligendi
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
