import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleCard = ({ service }) => {
    const { _id, img, price, title, rating, description } = service;
    return (

        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>
                        {description}
                    </p>

                    <div className='flex justify-between'>
                        <h3 className="card-title "><FaStar className='text-warning'></FaStar>{rating}  </h3>
                        <p className='text-xl text-orange-600'>Price: ${price}</p>
                    </div>
                </div>
                <button className="btn btn-warning mr-5"> <Link to={'/home'}>Read More</Link></button>


            </div>

        </div>
    );
};

export default SingleCard;