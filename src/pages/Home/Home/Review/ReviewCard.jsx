import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { review: testimonial, userName, user_photoURL } = review;
  return (
    <div className="max-w-sm bg-base-100 shadow-md rounded-xl p-6 border border-gray-200 my-24">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-primary text-4xl mb-3" />

      {/* Text */}
      <p className="text-gray-600 leading-relaxed">{testimonial}</p>

      {/* Divider */}
      <div className="my-4 border-t border-dashed border-gray-300"></div>

      {/* Profile */}
      <div className="flex items-center gap-3">
        {/* Circle Image Placeholder */}
        <div className="w-10 h-10 rounded-full bg-primary">
          <img src={user_photoURL} alt="" />
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 text-lg">{userName}</h3>
          <p className="text-sm text-gray-500">Valuable Customer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
