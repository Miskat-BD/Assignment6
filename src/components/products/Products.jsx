import React, { use, useState } from 'react';
import Product from './product/Product';
import Cart from './carts/Cart';

const Products = ({ productsPromise, handleCart, cart, setCart }) => {
    const productsData = use(productsPromise);
    const products = productsData.data
    // console.log(products);
    const [isActive, setIsActive] = useState('products');
    // console.log(isActive);

    

    return (
        <div className='py-12 my-5 container mx-auto pl-4'>
            <h1 className='text-2xl md:text-5xl font-extrabold text-center'>Simple, Transparent Pricing</h1>
            <p className='text-[#627382] mt-3.5 mb-9 text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box  justify-center pt-4">
                <button onClick={() => setIsActive('products')} className={`${isActive == 'products' ? 'text-white bg-[#4F39F6]' : 'text-[#4F39F6] bg-white'} mr-2.5 btn rounded-full  text-[12px]`}>Products</button>
                <button onClick={() => setIsActive('cart')} className={`${isActive == 'cart' ? 'text-white bg-[#4F39F6]' : 'text-[#4F39F6] bg-white'} mr-2.5  btn rounded-full  text-[12px] mb-10`}>Cart ({cart.length})</button>
            </div>
            <div className={`${isActive == 'products' ? 'grid grid-cols-1 md:grid-cols-3 gap-4' : null}`}>
                {
                    isActive == 'products' ?
                        products.map(product => <Product key={product.id} product={product} handleCart={handleCart} />) :
                        <Cart cart={cart} setCart={setCart} />
                }
            </div>
        </div>
    );
};

export default Products;