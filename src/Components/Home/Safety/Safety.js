import React from 'react';
import { Link } from 'react-router-dom';
import './Safety.css'

const Safety = () => {
    return (
        <div className="covid-container  mt-3 p-4">
            <h1>Safety Issue Of the Clients</h1>
            <div className="vaccine-container">
                <div>
                    <h3>Our place to know about our agency</h3>
                    <br />
                    <h6>COVID-19 situation make the world a borring place.Though we have to follow the safety rules of government.Here some section:</h6>
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
                    <h6>If you're not a explore world client, check our website for the most complete information for what to do for covid protocol.</h6>
                    <br />
                    <input type="check" name="check" />
                </div>
            </div>
        </div>
    );
};

export default Safety;