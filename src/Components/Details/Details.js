import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css'

const Details = () => {

    const { serviceId } = useParams();

    const [service, setService] = useState([])

    useEffect(() => {
        fetch(`https://aqueous-waters-98285.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [serviceId])


    return (
        <div className="d-flex justify-content-center">
            <div className="details ">
                <img className="details-image" src={service?.img} alt="booking" />
                <h3>{service?.name}</h3>
                <p>{service?.description}</p>
            </div>
        </div>
    );
};

export default Details;