import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Review = ({ reviewPromise }) => {
  const reviews = use(reviewPromise);

  return (
    <div className="py-10 px-4 md:px-10">
      <div className="flex flex-col items-center gap-5 my-5 max-w-5xl mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary">
          What our customers are saying
        </h3>
        <p className="text-sm sm:text-base md:text-lg">
          Plan your journeys effortlessly with EasyJatra. Book tickets for
          buses, trains, and flights quickly, enjoy smooth travel, and make
          every trip convenient and stress-free!
        </p>
      </div>

      <Swiper
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
          scale: 0.75,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
