import {React , useContext , useState} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import loginImg from '../../../assets/images/login.png'
import { AuthContext } from '../../../contexts/AuthProvider';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn} = useContext(AuthContext)
    const [loginError , setLoginError ] = useState('');
    const [loginUserEmail , setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail)
    const location = useLocation() ;
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'

    if(token){
        navigate(from , {replace : true})
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('')
        signIn(data.email , data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setLoginUserEmail(data.email)
        })
        .catch(e => {
            console.error(e)
            setLoginError(e.message)
        })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left flex justify-center items-center">
                    <img src={loginImg} alt="" className='lg:w-1/2' />
                </div>
                <div className="card rounded-none flex-shrink-0 w-full max-w-sm shadow-2xl">
                <h1 className='text-4xl text-accent text-center uppercase font-semibold mt-2'>Login</h1>
                    <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                        <div className="form-control">
                            <input {...register("email" , {required : "Email Address is required"})} type="email" placeholder="email" className="input input-bordered rounded-none my-5" />
                            {errors.email && <p className='text-red-700'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control">
                            <input {...register("password" , {required : "Password Address is required"})} type="password" placeholder="password" className="input input-bordered rounded-none mb-5" />
                            {errors.password && <p className='text-red-700'>{errors.password?.message}</p>}
                            <label className="label">
                                <Link className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div>
                            {loginError && <p className='text-red-700'>{loginError}</p>}
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn btn-primary text-white" />
                        </div>
                        <div>
                            <p className='text-center my-3'>New to website <Link to='/register' className='text-secondary font-medium'>create an account</Link></p>
                        </div>
                        <div className="divider my-3">OR</div>
                        <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;