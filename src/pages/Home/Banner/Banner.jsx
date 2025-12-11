import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../../assets/banner/banner1.png";
import banner2 from "../../../assets/banner/banner2.png";
import banner3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div>
        <img className="w-full" src={banner1} />
        <div className=" lg:absolute lg:bottom-10 lg:left-20">
          <p className="lg:w-1/2 text-white text-xl lg:text-2xl font-semibold leading-relaxed drop-shadow-lg bg-black/40 p-4 rounded-xl">
            Travel made simple — book bus, train, launch, and flight tickets in
            one place. Fast, reliable, and hassle-free.
          </p>
        </div>
      </div>
      <div>
        <img className="w-full" src={banner2} />
        <div className=" lg:absolute lg:bottom-10 lg:left-20">
          <p className="lg:w-1/2 text-white text-xl lg:text-2xl font-semibold leading-relaxed drop-shadow-lg bg-black/40 p-4 rounded-xl">
            Your journey starts here. Find the best routes, compare prices, and
            book tickets effortlessly with EasyJatra.
          </p>
        </div>
      </div>
      <div>
        <img className="w-full" src={banner3} />
        <div className=" lg:absolute lg:bottom-10 lg:left-20">
          <p className="lg:w-1/2 text-white text-xl lg:text-2xl font-semibold leading-relaxed drop-shadow-lg bg-black/40 p-4 rounded-xl">
            Experience smooth and stress-free ticket booking. Anytime, anywhere
            — EasyJatra makes travel easier.
          </p>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
