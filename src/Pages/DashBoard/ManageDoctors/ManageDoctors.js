import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import Loading from '../../Shared/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)
    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('https://final-project-server-ruddy.vercel.app/doctors', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })

    const closeModal = () => {
        setDeletingDoctor(null)
    }

    if (isLoading) {
        return <Loading />
    }

    const deleteDoctor = id => {
        fetch(`https://final-project-server-ruddy.vercel.app/doctors/${id}`, {
            method: "DELETE", 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
            })
    }
    return (
        <div>
            <h2 className='text-4xl text-secondary text-center mb-7'>ManageDoctors</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor, i) => <tr key={doctor?._id}>
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-circle w-12 h-12">
                                                <img src={doctor.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div className="font-bold">{doctor?.name}</div>
                                    </div>
                                </td>
                                <th>
                                    <h1 className='text-xl font-medium'> {doctor.specialty}</h1>
                                </th>
                                <th>
                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmationModal" className="btn text-white btn-error rounded-none">Delete</label>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingDoctor.name}. It cannot be undone.`}
                    closeModal={closeModal}
                    successAction={deleteDoctor}
                    modalData={deletingDoctor}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;