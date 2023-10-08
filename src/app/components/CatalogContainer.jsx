"use client"
import "./components.css"
import Product from "./Product"
import { useState } from "react"
import Loading from "./loading"
export default function CatalogContainer({ filtredProducts, currentpostid }) {
    const [loading, setLoading] = useState(false)

    function percentToInt(discount) {
        if (discount == "") return 0
        let discountNumber;
        discount.length > 2 ? discountNumber = discount.substr(0, 2) : discountNumber = discount.substr(0, 1)
        return Number(discountNumber)
    }
    return (
        <>
            {loading && <Loading />}

            {filtredProducts.map((product => (


                product._id == currentpostid.id ?
                    <div key={"test"} className="hidden"></div>
                    :
                    <Product
                        key={product._id}
                        id={product._id}
                        imageUrl={product.imageLink.image1}
                        ProductName={product.product_name}
                        price={(product.product_price) - ((product.product_price) * (percentToInt(product.discount) / 100))}
                        discount={product.discount}
                        loading={loading}
                        setLoading={setLoading} />
            )))}
        </>
    )
};
