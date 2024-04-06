import Nav from "@/components/nav";
import RotatingText from "@/components/rotatingText";
import MySwiper from "@/components/swiper";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main id="heroSec">
        <Nav />
        <div
          id="home"
          className="hero flex justify-between items-center h-[80vh] px-12 mx-6"
        >
          <div className="flex flex-col gap-2 w-[50%]">
            <RotatingText />
            <p className="text-6xl">with 3D Design.</p>
            <p className="flex items-center gap-4 mt-12 text-lg cursor-pointer hover:bg-white hover:bg-opacity-20 w-fit px-1 rounded py-2">
              {" "}
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
      {/* ========================================================================================================= */}
      <div id="portfolio" className=" h-[80vh] px-12 mx-6">
        <h2 className="text-xl"> PORTFOLIO:</h2>
        <MySwiper />
      </div>
      {/* ========================================================================================================= */}
      <div id="services" className=" h-[80vh] px-12 mx-6">
        <h2 className="text-xl"> SERVICES:</h2>
        <h4 className="w-fit mx-auto text-xl tracking-widest">What I DO ?</h4>
        <ul className="w-full flex justify-around items-center py-12 px-6">
          <li className="text-lg flex- justify-center gap-4 border border-white border-opacity-10 shadow-lg shadow-[#ffffff53] px-16 py-6  rounded hover:scale-[1.04] cursor-pointer">
            <p className="mx-auto w-fit mb-3">UI/UX</p>
            <Image
              src={"/services/crown-minimalistic-svgrepo-com.svg"}
              width={100}
              height={100}
            />
          </li>
          <li className="text-lg flex- justify-center gap-4 border border-white border-opacity-10 shadow-lg shadow-[#ffffff53] px-16 py-6  rounded hover:scale-[1.04] cursor-pointer">
            <p className="mx-auto w-fit mb-3">Web Design</p>
            <Image
              src={"/services/screen-desktop-svgrepo-com.svg"}
              width={100}
              height={100}
            />
          </li>
          <li className="text-lg flex- justify-center gap-4 border border-white border-opacity-10 shadow-lg shadow-[#ffffff53] px-16 py-6  rounded hover:scale-[1.04] cursor-pointer">
            <p className="mx-auto w-fit mb-3">App Design</p>
            <Image
              src={"/services/mobile-svgrepo-com.svg"}
              width={100}
              height={100}
            />
          </li>
          <li className="text-lg flex- justify-center gap-4 border border-white border-opacity-10 shadow-lg shadow-[#ffffff53] px-16 py-6  rounded hover:scale-[1.04] cursor-pointer">
            <p className="mx-auto w-fit mb-3">SEO </p>
            <Image
              src={"/services/stats-1368-svgrepo-com.svg"}
              width={100}
              height={100}
            />
          </li>
        </ul>
      </div>
    </>
  );
}
