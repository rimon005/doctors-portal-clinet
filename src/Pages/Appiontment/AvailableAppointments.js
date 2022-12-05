import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../Shared/Loading/Loading';
import AppointmentOptions from './AppointmentOptions';
import BookingModal from './BookingModal';

const AvailableAppointments = ({selectedDate}) => {
    const [treatment , setTreatment ] = useState(null)

    const date = format(selectedDate , 'PP')

    const {data:appointmentOptions = [] , refetch , isLoading} = useQuery({
        queryKey : ['appointmentOptions' , date],
        queryFn : () => fetch(`https://final-project-server-ruddy.vercel.app/appointmentOptions?date=${date}`)
        .then(res => res.json())
    })
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <section className='my-20'>
            <p className='text-center text-secondary my-10 font-bold'>Available Appointments on {format (selectedDate , 'PP')}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
                {
                    appointmentOptions.map( option => <AppointmentOptions
                    key={option._id}
                    option={option}
                    setTreatment={setTreatment}
                    ></AppointmentOptions>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                selectedDate={selectedDate}
                setTreatment={setTreatment}
            treatment={treatment}
            refetch={refetch}
            />}
        </section>
    );
};

export default AvailableAppointments;