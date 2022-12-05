import React from 'react';
import img from '../../../assets/images/chair.png'
import clock from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'
import marker from '../../../assets/icons/marker.svg'
import bg from '../../../assets/images/bg.png'

const Banner = () => {
    return (
        <section className='p-11' 
        style={{
                background : `url(${bg})`,
                backgroundSize : 'cover'
            }}
        >
            <div className="hero ">
                <div className="card-body"></div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className=" lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div className=''>
                        <h1 className="text-2xl lg:text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                            Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white rounded-none">Get Started</button>
                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-6  mt-8 text-white'>
                <div className="p-6 shadow-xl bg-gradient-to-r from-primary to-secondary flex justify-center items-center">
                    <div className="flex justify-between items-center">
                        <div className='mr-5'>
                            <img src={clock} alt="Album" />
                        </div>
                        <div>
                            <h2 className='font-bold mb-2'>Opening Hours</h2>
                            <p>Open 9.00 am to 5.00pm everyday</p>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl bg-gray-700 flex justify-center items-center">
                    <div className="flex justify-between items-center">
                        <div className='mr-5'>
                            <img src={marker} alt="Album" />
                        </div>
                        <div>
                            <h2  className='font-bold mb-2'>Visit our location!</h2>
                            <p>Brooklyn, NY 10036, United States.</p>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl bg-gradient-to-r from-primary to-secondary flex justify-center items-center">
                    <div className="flex justify-between items-center">
                        <div className='mr-5'>
                            <img src={phone} alt="Album" />
                        </div>
                        <div>
                            <h2  className='font-bold mb-2'>Contact us now</h2>
                            <p>+000 123 456789</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;