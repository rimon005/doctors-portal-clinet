import { React, useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const { logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
    }
    return (
        <div>
            <h1 className='text-red-600'>Oops!</h1>
            <p className='text-red-600'>Sorry, an unexpected error has occurred.</p>
            <p>{error.statusText || error.message}</p>
            <h4 className="text-3xl"> Please <button onClick={handleLogOut}>Sign out</button> and log back in</h4>
        </div>
    );
};

export default DisplayError;