import Products from "./Products"
import SmallHeader from "./SmallHeader"
import { getPosts } from "@/sanity/sanity.query";
import "./components.css"
export default async function TopOffers(params) {
    const products = await getPosts();

    return (
        <>
            <SmallHeader mainText={"Top Offers"} smallText={"(" + products.length + " items)"} SeeMore={products.length > 3 ? "See All >" : ""} />
            <Products />
        </>
    )
};
