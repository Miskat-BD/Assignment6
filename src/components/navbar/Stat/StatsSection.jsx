import React from 'react';

const StatsSection = () => {
    return (
        
            <section className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
                <div className="max-w-5xl py-14 mx-auto flex items-center justify-between">
                    <div className="text-center">
                        <h1 className='text-3xl md:text-6xl font-extrabold  text-white '>50K+</h1>
                        <p className='text-white font-medium mt-4'>Active Users</p>
                    </div>
                    <div className="text-center">
                        <h1 className='text-3xl md:text-6xl font-extrabold text-white'>200+</h1>
                        <p className='text-white font-medium mt-4'>Premium Tools</p>
                    </div>
                    <div className="text-center">
                        <h1 className='text-3xl md:text-6xl font-extrabold text-white'>4.9</h1>
                        <p className='text-white font-medium mt-4'>Rating</p>
                    </div>
                </div>
            </section>
        
    );
};

export default StatsSection;