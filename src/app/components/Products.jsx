import Product from "./Product";
import Scroll from "./Scroll";
import "./components.css"
import { getPosts } from "@/sanity/sanity.query";

export default async function Products(params) {
    const products = await getPosts();

    return (
        <>
            {products.length > 0 ?
                <Scroll />
                :
                <div></div>
            }
            <div className="catalog-container  mt-10 px-8">
                {products.map((product => (
                    <Product
                        key={product.id}
                        imageUrl={product.imageLink.image1}
                        ProductName={product.product_name}
                        price={product.product_price}
                        discount={product.discount} />
                )))}
            </div>


        </>
    )
};
