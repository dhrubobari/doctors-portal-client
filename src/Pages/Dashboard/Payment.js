import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe('pk_test_51L3085EnS2dBn0qkkIyLl9UfeLUBD5eoeZBundcswPmgIHyTUGHk9WoDY5c8ep8ZCieJqWQxa44OzOCZ6GoCV3Zn00i4xUoSmL');

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;

  const { data: appointment, isLoading } = useQuery("booking", () =>
    fetch(url).then((res) => res.json())
  ); // 'booking' = id

  if (isLoading) {
    return <button className="btn loading">loading</button>;
  }

  return (
    <div class="inline-block min-h-screen justify-center items-center">
          <div class="card bg-base-100 shadow-xl my-12">
            <div class="card-body">
              <p className="text-success font-bold">Hello {appointment.patientName} !</p>  
              <h2 class="text-xl font-bold">Please Pay for: {appointment.treatment}</h2>
              <p>Your appointment: <span className="text-orange-700">{appointment.date}</span> at {appointment.slot}</p>
              <p>Please pay: ${appointment.price}</p>
            </div>
          </div>
      <div class="card m-5 shadow-xl bg-base-100">
           <div class="card-body">
            <Elements stripe={stripePromise}>
                <CheckoutForm appointment={appointment} />
            </Elements>
           </div>
      </div>
    </div>
    
  );
};

export default Payment;
