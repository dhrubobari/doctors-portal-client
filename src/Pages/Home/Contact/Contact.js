import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const Contact = () => {
    return (
        <div className="mt-32" style={{
            background: `url(${appointment})`
        }}>
        <div>
            <h4 className="font-bold text-secondary text-xl">Contact Us</h4>
            <h2 className="text-3xl text-white">Stay Connected With Us</h2>
        </div>
        <div className="inline-block">
        <input type="text" placeholder="Email Address" className="input input-bordered w-full max-w-xs my-8" />
        <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs mb-8" />
        <input type="text" placeholder="Your message" className="input input-bordered input-lg w-full max-w-xs" />
        </div>
        <div>
        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary my-8">Submit</button>
        </div>
        </div>
    );
};

export default Contact;