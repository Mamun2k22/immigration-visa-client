import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (


        <div className="navbar bg-base-100">
            <div className="flex-1">

                <div className='flex'>
                    <div><img className='w-48' src="https://scontent.fdac8-1.fna.fbcdn.net/v/t39.30808-6/315044012_474591744737919_6621877732926295217_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHtpK495X0bx9JhSjvYx_QH12aKxwgZBwHXZorHCBkHAVmEM_07e3KLfTsj3jRmufbZ9SaJdcIqTKjnMU0-2sdV&_nc_ohc=gZCGGjECmGAAX-fyr9U&_nc_ht=scontent.fdac8-1.fna&oh=00_AfDLaEpSyjF2l35C_ae4EMB5KTipXCioQ9oKHyGUteeDPA&oe=637014F1" alt="" srcset="" /></div>
                    <div><Link to='/home' className="btn btn-ghost normal-case p-1 rounded-lg text-xl mt-20 switeh"><h3 className='text-lg'>Immigration</h3></Link></div>
                </div>

            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-2 justify-center">
                    <li><Link to='/home'>Home</Link></li>
                    <li tabIndex={0}>

                        <li><Link to='/services'>Services</Link></li>
                        <ul className="p-1 bg-base-100">
                            <Link className="p-1"><li>Services 1</li></Link>
                            <Link className="p-1"><li>Services 2</li></Link>

                        </ul>
                    </li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>
        </div>

    );
};

export default Header;