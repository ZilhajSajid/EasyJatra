import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import hanifImg from "../../assets/brands/hanif.png";
import enaImg from "../../assets/brands/ena.png";
import greenlineImg from "../../assets/brands/greenLine.png";
import usBanglaImg from "../../assets/brands/usBangla.png";
import novoAirImg from "../../assets/brands/novoAir.png";
import bdRailImg from "../../assets/brands/BdRailway.png";

const brandLogos = [
  {
    id: 1,
    title: "Dhaka → Sylhet Express",
    price: 1000,
    quantity: 25,
    type: "🚌 Bus",
    perks: ["AC Coach", "Wi‑Fi", "Snacks"],
    image: enaImg,
  },
  {
    id: 2,
    title: "Dhaka → Moulvibazar Express",
    price: 650,
    quantity: 8,
    type: "🚌 Bus",
    perks: ["AC Coach", "Wi‑Fi", "Snacks"],
    image: hanifImg,
  },
  {
    id: 3,
    title: "Dhaka → Sylhet Intercity",
    price: 950,
    quantity: 40,
    type: "🚅 Train",
    perks: ["Comfort Seat", "Charging Port", "Prayer Room"],
    image: bdRailImg,
  },
  {
    id: 4,
    title: "Dhaka → Sylhet Air",
    price: 6500,
    quantity: 8,
    type: "🛫 Air",
    perks: ["Free Baggage", "In‑flight Meal", "Window Seat"],
    image: novoAirImg,
  },
  {
    id: 5,
    title: "Dhaka → Chittagong Air",
    price: 7500,
    quantity: 8,
    type: "🛫 Air",
    perks: ["Free Baggage", "In‑flight Meal", "Window Seat"],
    image: usBanglaImg,
  },
  {
    id: 6,
    title: "Dhaka → Coxs Bazar Express",
    price: 1500,
    quantity: 8,
    type: "🚌 Bus",
    perks: ["AC Coach", "Wi‑Fi", "Snacks"],
    image: greenlineImg,
  },
];

const Brands = () => {
  return (
    <div className="my-5 max-w-7xl mx-auto px-4 md:px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-secondary">
        See Tickets
      </h1>

      <Swiper
        className="mt-6"
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        centeredSlides={false}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3 },
        }}
      >
        {brandLogos.map((logo) => (
          <SwiperSlide key={logo.id}>
            <div className="bg-white rounded-xl shadow-md flex flex-col h-[500px]">
              <img
                src={logo.image}
                alt={logo.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <div className="space-y-1">
                  <h2 className="font-bold text-lg md:text-xl">{logo.title}</h2>
                  <p className="text-primary font-semibold">৳ {logo.price}</p>
                  <p className="text-gray-600">{logo.quantity} Remaining</p>
                  <p className="text-gray-600">{logo.type}</p>
                  <p className="text-gray-600">
                    ✴️Perks: {logo.perks.join(", ")}
                  </p>
                </div>
                <button className="mt-3 btn btn-primary w-full">
                  See Details
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <hr className="border-dashed my-6" />
    </div>
  );
};

export default Brands;
