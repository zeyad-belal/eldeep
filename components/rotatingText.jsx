"use client";
import React, { useState, useEffect } from "react";

const RotatingText = () => {
  const [phrases, setPhrases] = useState([
    "Increase sales",
    "Stand out",
    "Attract clients",
  ]);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  // Added state to track whether we're animating in or out.
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // First, animate the current phrase out.
      setIsAnimatingOut(true);
      // After the swipe-out animation duration, update the phrase and animate in.
      setTimeout(() => {
        setIsAnimatingOut(false);
        setCurrentPhraseIndex((prevIndex) =>
          prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
        );
      }, 500); // Assuming swipe-out animation duration is 0.5s.
    }, 2000);

    return () => clearInterval(interval);
  }, [phrases]);

  return (
    <h1 className="text-2xl md:text-4xl lg:text-6xl h-10 lg:h-16 w-full font-bold relative overflow-hidden">
      {phrases.map((phrase, index) => (
        <span
          key={index}
          className={`absolute top-0 w-full !break-keep ${
            index === currentPhraseIndex && !isAnimatingOut
              ? "animate-swipe-in"
              : "animate-swipe-out"
          }`}
        >
          {phrase}
        </span>
      ))}
    </h1>
  );
};

export default RotatingText;
