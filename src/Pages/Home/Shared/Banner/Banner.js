import React from "react";
import chair from "../../../../assets/images/chair.png";
import bg from "../../../../assets/images/bg.png";
import PrimaryButton from "../PrimaryButton";

const Banner = () => {
  return (
    <div className="hero min-h-screen"
    style={{
      background: `url(${bg})`
    }}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-lg rounded-lg shadow-2xl" alt="Dentist chair"/>
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Make A Booking</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
