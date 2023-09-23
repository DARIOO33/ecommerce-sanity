"use client"
import { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CartContext from "@/context/CartContext"
export default function BuyButton({ id, name, description, price, category, image, discount }) {
    const { addItemToCart } = useContext(CartContext)
    const addToCartHandler = () => {
        addItemToCart({
            product_id: id,
            name: name,
            description: description,
            price: price,
            category: category,
            discount: discount,
            image: image
        })
    }
    return (
        <div className="mobile:mt-4 buttonn">
            <button className="rounded-full laptop:text-2xl mobile:text-xl  px-4 py-1 font-semibold slide text-blue-800 cursor-pointer" onClick={() => addToCartHandler()}>
                Buy Now
            </button>
        </div>
    )
};
