import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Text } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import '../styles/explore.css';
// import './styles.css';
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
const Invoice = () => {
  return (
    <>
      <Box padding="20px" fontSize="25px">
        {" "}
      </Box>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334305_small.svg?v=1682336123" alt="" /><Text><span>1 Year</span> Warranty</Text></SwiperSlide>
        <SwiperSlide><img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334304_small.svg?v=1682336123" alt="" /><Text><span>7-day</span>Replacement</Text></SwiperSlide>
        <SwiperSlide><img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334303_small.svg?v=1682336123" alt="" /><Text><span>Free</span> Shopping</Text></SwiperSlide>
        <SwiperSlide><img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334302_small.svg?v=1682336123" alt="" /><Text><span>GST</span> Billing</Text></SwiperSlide>
      </Swiper>
    </>
  );
};
export default Invoice;