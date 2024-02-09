import React, { useEffect, useRef, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import testomonialData from "./testomonialData.json";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerPage = 5;
  const textRef = useRef();
  const slides = testomonialData;
  const handleBulletClick = (index) => {
    const nextSlide =
      (currentSlide + (index - currentSlide + slides.length)) % slides.length;
    setCurrentSlide(nextSlide);
  };

  const renderBullets = () => {
    const start = currentSlide % slides.length;
    const bulletRange = Array.from({ length: slidesPerPage }, (_, i) => {
      const bulletIndex = (start + i) % slides.length;
      return bulletIndex >= 0 ? bulletIndex : bulletIndex + slides.length;
    });

    return bulletRange.map((bulletIndex, index) => (
      <div
        onClick={() => handleBulletClick(bulletIndex)}
        key={index}
        className="mx-10 font-normal duration-300 cursor-pointer whitespace-nowrap hover:text-gray-600"
      >
        <span
          className={`bullet ${currentSlide === bulletIndex ? "active" : ""}`}
        ></span>

        <span ref={textRef}>
          m// 00{bulletIndex + 1} <br />
          {slides[bulletIndex].heading}
        </span>
      </div>
    ));
  };

  return (
    <ScrollAnimation animateIn="fadeIn">
      <div className="slider-container">
        <div className="text-2xl bullets">{renderBullets()}</div>
        <div
          className="mt-20 slides"
          style={{
            transform: `translateX(-${(currentSlide % slides.length) * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <h3 className="font-extrabold text-[76px] px-[75px] mt-20">
                {slide.content}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default Slider;
