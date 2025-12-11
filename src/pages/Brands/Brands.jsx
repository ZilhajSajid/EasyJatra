import React from "react";
import "swiper/css";
import hanifImg from "../../assets/brands/hanif.png";
import enaImg from "../../assets/brands/ena.png";
import greenlineImg from "../../assets/brands/greenLine.png";
import usBanglaImg from "../../assets/brands/usBangla.png";
import novoAirImg from "../../assets/brands/novoAir.png";
import bdRailImg from "../../assets/brands/BdRailway.png";
import karnaphulyImg from "../../assets/brands/karnaphuli.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const brandLogos = [
  hanifImg,
  enaImg,
  greenlineImg,
  usBanglaImg,
  novoAirImg,
  bdRailImg,
  karnaphulyImg,
];

const Brands = () => {
  return (
    <div className="my-5 max-w-6xl mx-auto">
      <h1 className="text-2xl font-extrabold text-center text-secondary">
        Our Proud Partners
      </h1>
      <Swiper
        className="mt-5"
        loop={true}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        {brandLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <hr className="border-dashed my-5" />
    </div>
  );
};

export default Brands;
