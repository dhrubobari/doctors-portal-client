import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import visitor1 from '../../../assets/images/people1.png';
import visitor2 from '../../../assets/images/people2.png';
import visitor3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: "William Harry",
            comment: "The services that I receive from (DN) is excellent. Wonderful experience with (Doctors Portal).",
            img: visitor1
        },
        {
            _id: 2,
            name: "Fiona Yun",
            comment: "The services that I receive from (DN) is excellent. Wonderful experience with (Doctors Portal).",
            img: visitor2
        },
        {
            _id: 3,
            name: "Maria Santos",
            comment: "The services that I receive from (DN) is excellent. Wonderful experience with (Doctors Portal).",
            img: visitor3
        },
    ]

    return (
        <section>
            <div className='my-28'>
                <div className="flex justify-between">
                <div>    
                    <h4 className='text-xl font-bold text-primary text-left'>Testimonials</h4>
                    <h4 className='text-3xl text-left'>What Our Patients Say</h4>
                </div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
                <div></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;