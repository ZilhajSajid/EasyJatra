import React from "react";

const Merchant = () => {
  return (
    <div className="bg-secondary rounded-3xl py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <h1 className="font-extrabold text-white text-3xl sm:text-4xl md:text-5xl mb-5">
            Comfort, Reliability, and Transparency—Our Top Priorities
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
            From buses and trains to flights and ferries, EasyJatra brings all
            your travel options to one place. We offer fair pricing, instant
            e-tickets, and verified operators—ensuring every trip is smooth,
            secure, and perfectly timed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Merchant;
