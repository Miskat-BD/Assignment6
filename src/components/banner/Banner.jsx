import React from 'react';
import bannerImg from '../../assets/banner.png'
import newIcon from '../../assets/banner-new-icon.png'
import playBtn from '../../assets/play.png'
const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={bannerImg}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div className=''>
                        <div className="badge badge-soft badge-primary mb-6 font-medium rounded-full">
                            <img src={newIcon} alt="" />
                            New: AI-Powered Tools Available</div>
                        <h1 className="text-3xl md:text-5xl font-bold">Supercharge Your <br></br> Digital Workflow</h1>
                        <p className="py-6 text-[#627382]">
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.
                            Explore Products
                        </p>
                        <button className='text-white mr-2.5 btn bg-linear-to-l rounded-full from-[#9514FA] to-[#4F39F6] text-[12px]'>Explore Products</button>
                        <button className='btn border border-l-[#4F39F6] border-r-[#9514FA] border-b-purple-600 border-t-[#4F39F6] overflow-clip bg-linear-to-l rounded-full from-[#9514FA] to-[#4F39F6] text-[12px]  bg-clip-text text-transparent'> 
                            <img src={playBtn} alt="" />
                             Watch Demo</button>

                </div>
            </div>
        </div>
        </div >
    );
};

export default Banner;