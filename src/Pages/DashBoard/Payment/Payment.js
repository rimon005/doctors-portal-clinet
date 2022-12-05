import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm '


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const data = useLoaderData();
    const { treatment, slot, price, appointmentDate } = data;
    // console.log(data);
    return (
        <div>
            <h2 className='text-xl font-medium mb-2'>Payment for ${treatment}</h2>
            <p>Please pay <strong>${price}</strong> your appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 my-12 border p-6'>
                <Elements stripe={stripePromise}>
                   <CheckoutForm 
                   data={data}
                   />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;