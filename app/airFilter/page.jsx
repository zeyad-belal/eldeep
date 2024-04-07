"use client";
import Nav from "@/components/nav";
import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    "/productDesign/pictures/air filter/2-min.png",
    "/productDesign/pictures/air filter/3-min.png",
  ];

  return (
    <>
      <Nav />
      <div className="mt-6 px-3 md:px-6 lg:px-12  py-3 h-fit">
        <h1 className="mx-3 heading-gradient text-3xl font-semibold mb-12">
          airFilter
        </h1>
        <div className="flex md:flex-nowrap flex-wrap  justify-between w-full">
          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => setSelectedImg(src)}
              className="cursor-pointer  rounded-sm md:w-[50%] w-[100%] mt-4 flex justify-center"
            >
              <Image src={src} width={600} height={600} />
            </div>
          ))}
        </div>
        {selectedImg && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={() => setSelectedImg(null)}
          >
            <Image src={selectedImg} width={900} height={900} />
          </div>
        )}
      </div>
    </>
  );
}
