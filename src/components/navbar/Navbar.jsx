import React from 'react';
import { BiCart } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
    return (
        <div className='sticky top-0 z-10 bg-white'>
            <div className="container mx-auto max-sm:hidden ">

                <div className=' md:flex justify-between py-4 items-center'>
                    <div className="">
                        <h1 className='text-3xl font-bold bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent'>DigiTools</h1>
                    </div>
                    <div className="">
                        <ul className='text-center justify-center md:flex gap-5 cursor-pointer font-semibold'>
                            <li>Products</li>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Testimonials</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className="flex text-center justify-end md:flex gap-5 items-center font-semibold">
                        <div className="">
                            <FiShoppingCart />
                        </div>
                        <h3>Login</h3>
                        <button className='text-white btn bg-linear-to-l rounded-full from-[#9514FA] to-[#4F39F6] '>Get Started</button>
                    </div>
                </div>
            </div>

            {/* For Mobile */}
            <div className="sm:hidden">
                <div className="navbar bg-base-100">
                    <div className="navbar-start w-10 mr-5">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow cursor-pointer font-semibold">
                                <li>Products</li>
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>Testimonials</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                    </div>

                    <div className="navbar-center ">
                        <h1 className='text-xl font-bold bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent'>DigiTools</h1>
                    </div>

                    <div className="navbar-end flex gap-2 items-center font-semibold ml-8">
                        <FiShoppingCart size={20} className="cursor-pointer" />
                        <h3 className='text-[12px]'>Login</h3>
                        <button className='btn btn-sm bg-linear-to-l rounded-full from-[#9514FA] to-[#4F39F6] text-[12px] text-white'>Get Started</button>
                    </div>
                </div>
            </div>
            <hr className='border-t-2 border-gray-300'></hr>
        </div>
    );
};

export default Navbar;