import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import Booking from './Booking';
import BookingModal from './BookingModal';

const AvailableAppointment = ({date}) => {
    const [bookings, setBookings] = useState([]);
    const [treatment, setTreatment] = useState(null);
    
    const formattedDate = format(date, 'PP');
    useEffect(() => {
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())
        .then(data => setBookings(data))
    })

    return (
        <div>
            <h4 className='text-xl text-secondary my-12'>Available Appointments on: {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    bookings.map(booking => <Booking
                    key={booking._id}
                    booking={booking}
                    setTreatment={setTreatment}
                    ></Booking>)
                }
            </div>
            {treatment && <BookingModal 
            date={date} 
            treatment={treatment}
            setTreatment={setTreatment}
            ></BookingModal>} 
        </div>
        // $$ = true, if service then it will show booking modal.
    );
};

export default AvailableAppointment;