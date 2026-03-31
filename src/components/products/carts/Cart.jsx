import React from 'react';
import CartCards from './cartCards/CartCards';
import { IoCartOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';

const Cart = ({ cart, setCart }) => {
    // console.log(cart);
    const total =  cart.reduce((sum, item) => sum + item.price , 0)
    const deleteItem = (cartItem) =>{
        const filterDelete = cart.filter(item => item.name !== cartItem.name)
        // console.log('cart delete fun click', filterDelete)
        toast.error(`${cartItem.name} is Deleted`)
        setCart([...filterDelete])
    }
    const handlePayment = () =>{
        toast.success("Payment Successfully")
        setCart([])
    }
    
    return (
        <div className='container mx-auto border border-gray-200 rounded-md p-4'>
                <h1 className='text-2xl font-bold p-2'>Your Cart</h1>
            <div className={!cart.length ? 'hidden' : null}>
            {
                cart.map(item => <CartCards key={item.id} item={item} deleteItem={deleteItem} />)
            }
            <div className="flex justify-between mb-4">
                <p className='text-[#627382]'>Total:</p>
                <h1 className='text-2xl font-bold'>${total}</h1>
            </div>
            <button onClick={handlePayment} className={`btn bg-linear-to-l from-[#9514FA] to-[#4F39F6] rounded-full btn-block text-white font-bold`}>Proceed to Checkout</button>
            </div>
            <div className={cart.length !== 0 ? 'hidden' : null}>
                <div className="flex justify-center pt-2">
                    <IoCartOutline className='w-24 h-24 text-gray-500'/>
                </div>
                <h1 className='text-center p-10 text-gray-400'>Your Cart is Empty</h1>
            </div>
        </div>
    );
};

export default Cart;