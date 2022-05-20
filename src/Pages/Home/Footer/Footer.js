import React from "react";
import footer from "../../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      style={{
        background: `url(${footer})`,
        backgroundSize: "cover",
      }}
      className="p-10"
    >
    <div className="footer">
      <div>
        <span className="footer-title">Services</span>
        <p>Branding</p>
        <p>Design</p>
        <p>Marketing</p>
        <p>Advertisement</p>
      </div>
      <div>
        <span className="footer-title">Oral Health</span>
        <p>About us</p>
        <p>Contact</p>
        <p>Jobs</p>
        <p>Press kit</p>
      </div>
      <div>
        <span className="footer-title">Location</span>
        <p>New York 101010, Hudson</p>
      </div>
    </div>
      <div className="mt-10">
        <p>Copyright © 2022 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
