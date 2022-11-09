import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './Services/ServiceCard';
import SingleCard from './SingleCard';

const HomeService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services/home')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div >
            <div className='text-center mb-6'>
                <p className='text-2xl font-bold text-orange-600'>Our Services</p>
                <h2 className='text-5xl font-semibold'> Service We Provide</h2>

            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {
                    services.map(service => <SingleCard
                        key={service._id}
                        service={service}
                    ></SingleCard>)
                }

            </div>

            <button className=" btn btn-success mt-10 text-center"> <Link to={'/services'}>All Services</Link></button>


        </div>
    );
};

export default HomeService;