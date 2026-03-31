import React, { useState } from 'react';


const Product = ({ product, handleCart }) => {

    const [isAdded, setIsAdded] = useState(false);
    const handleOrderBtn = ()=>{
        handleCart(product)
        setIsAdded(true)
    }
    return (
        <div className=''>
            <div className="card mx-w-[375px] bg-base-100 shadow-sm border border-gray-200 hover:-translate-y-2">
                <div className="card-body">
                    <div className="flex justify-between mb-5 mt-3">
                        <div className="pt-4">
                            <img src={product.icon} alt="" />
                        </div>
                        <div className={` ${product.tagType === 'best-seller' ? 'badge badge-soft badge-warning' : product.tagType === 'new' ? 'badge badge-soft badge-success' : 'badge badge-soft badge-primary' }`}>{product.tag}</div>
                    </div>
                    <div className="">
                        <h2 className="text-2xl font-bold">{product.name}</h2>
                        <p className='text-[#627382] mb-4'>{product.description}</p>
                        <span className="text-xl"><span className='text-2xl font-bold'>${product.price}</span>/{product.period}</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs mb-2">

                        {
                            product.features.map((feature, i) => {
                                return (
                                    <li> 
                                        <svg  xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" key={i} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round"  strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span >{feature}</span>
                                        
                                    </li>
                                )
                            })
                        }


                    </ul>
                    <div className="mt-auto">
                        <button onClick={handleOrderBtn} disabled={isAdded} className={`btn bg-linear-to-l  ${isAdded ? 'from-green-400 to-green-600' : 'from-[#9514FA] to-[#4F39F6]'} rounded-full btn-block text-white font-bold`}>{isAdded ? "Added to Cart!" : "Buy Now"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;