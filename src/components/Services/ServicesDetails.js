import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Feedback from '../Feedback';


const ServicesDetails = () => {
    const servicesDetails = useLoaderData()
    const { user } = useContext(AuthContext)
    const { title, description, img, _id } = servicesDetails;
    const [feedbacks, setFeedbacks] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/allreviews')
            .then(res => res.json())
            .then(data => setFeedbacks(data))


    }, []);
    // ffjj

    const placeReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const ratting = parseInt(form.ratting.value);
        const feedback = form.feedback.value;
        const email = user?.email || 'Unragister';

        const review = {
            service: _id,
            serviceTitle: title,
            serviceImg: img,
            reviewerName: name,
            ratting,
            feedback,
            email,
            userImg: user.photoURL,
        };

        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    // alert.success('Review Add Successfully')
                    form.reset()

                }
            })
            .catch(err => console.log(err));
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">{description}</p>
                        <label htmlFor="my-modal-4" className="btn">open modal</label>
                    </div>
                </div>
            </div>


            <div>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                <label htmlFor="my-modal-4" className="modal cursor-pointer">
                    <label className="modal-box relative" htmlFor="">

                        <form data-aos="zoom-in-down" onSubmit={placeReview}>
                            <div>
                                <div className='grid lg:ml-20 lg:grid-cols-2  grid-cols-1 gap-5 mt-5 '>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered input-sm w-full " required />
                                    <input type="text" name='ratting' placeholder="ratting" className="input input-bordered input-sm w-full " required />
                                    <textarea required className="textarea textarea-primary"
                                        name='feedback'
                                        placeholder="Type your feedback">

                                    </textarea>
                                    <input type="email" placeholder="email" defaultValue={user?.email} className="input input-bordered input-sm w-full " readOnly />
                                    <button className="btn btn-active btn-secondary " type='submit'>Place Review</button>
                                </div>
                                <div className='text-center mt-5'>

                                </div>
                            </div>
                        </form>
                    </label>
                </label>

            </div>

            <div>
                <div>
                    <h1 data-aos="zoom-in-down" className='px-4 text-center text-2xl sm:text-5xl md:text-3xl lg:text-5xl font-semibold my-10  '> <span className='text-orange-500'>Service </span> Feedback <br />
                    </h1>
                    <thead>
                        <tr>

                            <th> services Name</th>
                            <th>Feedback</th>
                            <th>Ratting</th>

                        </tr>
                    </thead>


                    <>
                        {
                            feedbacks.map(fdb =>
                                <Feedback
                                    key={fdb._id}
                                    fdb={fdb}
                                ></Feedback>)
                        }


                    </>
                </div>
            </div>

        </div >
    );
};

export default ServicesDetails;