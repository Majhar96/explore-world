import React from 'react';
import useService from '../../../Hooks/useService';
import Service from '../../Service/Service';

const Services = () => {

    const [services] = useService();

    // taking six services

    const information = services.slice(0, 6);


    return (
        <div className=" mt-2 mb-2">
            <h2 className="heading">Departments</h2>
            <div >
                {
                    information.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;