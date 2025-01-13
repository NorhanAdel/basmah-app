import React from 'react'
import "./Slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
function Slider() {
  return (
    <Swiper
      slidesPerView={4} // Adjusted for better layout
      centeredSlides={false}
      slidesPerGroup={4} // Matches slidesPerView
      grabCursor={true}
      keyboard={{
        enabled: true,
      }}
      loop={true}
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
      className="mySwiper"
    >
      {data.products?.map((item, i) => (
        <SwiperSlide key={i} className="product_items">
          <div className="product_imag">
            <img src={item.images} alt="" />
          </div>
 
           
           
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider