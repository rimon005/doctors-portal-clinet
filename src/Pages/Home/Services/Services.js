import React from 'react';
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Open 9.00 am to 5.00pm everydayLorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Open 9.00 am to 5.00pm everydayLorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Open 9.00 am to 5.00pm everydayLorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whitening,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]
    return (
        <div className='my-8 px-5'>
            <div className='text-center mb-5'>
                <h3 className='text-primary mb-2 font-bold text-xl'>Our Services</h3>
                <p className='text-2xl text-accent'>Services We Provide</p>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-8 mt-8 '>
                {
                    servicesData.map(service => <Service 
                    key={service.id}
                    service={service}
                    ></Service>)
                }

            </div>
        </div>
    );
};

export default Services;