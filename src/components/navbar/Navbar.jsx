import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className='flex justify-between py-4 items-center'>
                    <div className="">
                        <h1 className='text-3xl font-bold bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent'>DigiTools</h1>
                    </div>
                    <div className="">
                        <ul className='flex gap-5 cursor-pointer font-semibold'>
                            <li>Products</li>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Testimonials</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className="flex gap-5 items-center font-semibold">
                        <div className="">
                            <FiShoppingCart />
                        </div>
                        <h3>Login</h3>
                        <button className='btn bg-linear-to-l rounded-full from-[#9514FA] to-[#4F39F6] '>Get Started</button>
                    </div>
                </div>
            </div>
        <hr className='border-t-2 border-gray-300'></hr>
        </>
    );
};

export default Navbar;