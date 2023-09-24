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

        const existingCartItemsJSON = localStorage.getItem("cart");
        const existingCartItems = existingCartItemsJSON
            ? JSON.parse(existingCartItemsJSON).cartItems
            : [];

        // Check if the product is already in the cart
        const isItemExist = existingCartItems.find((i) => i.product_id === product_id);


        let newCartItems;
        if (isItemExist) {
            newCartItems = existingCartItems.map((i) =>
                i.product_id === isItemExist.product_id ? { ...i, quantity: i.quantity + quantity } : i
            )

        }
        else {
            newCartItems = [...existingCartItems, { product_id, name, description, category, price, image, discount, quantity }];

        }
        localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }))
        setCartToState()

    }

    const deleteItemFromCart = (id) => {
        const newCartItems = cart?.cartItems?.filter((i) => i.product_id !== id)
        localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }))
        setCartToState()
    }

    const addQuantity = (id) => {
        // Retrieve the cart from local storage
        const storedCart = JSON.parse(localStorage.getItem("cart")) || { cartItems: [] };

        // Find the index of the item with the given id in the cart
        const itemIndex = storedCart.cartItems.findIndex((item) => item.product_id === id);
        if (itemIndex !== -1) {
            storedCart.cartItems[itemIndex].quantity += 1;
        } else {
            storedCart.cartItems.push({ product_id: id, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(storedCart));
        setCartToState();
    }
    const removeQuantity = (id) => {
        // Retrieve the cart from local storage
        const storedCart = JSON.parse(localStorage.getItem("cart")) || { cartItems: [] };

        // Find the index of the item with the given id in the cart
        const itemIndex = storedCart.cartItems.findIndex((item) => item.product_id === id);
        if (itemIndex !== -1) {
            storedCart.cartItems[itemIndex].quantity -= 1;
        } else {
            storedCart.cartItems.push({ product_id: id, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(storedCart));
        setCartToState();
    }
    return <CartContext.Provider
        value={{
            cart,
            addItemToCart,
            deleteItemFromCart,
            addQuantity,
            removeQuantity,
        }}
    >
        {children}
    </CartContext.Provider>
}
export default CartContext 