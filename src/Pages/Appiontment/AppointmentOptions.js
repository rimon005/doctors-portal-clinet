import React from 'react';

const AppointmentOptions = ({ option , setTreatment}) => {
    const {name , slots , price} = option
    return (
        <div className="card rounded-none shadow-xl">
            <div className="card-body text-center">
                <h2 className=" text-xl text-primary text-center font-bold">{name}</h2>
                <p className='text-accent font-semibold my-1'>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p className='text-accent mb-1 font-semibold'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <p><small className='font-semibold'>Price ${price}</small></p>
                <div className="card-actions justify-center">
                    <label 
                    onClick={() => setTreatment(option)}
                    htmlFor="booking-modal" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white rounded-none">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;