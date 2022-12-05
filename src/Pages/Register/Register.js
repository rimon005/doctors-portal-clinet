import { React, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast'
import loginImg from '../../assets/images/login.png'
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [createdUserEmail , setCreatedUserEmail] = useState('') ;
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate();
    if(token) {
        navigate('/')
    }
    const handleRegister = data => {
        console.log(data);
        setRegisterError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { 
                        saveUser(data.name, data.email)
                        
                    })
                    .catch(e => console.error(e))
            })
            .catch(e => {
                console.error(e)
                setRegisterError(e.message)
            })
    }

    const saveUser = (name , email ) => {
        const user = {
            name , email
        }
        fetch('https://final-project-server-ruddy.vercel.app/users' , {
            method:'POST' , 
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            setCreatedUserEmail(email)
        })
    }



    return (
        <div className="hero my-16">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left flex justify-center items-center">
                    <img src={loginImg} alt="" className='lg:w-1/2' />
                </div>
                <div className="card rounded-none flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <form onSubmit={handleSubmit(handleRegister)} className="card-body">
                        <h1 className='text-4xl text-accent text-center font-semibold uppercase'>Register</h1>
                        <div className="form-control">
                            <input {...register("name", { required: true })} type="text" name='name' placeholder="name" className="input input-bordered rounded-none my-3" />
                        </div>
                        <div className="form-control">
                            <input {...register("email", { required: true })} type="email" name='email' placeholder="email" className="input input-bordered rounded-none my-3" />
                        </div>
                        <div className="form-control">
                            <input {...register("password", { required: true })} type="password" name='password' placeholder="password" className="input input-bordered rounded-none mb-3" />
                        </div>
                        <div>
                            {registerError && <p className='text-red-700'>{registerError}</p>}
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Register" className="btn btn-primary text-white" />
                        </div>
                        <div>
                            <p className='text-center  my-3'>Already have an account <Link to='/login' className='text-secondary font-medium'>login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;