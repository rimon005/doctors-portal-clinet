import { format } from 'date-fns/esm';
import { React, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

const BookingModal = ({ treatment, selectedDate, setTreatment , refetch}) => {
    const {user} = useContext(AuthContext)
    const date = format(selectedDate, 'PP') 
    // console.log(treatment);
    const { name, slots , price} = treatment;
    const navigate = useNavigate()
    

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.patientName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatment: name,
            patientName,
            slot,
            email,
            phone,
            price
        }
        if(user?.uid){
            fetch('https://final-project-server-ruddy.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    setTreatment(null)
                    refetch()
                    toast.success('Booking confirmed ')
                }
                else{
                    toast.error(data.message)
                }
            })
        }
        else{
            navigate('/login')
        }

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 mt-10'>

                        <input type="text" value={date} disabled className="input input-bordered input-success w-full rounded-none" />
                        <select name='slot' className="select select-bordered w-full rounded-none">
                            {
                                slots.map((slot, i) => <option value={slot} key={i}>{slot}</option>)
                            }
                        </select>
                        <input name='patientName' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered input-success w-full rounded-none" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered input-success w-full rounded-none" />
                        <input name='phone' type="text" placeholder="Phone" className="input input-bordered input-success w-full rounded-none" />
                        <br />
                        <input type="submit" value="Submit" className='btn btn-accent ' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;