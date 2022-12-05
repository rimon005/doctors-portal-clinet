import React from 'react';
import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast';

const AllUsers = () => {

    const {data : users =[] , refetch} = useQuery({
        queryKey : ['users'],
        queryFn : async () => {
            const res = await fetch('https://final-project-server-ruddy.vercel.app/users')
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id => {
        fetch(`https://final-project-server-ruddy.vercel.app/users/admin/${id}` , {
            method:'PUT' ,
            headers : {
                authorization : `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.matchedCount > 0) {
                toast.success('Make admin successFully')
                refetch()
            }
        })
    }

    return (
        <div>
            <h2 className="text-3xl text-secondary"> All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i+1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user?._id)} className='btn btn-xs  text-white btn-secondary rounded-none'>Make Admin</button>}</td>
                                <td><button className='btn btn-xs  text-white btn-error rounded-none'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;