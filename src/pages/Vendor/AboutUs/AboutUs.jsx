import React from "react";

const AboutUs = () => {
  return (
    <div>
      <h2 className="text-5xl font-extrabold text-center">About Us</h2>
      <div className=" bg-secondary h-full p-20 text-xl gap-5 rounded-2xl text-center">
        <p>
          <strong>Easy Jatra</strong> is a modern online ticket booking platform
          designed to make travel simple, fast, and stress-free. We bring bus,
          train, and air ticket booking into one easy-to-use platform, so
          travelers can plan their journeys with confidence and convenience.
        </p>
        <p>
          <strong>Our goal</strong> is to eliminate long queues, confusing
          schedules, and unreliable booking systems. With Easy Jatra, users can
          search routes, compare options, choose seats, and book tickets
          anytime, anywhere — all in just a few clicks.
        </p>
        <p>
          <strong>We focus</strong> on user-friendly design, secure payments,
          and real-time availability, ensuring a smooth experience from booking
          to boarding. Whether you’re traveling for work, education, or leisure,
          Easy Jatra helps you reach your destination effortlessly.
        </p>
        <p className="mt-2">
          <strong>Easy Jatra</strong> — making every journey easier.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
