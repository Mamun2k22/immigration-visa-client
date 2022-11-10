import React from 'react';
import useTitle from './hooks/usetitle';

const Blog = () => {
    useTitle("blog")
    return (
        <div>
            <div>
                <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>

                    <div className='mb-10 bg-zinc-800 text-white p-8 rounded-lg mt-8'>
                        <h2 className='text-2xl font-bold text-amber-300'>1.Difference between sql and nosql?</h2>
                        <p ><span className='text-xl font-bold text-amber-400'>Ans:</span> <span className='text-xl font-semibold'>SQL </span>  is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                    </div>

                    <div className='mb-10 bg-zinc-800 text-white p-8 rounded-lg '>
                        <h2 className='text-2xl font-bold text-amber-300'>2.what is jwt and how does it work </h2>
                        <p><span className='text-xl font-bold text-amber-400'>Ans:</span> <span className='text-xl font-semibold'></span>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
                    </div>

                    <div className='mb-10 bg-zinc-800 text-white p-8 rounded-lg '>
                        <h2 className='text-2xl font-bold text-amber-300'>3.what is the difference between javascript and node.js?</h2>
                        <p><span className='text-xl font-bold text-amber-400'>Ans:</span> <span className='text-xl font-semibold'>The</span> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                        </p>
                    </div>
                    <div className='mb-10 bg-zinc-800 text-white p-8 rounded-lg '>
                        <h2 className='text-2xl font-bold text-amber-300'>4. How does NodeJS handle multiple requests at the same time?</h2>
                        <p><span className='text-xl font-bold text-amber-400'>Ans:</span> <span className='text-xl font-semibold'></span>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;