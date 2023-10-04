import Product from "../components/Product"
import { Suspense } from "react";
export default function FiltredProducts({ filtredProducts }) {
    function percentToInt(discount) {
        if (discount == "") return 0
        let discountNumber;
        discount.length > 2 ? discountNumber = discount.substr(0, 2) : discountNumber = discount.substr(0, 1)
        return Number(discountNumber)
    }
    return (
        <>
            {filtredProducts.map((product => (


                <Product
                    key={product._id}
                    id={product._id}
                    imageUrl={product.imageLink.image1}
                    ProductName={product.product_name}
                    price={(product.product_price) - ((product.product_price) * (percentToInt(product.discount) / 100))}
                    discount={product.discount} />


            )))}

        </>
    )
};
