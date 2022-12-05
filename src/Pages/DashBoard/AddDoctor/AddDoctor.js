import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading/Loading';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const { data: specialty = [], isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://final-project-server-ruddy.vercel.app/appointmentSpecialty')
            const data = res.json();
            return data;
        }
    })
    const handleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData()
        formData.append('image' , image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url , {
            method:'POST' , 
            body : formData
        })
        .then(res => res.json())
        .then(imgData => {
            console.log(imgData);
            if(imgData.success){
                const doctor = {
                    name : data.name,
                    email: data.email,
                    specialty: data.specialty,
                    img : imgData.data.url
                }
                fetch('https://final-project-server-ruddy.vercel.app/doctors' , {
                    method:'POST' , 
                    headers: {
                        'content-type' : 'application/json',
                        authorization : `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(doctorData => {
                    if(doctorData.acknowledged){
                        toast.success(`${data.name} doctor added successfully`)
                        navigate('/dashboard/manegeDoctors')
                    }
                })
            }
        })
    }

    if (isLoading) {
        return <Loading />
    }
    return (
        <div >
            <h2 className="text-4xl text-secondary text-center">Add A Doctor </h2>
            <div className="card rounded-none flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl mt-10">
                <form onSubmit={handleSubmit(handleAddDoctor)} className="card-body">
                    <div className="form-control">
                        <input {...register("name", { required: true })} type="text" name='name' placeholder="name" className="input input-bordered rounded-none my-3" />
                    </div>
                    <div className="form-control">
                        <input {...register("email", { required: true })} type="email" name='email' placeholder="email" className="input input-bordered rounded-none my-3" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="" className=' text-xl mb-2'> Specialty</label>
                        <select
                            {...register('specialty' , {required: true}) }
                            className="select rounded-none select-bordered w-full max-w-xs">
                            {
                                specialty?.map(sp => <option value={sp?.name} key={sp?._id}>{sp?.name}</option>)
                            }
                        </select>
                    </div>
                    <div>
                        <input type="file" 
                        {...register('image' , {required: true})}
                        className="file-input file-input-bordered file-input-success w-full rounded-none max-w-xs mt-2" />
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="Add Doctor" className="btn btn-primary text-white" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;