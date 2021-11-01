import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import './Copyright.css'

const Copyright = () => {

    // fontawesome icon
    const copyright = <FontAwesomeIcon icon={faCopyright} />

    return (

        <div className="copyright-part">
            <span>Copyright {copyright} 2021 Explore World Developed by Majharul Islam.</span>
        </div>
    );
};

export default Copyright;