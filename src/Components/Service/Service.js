
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Service.css'

const Service = (props) => {

    const { description, department, img, _id } = props.service;

    const history = useHistory();

    const handleDetails = (_id) => {
        const url = `/details/${_id}`
        history.push(url);
    }

    return (

        <div className="service">
            <img className="card-img" src={img} alt="" />
            <h3>{department}</h3>
            <p>{description}</p>
            <button onClick={() => { handleDetails(_id) }} className="btn btn-primary">Book Now</button>
        </div>


    );
};

export default Service;