import React from 'react';
const CartCards = ({item}) => {
    return (
        <div>
            <div className=" rounded-2xl">
                
                <div className="border rounded-3xl p-6 flex justify-between my-5">
                    <div className="flex items-center gap-2.5">
                        <img src={item.icon} alt="" className='pr-2.5' />
                        <div className=" ">
                            <h1 className='text-[20px] font-semibold'>{item.name}</h1>
                            <p className='text-[#627382]'>${item.price}</p>
                        </div>
                    </div>
                    <div className="">
                        <button className='btn rounded-3xl text-red-600'>Remove</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default CartCards;