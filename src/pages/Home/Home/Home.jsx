import React from "react";
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurServices from "../OurServices/OurServices";
import Brands from "../../Brands/Brands";
import Merchant from "../Merchant/Merchant";
import Review from "./Review/Review";

const reviewPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
      <Brands></Brands>
      <Merchant></Merchant>
      <Review reviewPromise={reviewPromise}></Review>
    </div>
  );
};

export default Home;
