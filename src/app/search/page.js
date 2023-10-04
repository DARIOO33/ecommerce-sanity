import Products from "../components/Products";
import SmallHeader from "../components/SmallHeader";
import { getPosts } from "@/sanity/sanity.query";
import "./search.css"
import Product from "../components/Product";
import { Suspense } from "react";
import LoadingProduct from "../components/LoadingProduct"
import FiltredProducts from "./FiltredProducts";

export default async function page(params) {
    const products = await getPosts();
    const keyword = (params.searchParams.keyword);

    const filtredProducts = products.filter((product => product.product_name.toLowerCase().includes(keyword.toLowerCase())))

    return (
        <div key={Math.random()} className="SearchResults">
            <SmallHeader smallText={filtredProducts.length + " Items Found"} />
            <div className="catalog-container-search  grid mt-10  pb-6" >
                <Suspense>
                    <FiltredProducts filtredProducts={filtredProducts} />
                </Suspense>
            </div>
        </div>
    )
};
