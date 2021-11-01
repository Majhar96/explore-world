import React from 'react';
import { Link } from 'react-router-dom';
import './Safety.css'

const Safety = () => {
    return (
        <div className="covid-container  mt-3 p-4">
            <h1>Covid-19 Vaccine Information</h1>
            <div className="vaccine-container">
                <div>
                    <h3>Vaccination options for explore world clients</h3>
                    <br />
                    <h6>COVID-19 vaccination options and guidelines vary widely by location and may change over time. See the latest information specific to explore world Place:</h6>
                    <br />
                    <ul>
                        <li ><Link className="list" to="">Dhaka</Link></li>
                        <li ><Link className="list" to="">Chittagong</Link></li>
                        <li ><Link className="list" to="">Cumilla</Link></li>
                        <li><Link className="list" to="">Rongpur</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Not a explore world client?</h3>
                    <br />
                    <h6>If you're not a explore world client, check your public health department's website for the most complete information.</h6>
                    <br />
                    <input type="check" name="check" />
                </div>
            </div>
        </div>
    );
};

export default Safety;