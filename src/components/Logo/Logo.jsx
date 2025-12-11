import React from "react";
import { Link } from "react-router";
import logoImg from "../../assets/EasyJatra.png";
const Logo = () => {
  return (
    <Link to="/">
      <div>
        <img className="w-15 h-15" src={logoImg} alt="Logo" />
      </div>
    </Link>
  );
};

export default Logo;
