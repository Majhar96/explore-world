import { useEffect, useState } from 'react';

const useService = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-waters-98285.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    // return service of hospital
    return [services]

};

export default useService;