import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css'

const Details = () => {

    const { _id } = useParams();

    const [details, setDetails] = useState([]);
    const [specificDetails, setSpecificDetails] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])

    useEffect(() => {
        if (details.length > 0) {
            // eslint-disable-next-line eqeqeq
            const requiredData = details.find(detail => detail._id == _id)

            setSpecificDetails(requiredData);
        }


    }, [details, _id])


    return (
        <div className="d-flex justify-content-center">
            <div className="details ">

                <img className="details-image" src={specificDetails?.img} alt="img" />
                <h4>{specificDetails?.name}</h4>
                <p>{specificDetails?.description}</p>
            </div>
        </div>
    );
};

export default Details;