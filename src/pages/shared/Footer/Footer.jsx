import React from "react";
import Logo from "../../../components/Logo/Logo";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
          <Logo></Logo>
          <p>
            EasyJatra Pvt. Ltd.
            <br />
            Book your bus, train, launch & flight tickets easily
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">All tickets</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">About</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact Info</h6>
          <a className="link link-hover">Email</a>
          <a className="link link-hover">Phone</a>
          <a className="link link-hover">Social</a>
        </nav>
        <nav>
          <h6 className="footer-title">Payment Methods</h6>
          <a className="link link-hover">Stripe</a>
        </nav>
      </footer>
      <div className="bg-base-200 text-center p-2">
        <h2 className="text-xl">© 2025 EasyJatra. All rights reserved.</h2>
      </div>
    </div>
  );
};

export default Footer;
