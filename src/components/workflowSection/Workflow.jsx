import React from 'react';

const Workflow = () => {
    return (
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] pt-12 pb-10 mt-5 md:py-24">
            <div className='container mx-auto '>
                <h1 className='text-2xl md:text-5xl font-extrabold text-white text-center'>Ready to Transform Your Workflow?</h1>
                <p className='text-white mt-3.5 mb-9 text-center'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
                <div className="flex justify-center gap-4">
                    <button className='text-purple-500 font-bold mr-2.5 btn rounded-full text-[12px]'>Explore Products</button>
                    <button className='btn border overflow-clip font-bold rounded-full text-[12px]  bg-clip-text text-transparent'>
                        View Pricing</button>
                </div>
                <p className='text-white mt-3.5 mb-9 text-center'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Workflow;