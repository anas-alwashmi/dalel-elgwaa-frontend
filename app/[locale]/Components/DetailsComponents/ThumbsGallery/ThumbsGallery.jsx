"use client";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function ThumbsGallery({ gallery }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="custom-swiper-wrapper flex-1">
      {/* Main Swiper */}
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="custom-swiper-main"
      >
        {gallery.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative aspect-video">
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                fill
                className="object-cover"
                unoptimized={true}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <div className="custom-swiper-thumbnail mt-4">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {gallery.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative aspect-video">
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover cursor-pointer rounded"
                  unoptimized={true}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
