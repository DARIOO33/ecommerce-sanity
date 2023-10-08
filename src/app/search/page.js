import Products from "../components/Products";
import SmallHeader from "../components/SmallHeader";
import { getPosts } from "@/sanity/sanity.query";
import "./search.css"
import { Suspense } from "react";
import FiltredProducts from "./FiltredProducts";

export default async function page(params) {
    const products = await getPosts();
    const keyword = (params.searchParams.keyword);

    const filtredProducts = products.filter((product => product.product_name.toLowerCase().includes(keyword.toLowerCase())))

    return (
        <div className="SearchResults">
            <SmallHeader smallText={filtredProducts.length + " Items Found"} />
            <div className="catalog-container-search  grid mt-10  pb-6" >
                <FiltredProducts filtredProducts={filtredProducts} />
            </div>
        </div>
    )
};
