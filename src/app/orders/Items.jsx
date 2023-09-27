"use client"
import { useContext, useEffect } from "react"
import CartContext from "@/context/CartContext"
import Image from "next/image"
import "./orders.css"
import Price from "./orders-component/Price"
import Tag from "../components/Tag"

export default function Items(params) {
    function percentToInt(discount) {
        if (discount == "") return 0
        let discountNumber;
        discount.length > 2 ? discountNumber = discount.substr(0, 2) : discountNumber = discount.substr(0, 1)
        return Number(discountNumber)
    }
    const { addItemToCart, deleteItemFromCart, cart, addQuantity, removeQuantity } = useContext(CartContext)
    function optimiseYourImage(imageurl, size) {
        const firstPartOfUrl = imageurl.substr(0, 50)
        const parameters = "ar_1.0,c_limit,h_" + size + "/"
        const secondPartOfUrl = imageurl.substr(50, (imageurl.length) - 50)
        const optimisedImage = firstPartOfUrl + parameters + secondPartOfUrl
        return optimisedImage
    }
    let orders = []
    try {
        if (cart.cartItems) {
            orders = (cart.cartItems)

        }

    }
    catch {
        orders = []
    }

    return (
        <div>
            {orders.map((order => (
                <div className="itemlist mt-6 laptop:flex mobile:block" key={order.product_id}>
                    <div className="product-details laptop:w-5/12 mobile:w-full ">
                        <div className="laptop:flex mobile:block mt-6 ">
                            <div className="p-image laptop:w-2/4 mobile:w-full mobile:m-auto mobile:text-center laptop:m-0">
                                <Image
                                    alt="Msi Monitor"
                                    height={700}
                                    width={700}
                                    src={optimiseYourImage(order.image, 150)} />
                            </div>
                            <div className="p-details laptop:w-2/4 mobile:w-full justify-evenly  px-5 flex mt-1.5 mobile:text-center laptop:text-left ">
                                <h1 className="font-semibold text-sm">{order.name}</h1>
                                <div className=" mobile:m-auto laptop:m-0">

                                    {order.discount.length > 1
                                        ?
                                        <Tag text={"Save"} bg={"red"} type={"small"} percent={percentToInt(order.discount)} />

                                        :
                                        <div></div>
                                    }
                                </div>
                                <h1 className="text-gray-600 font-normal text-sm">{order.category}</h1>
                                <h1 className="text-red-500 cursor-pointer font-normal text-sm" onClick={() => deleteItemFromCart(order.product_id)}>Remove</h1>
                            </div>
                        </div>
                    </div>
                    <div className="quantity laptop:w-3/12 mobile:w-full text-center mobile:mt-2 laptop:mt-0">

                        <div className="flex w-1/2 h-4/5 m-auto justify-evenly items-center">
                            <p className="font-bold cursor-pointer text-xl " onClick={() => removeQuantity(order.product_id)}>-</p>
                            <p className=" outline-3 px-3 py-1 outline outline-slate-200 ">{order.quantity}</p>
                            <p className="font-bold cursor-pointer text-xl" onClick={() => addQuantity(order.product_id)}>+</p>
                        </div>
                    </div>
                    <div className="price laptop:w-4/12 mobile:w-full mobile:py-4 laptop:py-0 laptop:text-left ">
                        <Price value={((order.price) - ((order.price) * (percentToInt(order.discount) / 100))) * order.quantity} />



                    </div>

                </div >
            )))
            }
        </div>
    )
};
