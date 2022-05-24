import React from 'react';

const Booking = ({ booking, setTreatment }) => {
    const {name, slots, price} = booking;

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-lg font-bold text-secondary">{name}</h2>
          <p>{
                slots.length > 0
                ? <span>{slots[0]}</span>
                :<span className='text-red-500'>Try another day</span>
            }</p>
          <p className="">{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
          <p><small>Price: ${price}</small></p>
          <div className="card-actions justify-center">
            <label
            htmlFor="booking-modal" // booking-modal id from BookingModal.js to open
            disabled={slots.length === 0} 
            onClick={() => setTreatment(booking)}
            className="btn btn-sm btn-secondary text-white uppercase">Book Appointment</label>
          </div>
        </div>
      </div>
    );
};

export default Booking;