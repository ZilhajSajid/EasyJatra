import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

const Review = ({ reviewPromise }) => {
  const reviews = use(reviewPromise);
  return (
    <div>
      <div>
        <div className="flex flex-col items-center gap-5 my-5">
          <h3 className="text-3xl text-center font-extrabold text-secondary">
            What our customers are sayings
          </h3>
          <p>
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
          slidesPerView={3}
          coverflowEffect={{
            rotate: 30,
            stretch: "50%",
            depth: 200,
            modifier: 1,
            slideShadows: true,
            scale: 0.75,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review}></ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
