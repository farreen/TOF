import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {isMobile} from 'react-device-detect';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import './styles.css';

// import required modules
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import slide1 from "../../assets/images/carousel/carousel-img-1.png";
import slide2 from "../../assets/images/carousel/carousel-img-2.png";
import slide3 from "../../assets/images/carousel/carousel-img-3.png";


const CarouselFeatured = () => {
  if (isMobile) {
    return (
      <div className="m-0 md:m-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          effect={"fade"}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          className="mySwiper"
          pagination={false}
          navigation={false}
        >
          <SwiperSlide>
            <img src={slide1} className="w-full rounded-xl md:h-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} className="w-full rounded-xl md:h-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} className="w-full rounded-xl md:h-full" />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
  return (
    <div className="m-0 md:m-8">
      <div className="font-mono font-bold text-3xl ml-10 relative top-20 float-left"><p className="text-left">Money Matters Unveiled: <br /> Finance in Every Tale</p> </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="mySwiper"
        pagination={false}
        navigation={false}
      >
        <SwiperSlide>
          <img src={slide1} className="float-right mr-10 h-80" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} className="float-right mr-10 h-80" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} className="float-right mr-10 h-80" />
        </SwiperSlide>
      </Swiper>
    </div>
  );

};

export default CarouselFeatured;
