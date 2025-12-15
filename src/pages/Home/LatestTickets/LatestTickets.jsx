import React from "react";
import enaImg from "../../../assets/brands/ena.png";
import hanifImg from "../../../assets/brands/hanif.png";
import bdRailImg from "../../../assets/brands/BdRailway.png";
import greenImg from "../../../assets/brands/greenLine.png";
import novoAirImg from "../../../assets/brands/greenLine.png";
import usBanglaImg from "../../../assets/brands/usBangla.png";

const tickets = [
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
    image: greenImg,
  },
];
const LatestTickets = () => {
  return (
    <div>
      <h2 className="text-5xl text-center font-extrabold">Latest Tickets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:p-5">
        {tickets.map((ticket) => (
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img src={ticket.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{ticket.title}</h2>
              <h2 className="card-title">
                Remaining Tickets:{ticket.quantity}
              </h2>
              <h2 className="card-title">{ticket.type}</h2>
              <p>৳ {ticket.price}</p>
              <div className="card-actions">
                <button className="btn btn-primary">See Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestTickets;
