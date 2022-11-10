import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const servicesDetails = useLoaderData()
    const { title, description } = servicesDetails;
    console.log(servicesDetails);
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">{description}</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;