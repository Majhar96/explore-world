import React from 'react';
import './Place.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';

const Place = () => {

    // fontawesome icon set
    const telegram = <FontAwesomeIcon icon={faTelegram} />
    const address = <FontAwesomeIcon icon={faAddressBook} />
    const google = <FontAwesomeIcon icon={faGoogle} />

    return (
        <div className="place-container">

            <div className="contact-container">
                <h3>Chittagong</h3>
                <br />
                <p>{telegram}House # 20 Rd No.5 sholshohor,chittagong</p>

                <p>{address} 10616, 01313718687,
                    09610707334</p>

                <p>{google} info@grace-clinic.com</p>
            </div>

            <div className="contact-container">
                <h3>Dhanmondi</h3>
                <br />
                <p>{telegram} House # 16 Rd No. 2, Dhaka 1205, Bangladesh</p>

                <p>{address} 10616, 01313678687,
                    09657707334</p>

                <p>{google} info@grace-clinic.com</p>
            </div>

            <div className="contact-container">
                <h3>Shantinagar</h3>
                <br />
                <p>{telegram} Eastern Point, 8-9 rd, Dhaka 1217, Bangladesh</p>

                <p>{address} 10616, 01313718687,
                    09610707334</p>

                <p>{google} info@grace-clinic.com</p>
            </div>
        </div>
    );
};

export default Place;