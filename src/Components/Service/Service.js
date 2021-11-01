
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Service.css'

const Service = (props) => {

    const { description, department, img, id } = props.service;

    const history = useHistory();

    const handleDetails = (id) => {
        const url = `/details/${id}`
        history.push(url);
    }

    return (

        <div className="service">
            <img className="card-img" src={img} alt="" />
            <h3>{department}</h3>
            <p>{description}</p>
            <button onClick={() => { handleDetails(id) }} className="btn btn-primary">See details</button>
        </div>


    );
};

export default Service;