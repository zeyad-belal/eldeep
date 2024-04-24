"use client";

import Nav from "@/components/nav";
import RotatingText from "@/components/rotatingText";
import MySwiper from "@/components/swiper";
import Image from "next/image";
import { useState } from "react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Contact from "@/components/contact";
import SecDivider from "@/components/SecDivider";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

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
              <div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60"
                onClick={() => setModalOpen(false)} // Click handler to close the modal when the background is clicked
              >
                <div
                  className="relative max-w-[80%] max-h-[70%] z-30"
                  onClick={(e) => e.stopPropagation()} // Prevents the click on the modal from propagating to the background
                >
                  <div
                    className="absolute top-0 right-0 cursor-pointer font-bold text-lg p-2"
                    onClick={() => setModalOpen(false)}
                  >
                    X
                  </div>
                  <video
                    width="1000"
                    height="1000"
                    className="max-w-[95%] md:max-w-[90%] max-h-[95%] md:max-h-[90%] mx-auto"
                    controls
                    autoPlay
                  >
                    <source src="promo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
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
          {/* <div className="overlay"></div> */}
        </div>
      </main>
      {/* ==========================================services====================================================== */}
      <SecDivider />

      <div
        id="services"
        className="  min-h-[400px] px-3 md:px-6 lg:px-12 mx-2 lg:mx-6 flex flex-col justify-center items-center"
      >
        <h2 className="text-xl self-start"> SERVICES:</h2>
        <h4 className=" w-fit mx-auto text-lg font-thin tracking-widest  mt-4">
          What I DO ?
        </h4>
        <ul className="w-full flex md:flex-nowrap flex-wrap gap-4 justify-around items-center py-12 px-4 sm:px-6">
          <li className="text-lg min-w-[240px]  flex flex-col  justify-center items-center gap-4 border border-white border-opacity-10 shadow-md shadow-[#ffffff22] px-12 py-6   rounded-lg hover:scale-[1.02] cursor-pointer">
            <p className="mx-auto font-semibold w-fit mb-3">CGI</p>
            <div className="max-w-[300px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-earth"
              >
                <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
                <path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17" />
                <path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
          </li>
          <li className="text-lg min-w-[240px]   flex flex-col  justify-center items-center gap-4 border border-white border-opacity-10 shadow-md shadow-[#ffffff22] px-12 py-6   rounded hover:scale-[1.02] cursor-pointer">
            <p className="mx-auto font-semibold min-w-[146px] w-fit mb-3">
              Product Renders{" "}
            </p>
            <div className="max-w-[300px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-cloud-cog"
              >
                <circle cx="12" cy="17" r="3" />
                <path d="M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" />
                <path d="m15.7 18.4-.9-.3" />
                <path d="m9.2 15.9-.9-.3" />
                <path d="m10.6 20.7.3-.9" />
                <path d="m13.1 14.2.3-.9" />
                <path d="m13.6 20.7-.4-1" />
                <path d="m10.8 14.3-.4-1" />
                <path d="m8.3 18.6 1-.4" />
                <path d="m14.7 15.8 1-.4" />
              </svg>
            </div>
          </li>
          <li className="text-lg min-w-[240px]   flex flex-col  justify-center items-center gap-4 border border-white border-opacity-10 shadow-md shadow-[#ffffff22] px-12 py-6   rounded hover:scale-[1.02] cursor-pointer">
            <p className="mx-auto font-semibold w-fit mb-3">3D animation </p>
            <div className="max-w-[300px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-box"
                className="max-w-full"
              >
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
              </svg>
            </div>
          </li>
        </ul>
      </div>
      {/* ==========================================Summaryy Video====================================================== */}
      <SecDivider />
      <div
        id="services"
        className="  min-h-[250px] px-3 md:px-6 lg:px-12 mx-2 lg:mx-6 flex flex-col justify-center items-center"
      >
        <h4 className=" w-fit mx-auto text-lg font-thin tracking-widest  mb-4 ">
          Quick Look ?
        </h4>
        <video
          width="1000"
          height="1000"
          className="max-w-[95%] md:max-w-[90%] max-h-[95%] md:max-h-[90%] mx-auto rounded-lg shadow-[#77edff5a] shadow-lg  "
          muted
          autoPlay
        >
          <source src="summary.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* ==========================================portfolio====================================================== */}
      <SecDivider />

      <div id="portfolio" className="px-3 md:px-6 lg:px-12 mx-2 lg:mx-6">
        <div className="flex justify-between items center w-full mb-8">
          {" "}
          <h2 className="text-xl "> PORTFOLIO:</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-move-right"
          >
            <path d="M18 8L22 12L18 16" />
            <path d="M2 12H22" />
          </svg>
        </div>
        <MySwiper />
      </div>

      {/* ==========================================experince====================================================== */}
      <SecDivider />

      <div
        id="experince"
        className="  min-h-[400px] px-3 md:px-6 lg:px-12 mx-2 lg:mx-6 flex flex-col justify-center items-center"
      >
        <h2 className="text-xl self-start uppercase"> experince:</h2>
        <ul className="w-full flex md:flex-nowrap flex-wrap gap-6 justify-around items-center py-12 px-4 sm:px-6">
          <li className="flex flex-col  justify-center items-center gap-4 text-sm sm:text-lg px-6 py-4">
            <p className="mx-auto font-semibold w-fit mb-3 text-4xl sm:text-6xl lg:text-7xl">
              +50{" "}
            </p>
            <p className="max-w-[300px]">Finished Projects</p>
          </li>
          <li className=" flex flex-col  justify-center items-center gap-4 text-sm sm:text-lg px-6 py-4">
            <p className="mx-auto font-semibold w-fit mb-3 text-4xl sm:text-6xl lg:text-7xl">
              +1000{" "}
            </p>
            <p className="max-w-[300px]">Hours in Blender</p>
          </li>
          <li className=" flex flex-col  justify-center items-center gap-2 text-sm sm:text-lg px-6 py-4">
            <p className="mx-auto font-semibold w-fit mb-3 text-4xl sm:text-6xl lg:text-7xl">
              3{" "}
            </p>
            <p className="max-w-[300px]">Years of Experince</p>
          </li>
        </ul>
      </div>
      {/* ==========================================about me====================================================== */}
      <SecDivider />

      <div
        id="about"
        className="  my-6 sm:mt-0 flex flex-col items-center justify-center px-3 md:px-6 lg:px-12 mx-2 lg:mx-6 "
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
            <h4 className="tracking-widest">ZIAD ELDEEB</h4>
            <h6 className="font-thin mb-4">3D Desginer</h6>
            <p className="sm:max-w-[70%] w-full tracking-wider leading-6	 text-gray-300 text-sm sm:text-md">
              Hey there! I'm Ziad Eldeeb, also known as Zee. <br></br> Welcome
              to Deeb3DStudio, your hub for immersive visual experiences.
              <br></br>
              <br></br> My journey into the realm of design began during my
              academic years, where I honed my skills in graphic design, laying
              the foundation for my ventures into the world of 3D.
              <br></br>
              Specializing in 3D designs, renders, product visualization, CGI,
              and VFX, I'm passionate about bringing concepts to life in
              stunning detail. Whether it's crafting lifelike product renders,
              creating jaw-dropping CGI scenes, or adding that extra touch of
              magic with VFX,
              <br></br> I thrive on pushing the boundaries of visual
              storytelling. Let's collaborate to turn your ideas into
              captivating 3D realities.
              <br></br>
              <br></br> Let's connect and turn your vision into breathtaking 3D
              imagery!
            </p>
          </div>
        </div>
      </div>
      {/* ==========================================about me====================================================== */}
      <SecDivider />
      <Contact />
      <SecDivider />
      <ul className="flex  justify-center items-center gap-6 my-3">
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
    </>
  );
}
