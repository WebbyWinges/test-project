"use client";
import React, { useState, useEffect, ReactNode } from "react";

interface CustomPaginationProps {
  swiper: any;
  totalSlides: number;
}

export const CustomPagination: React.FC<CustomPaginationProps> = ({
  swiper,
  totalSlides,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionProgress, setTransitionProgress] = useState(0);

  useEffect(() => {
    if (!swiper) return;

    const handleSlideChange = () => {
      setActiveIndex(swiper.activeIndex);
    };

    const handleProgress = () => {
      const slideProgress = Math.abs(
        swiper.slides[swiper.activeIndex]?.progress || 0
      );
      setTransitionProgress(slideProgress);
    };

    swiper.on("slideChange", handleSlideChange);
    swiper.on("progress", handleProgress);

    return () => {
      swiper.off("slideChange", handleSlideChange);
      swiper.off("progress", handleProgress);
    };
  }, [swiper]);

  // **Функция для отрисовки пули (точки)**
  const renderBullet = (index: number) => {
    const isActive = index === activeIndex;
    const isLastSlide = index === totalSlides - 1;

    let bulletClasses = "block rounded-full transition-all duration-300 ";

    if (isLastSlide && isActive) {
      bulletClasses += "w-[8px] h-[8px] bg-[#1C1C1C]";
    } else if (isActive) {
      bulletClasses += "w-[20px] h-[8px] bg-[#1C1C1C]";
    } else {
      bulletClasses += "w-[8px] h-[8px] bg-[#CCCCCC]";
    }

    return <span className={bulletClasses} />;
  };

  // **Функция для вычисления отступов пули**
  const getBulletMarginClass = (index: number) => {
    const isActive = index === activeIndex;
    const isLastSlide = index === totalSlides - 1;

    if (isLastSlide && isActive) return "mx-1";
    if (isActive) return "mr-[1.6rem]";
    return "mx-1";
  };

  // **Функция для отрисовки моста между пулями**
  const renderBridge = (index: number) => {
    if (index === activeIndex && index < totalSlides - 1) {
      return (
        <span
          className="absolute left-0 rounded-[10px] z-[-1] h-2"
          style={{
            width: "40px",
            background: `linear-gradient(to right, #1C1C1C ${
              transitionProgress * 40
            }px, #CCCCCC ${transitionProgress * 40}px)`,
          }}
        />
      );
    }
    return null;
  };

  return (
    <div className="absolute top-2 left-0 right-0 flex justify-start items-center">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <div
          key={index}
          className={`relative flex items-center ${getBulletMarginClass(
            index
          )}`}
        >
          {renderBullet(index)}
          {renderBridge(index)}
        </div>
      ))}
    </div>
  );
};
