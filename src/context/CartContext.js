"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { createContext, useState } from "react"


const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const router = useRouter

    useEffect(() => {
        setCartToState()
    }, [])

    const setCartToState = () => {
        setCart(
            localStorage.getItem('cart')
                ? JSON.parse(localStorage.getItem('cart'))
                : []
        )
    }


    const addItemToCart = async ({
        product_id,
        name,
        description,
        category,
        price,
        image,
        discount,
        quantity = 1
    }) => {

        const item = {
            product_id,
            name,
            description,
            category,
            price,
            image,
            discount,
            quantity
        }


        const isItemExist = cart?.cartItems?.find(
            (i) => i.product_id === item.product_id
        )

        let newCartItems;
        if (isItemExist) {
            newCartItems = cart.cartItems.map((i) =>
                i.product_id === isItemExist.product_id ? item : i
            )

        }
        else {
            newCartItems = [...(cart?.cartItems || []), item]

        }
        localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }))
        setCartToState()

    }

    const deleteItemFromCart = (id) => {
        const newCartItems = cart?.cartItems?.filter((i) => i.product_id !== id)
        localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }))
        setCartToState()
    }

    return <CartContext.Provider
        value={{
            cart,
            addItemToCart,
            deleteItemFromCart,
        }}
    >
        {children}
    </CartContext.Provider>
}
export default CartContext 