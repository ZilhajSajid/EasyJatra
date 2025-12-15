import React from "react";
import icon1 from "../../../assets/icon1.png";
import icon2 from "../../../assets/icon2.png";
import icon3 from "../../../assets/icon3.png";
import icon4 from "../../../assets/icon4.png";
const HowItWorks = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="font-extrabold text-3xl text-center text-primary">
        How It Works
      </h2>
      <div className="lg:flex gap-6">
        <div className="card bg-base-100 w-96 shadow-sm">
          <div className="card-body">
            <img className="w-10" src={icon1} alt="bookingIcon" />
            <h2 className="card-title">Search, select, and book</h2>
            <p>
              That’s it. Our platform makes ticket booking simple with real-time
              availability and instant confirmation.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <div className="card-body">
            <img className="w-10" src={icon2} alt="bookingIcon" />
            <h2 className="card-title">Just tell us where you want to go</h2>
            <p>
              Pick your ride, choose your seat, and confirm your ticket — all in
              minutes, from any device.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <div className="card-body">
            <img className="w-10" src={icon3} alt="bookingIcon" />
            <h2 className="card-title">Booking or managing</h2>
            <p>
              Your trips takes just a few simple steps. Choose your route, pick
              your seat, confirm payment — and you’re ready to go. Fast,
              seamless, and stress-free.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <div className="card-body">
            <img className="w-10" src={icon4} alt="bookingIcon" />
            <h2 className="card-title">A simple 3-step process</h2>
            <p>
              Search your destination, choose your transportation, and complete
              your booking. Travel made effortless.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
