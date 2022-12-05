import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Review = ({ review }) => {
    const { name, review: userReview, location, img } = review;
    return (
        <div className="card rounded-none shadow-xl">
            <div className="card-body">
                <p>{userReview}</p>
                <div className='flex items-center mt-4'>
                    <div className="avatar">
                        <div className="w-14 mr-7 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <PhotoProvider>
                                <PhotoView src={img}>
                                    <img src={img} alt='' />
                                </PhotoView>
                            </PhotoProvider>
                        </div>
                    </div>
                    <div>
                        <h4 className='font-semibold text-accent text-xl'>{name}</h4>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;