import React from 'react';
import banner from '../../../Images/banner.jpg'

const Banner = () => {
    return (
        <div className=" mt-2">
            <img className="w-100" src={banner} alt="banner" />
        </div>
    );
};

export default Banner;