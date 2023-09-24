"use client"
import { useContext } from "react";
import CartContext from "@/context/CartContext";
export default function TotalN({ tax }) {
    function toNumber(str) {
        let discountNumber;

        str.length > 2 ? discountNumber = str.substr(0, 2) : discountNumber = str.substr(0, 1)
        return discountNumber
    }
    function percentToInt(discount) {
        if (discount == "") return 0
        let discountNumber;
        discount.length > 2 ? discountNumber = discount.substr(0, 2) : discountNumber = discount.substr(0, 1)
        return Number(discountNumber)
    }
    const { addItemToCart, deleteItemFromCart, cart } = useContext(CartContext)
    let orders = []
    try {
        if (cart.cartItems) {
            orders = (cart.cartItems)

        }

    }
    catch {
        orders = []
    }
    let price = 0;
    orders.forEach(order => {
        price = price + Number(((order.price) - ((order.price) * (percentToInt(order.discount) / 100))) * order.quantity)

    });
    return (
        <h1 className="text-lg text-center text-gray-500 font-bold">{(price + tax).toFixed(2)} $</h1>
    )
};
