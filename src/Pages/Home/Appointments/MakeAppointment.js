import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <section
      className="flex justify-center items-center px-4"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-150px]" src={doctor} alt="" />
      </div>
      <div className="flex-1">
        <p className="text-xl text-left font-bold uppercase text-primary">
          Appointment
        </p>
        <h2 className="text-3xl text-left text-white py-5">
          Book An Appointment Application
        </h2>
        <p className="text-left text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          temporibus sunt animi a dicta expedita, velit illo est quo sequi odit
          nihil facere! Enim nisi ipsum perferendis consequuntur tempore, eos
          inventore rem sit repellendus natus iusto. Quisquam, laboriosam.
          Corporis vel nulla accusantium eum aliquam atque adipisicing vel.
        </p>
        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary flex justify-start mt-5">Visit Today</button>
      </div>
    </section>
  );
};

export default MakeAppointment;
