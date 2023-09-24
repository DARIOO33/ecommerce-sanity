"use client"
import { Suspense, useContext } from 'react'
import CartContext from '@/context/CartContext';
export default function Nelements(params) {
    const { addItemToCart, cart } = useContext(CartContext)
    let orders;


    try {
        orders = cart.cartItems.length
        // console.log(cart.cartItems.length);
    }
    catch {
        orders = "Loading ..."
    }
    return (
        <>
            {orders == "Loading ..." ?
                <div className='flex items-center'>
                    <p className='font-bold'>{orders}</p>
                    <h1 className="ml-2 text-2xl font-bold"> Items</h1>
                </div>
                :
                <h1 className="text-2xl font-bold">{orders} Items</h1>

            }


        </>
    )
};
