import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        // <div>
        //     <div className='w-full'>
        //         <div className='grid justify-center'>
        //             <img src="https://webdevcode.com/wp/eastend-demo/wp-content/uploads/2020/04/slider-bg-22.jpg" alt="" srcset="" />

        //         </div>

        //     </div>
        // </div>
        <div>
            <div className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src="https://webdevcode.com/wp/eastend-demo/wp-content/uploads/2020/04/slider-bg-22.jpg" alt="" className="w-full rectangle-xl" />
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Immigration Consultation for <br />
                        Aboard Education
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 w-2/5 top-1/2">
                    <p className='text-white text-xl'>
                        Since 1980 we are experts in Immigration  Visa !
                    </p>
                </div>

                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 w-2/5 top-3/4">
                    <button className="btn btn-warning mr-5"> <Link to={'/home'}>Read More</Link></button>


                </div>



                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-40">
                    <a href={`#slide `} className="btn btn-circle mr-5">❮</a>
                    <a href={`#slide`} className="btn btn-circle">❯</a>
                </div>
                <div className="carousel-item relative w-full">
                    <div className='carousel-img'>
                        <img src="https://webdevcode.com/wp/eastend-demo/wp-content/uploads/2020/04/slider-bg-22.jpg" alt="" className="w-full rectangle-xl" />
                    </div>

                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                        <h1 className='text-6xl font-bold text-white'>
                            Immigration Consultation for <br />
                            Aboard Education
                        </h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 w-2/5 top-1/2">
                        <p className='text-white text-xl'>
                            Since 1980 we are experts in Immigration  Visa !
                        </p>
                    </div>

                    <div className="absolute flex justify-start transform -translate-y-1/2 left-24 w-2/5 top-3/4">
                        <button className="btn btn-warning mr-5"> <Link to={'/home'}>Read More</Link></button>


                    </div>



                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-40">
                        <a href={`#slide `} className="btn btn-circle mr-5">❮</a>
                        <a href={`#slide`} className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;