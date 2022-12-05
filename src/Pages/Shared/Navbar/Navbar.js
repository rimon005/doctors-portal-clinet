import { React, useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
    }
    const menuItems = <>
        <li className='font-semibold text-accent'><Link to='/'>Home</Link></li>
        <li className='font-semibold text-accent'><Link to='/appointment'>Appointment</Link></li>
        <li className='font-semibold text-accent'><Link to='/about'>About</Link></li>
        {user?.uid ?
            <>
                <li className='font-semibold text-accent'><Link to='/dashboard'>DashBoard</Link></li>
                <li className='font-semibold text-accent' onClick={handleLogOut}><Link to='/'>LogOut</Link></li>
            </>
            :
            <li className='font-semibold text-accent'><Link to='/login'>Login</Link></li>
        }

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal </Link>
            </div>
            <div className="lg:navbar-end navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className='lg:hidden navbar-end'>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;