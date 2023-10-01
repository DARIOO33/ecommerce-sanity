"use client"
import { useContext, useState, useEffect } from 'react';
import CartContext from "@/context/CartContext";
import Success from "../components/Success"

export default function BuyButton({ id, name, description, price, category, image, discount }) {
    const { addItemToCart } = useContext(CartContext)
    const [showtoast, setShowtoast] = useState(false);
    const [disablebutton, setDisablebutton] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowtoast(false);
            setDisablebutton(false)
        }, 3000);
    }, [disablebutton]);
    const addToCartHandler = () => {
        if (disablebutton) return

        addItemToCart({
            product_id: id,
            name: name,
            description: description,
            price: price,
            category: category,
            discount: discount,
            image: image
        })
        setShowtoast(true)
        setDisablebutton(true)

    }
    return (
        <div className="mobile:mt-4 py-2 buttonn">
            {disablebutton ?
                <button id='button' disabled className="rounded-full laptop:text-2xl mobile:text-xl  px-4 py-1 font-semibold slide text-blue-800 opacity-30 cursor-pointer" onClick={() => addToCartHandler()}>
                    Buy Now
                </button>

                :

                <button id='button' className="rounded-full laptop:text-2xl mobile:text-xl  px-4 py-1 font-semibold slide text-blue-800 cursor-pointer" onClick={() => addToCartHandler()}>
                    Buy Now
                </button>
            }
            <div className='absolute mt-6'>
                {showtoast && Success()}
            </div>


        </div>
    )
};
