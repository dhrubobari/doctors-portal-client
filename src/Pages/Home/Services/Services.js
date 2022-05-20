import React from 'react';
import flouride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import ServiceInfo from './ServiceInfo';
import treatment from '../../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Services = () => {
    const services = [
        {
            id: 1,
            name: "Flouride Treatment",
            description: "Lorem ipsum is simply dummy printing and typesetting indust ipsum has been the",
            img: flouride
        },
        {
            id: 2,
            name: "Cavity Filling",
            description: "Lorem ipsum is simply dummy printing and typesetting indust ipsum has been the",
            img: cavity
        },
        {
            id: 3,
            name: "Teeth Whitening",
            description: "Lorem ipsum is simply dummy printing and typesetting indust ipsum has been the",
            img: whitening
        },
    ]
    return (
        <div className="my-28">
            <div>
            <h3 className="text-2xl text-primary font-bold uppercase">Our Services</h3>
            <h3 className="text-4xl">Services We Provide</h3>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                services.map(service => <ServiceInfo
                key={service.id}
                service={service}
                ></ServiceInfo>)
            }
            </div>
            <div className="hero min-h-screen px-6">
            <div className="hero-content flex-col lg:flex-row">
            <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
            <div className="ml-10">
        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms.</h1>
            <p className="py-6 text-center">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti eaque
            aut repudiandae et a id nisi.<br></br>Provident cupiditate
            voluptatem et in. Quaerat fugiat ut assumenda excepturi 
            exercitationem quasi. In deleniti eaque aut repudiandae et 
            a inid nisar.</p>
        <PrimaryButton>VISIT</PrimaryButton>
    </div>
  </div>
</div>
        </div>
    );
};

export default Services;