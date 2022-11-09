import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title, rating, description } = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p> {
                    description.length > 200 ?
                        <>{description.slice(0, 100) + '...'}</>
                        :
                        <span >{description}</span>
                }
                    <Link to={`/servicesdetails/${_id}`}><div className="badge badge-outline">Read More</div></Link>
                </p>

                <div className='flex justify-between'>
                    <div>
                        <h3 className="card-title "><FaStar className='text-warning'></FaStar>{rating}  </h3>
                    </div>
                    <div>
                        <p className='text-xl text-orange-600'>Price: ${price}</p>
                    </div>
                </div>

                {/* <div className="card-actions justify-end">
                    <Link to={`/checkout/$`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div> */}
            </div>
        </div >
    );
};

export default ServiceCard;