"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { CustomPagination } from "./swiper-custom-pagination";
import "swiper/css";

interface CardSwiperProps {
  children: React.ReactNode;
}

export const CardSwiper: React.FC<CardSwiperProps> = ({ children }) => {
  // Преобразуем children в массив
  const items = React.Children.toArray(children);
  // Сохраним экземпляр swiper для передачи в кастомную пагинацию
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <div className="relative pb-4 pt-6">
      <Swiper
        modules={[Pagination]}
        onSwiper={setSwiperInstance}
        spaceBetween={16}
        slidesPerView="auto"
        className="!py-4"
        onProgress={(swiper) => {}}
      >
        {items.map((child, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Если экземпляр swiper уже получен, рендерим свою пагинацию */}
      {swiperInstance && (
        <CustomPagination swiper={swiperInstance} totalSlides={items.length} />
      )}
    </div>
  );
};
