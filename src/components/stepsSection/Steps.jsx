import React from 'react';
import userImg from '../../assets/user.png';
import packageImg from '../../assets/package.png';
import rocketImg from '../../assets/rocket.png'
const Steps = () => {
    return (
        <div className='md:py-28 py-7 my-5 container mx-auto pl-4'>
            <h1 className='text-2xl md:text-5xl font-extrabold text-center'>Get Started in 3 Steps</h1>
            <p className='text-[#627382] mt-3.5 mb-9 text-center'>Start using premium digital tools in minutes, not hours.</p>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="card bg-base-100 w-96 shadow-sm border border-gray-200 p-4">
                    <div className="flex justify-end ">
                        <p className='text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-1 px-2 rounded-full  font-bold text-[14px]'>01</p>
                    </div>
                    <figure className="px-10 pt-10">
                        <img
                            src={userImg}
                            className="rounded-full bg-purple-200 p-4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Create Account</h2>
                        <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm border border-gray-200 p-4 max-md:my-3.5">
                    <div className="flex justify-end ">
                        <p className='text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-1 px-2 rounded-full  font-bold text-[14px]'>02</p>
                    </div>
                    <figure className="px-10 pt-10">
                        <img
                            src={packageImg}
                            className="rounded-full bg-purple-200 p-4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Choose Products</h2>
                        <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm border border-gray-200 p-4 ">
                    <div className="flex justify-end ">
                        <p className='text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-1 px-2 rounded-full  font-bold text-[14px]'>03</p>
                    </div>
                    <figure className="px-10 pt-10">
                        <div className="rounded-full bg-purple-200 p-4">
                            <img
                            src={rocketImg}
                            className="" />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Start Creating</h2>
                        <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;