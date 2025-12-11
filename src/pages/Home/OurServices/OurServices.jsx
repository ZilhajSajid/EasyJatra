import React from "react";
import ourServices from "../../../assets/ourServices.png";

const cards = [
  {
    id: 1,
    image: { ourServices },
    title: "Bus Ticket Booking",
    description:
      "Enjoy quick and easy bus ticket booking with real-time seat availability, route options, and instant confirmation. Travel comfortably with trusted operators across Bangladesh.",
  },
  {
    id: 2,
    image: { ourServices },
    title: "Train Ticket Booking",
    description:
      "Book train tickets effortlessly through our platform. View schedules, check availability, and confirm your seat within minutes for a smooth and stress-free journey.",
  },
  {
    id: 3,
    image: { ourServices },
    title: "Launch/Ferry Ticket Booking",
    description:
      "Reserve launch or ferry tickets quickly with verified routes and operators. Enjoy safe waterway travel with convenient schedules, reliable service, and seamless booking experience.",
  },
  {
    id: 4,
    image: { ourServices },
    title: "Parcel Delivery Service",
    description:
      "Send parcels anywhere with fast, secure, and reliable delivery. Track your shipment in real time and enjoy flexible pickup and drop-off options for personal or business needs.",
  },
  {
    id: 5,
    image: { ourServices },
    title: "Flight Ticket Booking",
    description:
      "Find and book affordable domestic and international flights instantly. Compare prices, choose flexible timings, and receive e-tickets directly on your device after secure payment.",
  },
  {
    id: 6,
    image: { ourServices },
    title: "Customer Support Assistance",
    description:
      "Our dedicated support team is available to help with bookings, cancellations, payments, and travel inquiries. Get quick assistance anytime for a smooth and hassle-free experience.",
  },
];
const OurServices = () => {
  return (
    <div className="bg-primary p-10 mx-auto rounded-4xl">
      <div className="text-center my-5">
        <h1 className="font-extrabold text-4xl  text-white">Our Services</h1>
        <p className="font-medium text-white">
          Discover all the convenient travel and booking services we provide to
          make your journeys easier, faster, safer, and more enjoyable every
          single day.
        </p>
      </div>
      <div className="grid grid-cols-3 mx-auto gap-5">
        {cards.map((card) => (
          <div key={card.id} className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src={ourServices}
                alt="Shoes"
                className="rounded-xl w-xs h-xs"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-primary">{card.title}</h2>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
