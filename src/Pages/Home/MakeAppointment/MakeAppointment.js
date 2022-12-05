import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section className='my-32' 
        style={{
            background: `url(${appointment})`
        }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row p-0">
                    <img src={doctor} alt='' className=" -mt-36 hidden lg:block md:block lg:w-1/2 rounded-lg " />
                    <div className='lg:p-3 p-6'>
                        <p className='text-primary font-semibold text-xl mb-2'> Appointment</p>
                        <h1 className=" text-2xl text-white lg:text-4xl font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white rounded-none">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;