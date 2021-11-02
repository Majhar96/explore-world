import React from 'react';
import useService from '../../Hooks/useService';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services] = useService();

    return (
        <div className="mb-4 mt-4">
            <h2 className="service-heading">Offerings We Have</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;