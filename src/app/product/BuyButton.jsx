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
        }, 1500);
    }, [showtoast]);


    const addToCartHandler = () => {
        setShowtoast(true)
        setDisablebutton(true)



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
        <div className="mobile:mt-4 py-2 buttonn">
            {disablebutton ?
                <button className="rounded-full laptop:text-2xl mobile:text-xl  px-4 py-1 font-semibold slide text-blue-800 opacity-30 cursor-pointer" >
                    Buy Now
                </button>
                :
                <button className="rounded-full laptop:text-2xl mobile:text-xl  px-4 py-1 font-semibold slide text-blue-800 cursor-pointer" onClick={() => addToCartHandler()}>
                    Buy Now
                </button>
            }
            {disablebutton && showtoast && Success()}



        </div>
    )
};
