import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css'

const Details = () => {

    const { id } = useParams();

    const [details, setDetails] = useState([]);
    const [specificDetails, setSpecificDetails] = useState({});

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])

    useEffect(() => {
        if (details.length > 0) {
            // eslint-disable-next-line eqeqeq
            const requiredData = details.find(detail => detail.id == id)

            setSpecificDetails(requiredData);
        }


    }, [details, id])


    return (
        <div className="d-flex justify-content-center">
            <div className="details ">
                <h2>This is details: {id}</h2>
                <img className="details-image" src={specificDetails?.img} alt="img" />
                <h4>{specificDetails?.department}</h4>
                <p>{specificDetails?.description}</p>
            </div>
        </div>
    );
};

export default Details;