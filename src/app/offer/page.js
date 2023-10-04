import Offers from "../components/Offers";
import FiltredProducts from "./FiltredProducts";
import { getPosts } from "@/sanity/sanity.query";
import "../search/search.css"
export default async function page(params) {
    const products = await getPosts();
    let categoryDetail = ""
    function percentToInt(discount) {
        let discountNumber;
        discount.length > 2 ? discountNumber = discount.substr(0, 2) : discountNumber = discount.substr(0, 1)
        return Number(discountNumber)
    }
    const offerType = (params.searchParams.name);
    let filtredProducts;
    if (offerType == 'TopOffers') {
        filtredProducts = products.filter((product => (percentToInt(product.discount) >= 5) && percentToInt(product.discount) <= 25))
        console.log(filtredProducts);
        categoryDetail = "(" + filtredProducts.length + " items)"

    }
    else if (offerType == "Weeklydeals") {
        filtredProducts = products.filter((product => percentToInt(product.discount) >= 30))
        categoryDetail = "(Up to 30% off)"

    }
    else if ((offerType == "FeauturedProducts")) {
        filtredProducts = products.filter((product => percentToInt(product.discount) == 0))
        categoryDetail = ""



    }
    return (
        <>
            <div key={Math.random()} className="SearchResults">
                <div className="catalog-container-search  grid mt-10  pb-6" >
                    <FiltredProducts filtredProducts={filtredProducts} />
                </div>
            </div>


        </>
    )
};
