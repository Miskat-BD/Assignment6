import React from 'react';
import CartCards from './cartCards/CartCards';

const Cart = ({ cart }) => {
    // console.log(cart);
    return (
        <div className='container mx-auto border p-4'>
            <h1 className='text-2xl font-bold'>Your Cart</h1>
            {
                cart.map(item => <CartCards key={item.id} item={item} />)
            }
            <div className="flex justify-between mb-4">
                <p className='text-[#627382]'>Total:</p>
                <h1 className='text-2xl font-bold'>$70</h1>
            </div>
            <button className={`btn bg-linear-to-l from-[#9514FA] to-[#4F39F6] rounded-full btn-block text-white font-bold`}>Proceed to Checkout</button>
        </div>
    );
};

export default Cart;