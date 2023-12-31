import Products from "./Products"
import SmallHeader from "./SmallHeader"
import { getPosts } from "@/sanity/sanity.query";
import "./components.css"
export default async function Offers({ type, categorie, params }) {
    const currentpostid = params || 0
    const products = await getPosts();
    let filtredProducts = []
    let categoryDetail = ""
    function percentToInt(discount) {
        let discountNumber;
        discount.length > 2 ? discountNumber = discount.substr(0, 2) : discountNumber = discount.substr(0, 1)
        return Number(discountNumber)
    }
    let otype = type.replace(" ", "")

    if (otype == 'TopOffers') {
        filtredProducts = products.filter((product => (percentToInt(product.discount) >= 5) && percentToInt(product.discount) <= 25))
        console.log(filtredProducts);
        categoryDetail = "(" + filtredProducts.length + " items)"

    }
    else if (otype == "Weeklydeals") {
        filtredProducts = products.filter((product => percentToInt(product.discount) >= 30))
        categoryDetail = "(Up to 30% off)"

    }
    else if ((otype == "FeauturedProducts")) {
        filtredProducts = products.filter((product => percentToInt(product.discount) == 0))
        categoryDetail = ""



    }
    else {
        filtredProducts = products.filter((product => (product.categorie).toLowerCase() == categorie.toLowerCase()))

    }



    return (
        <>
            <SmallHeader mainText={type} smallText={categoryDetail} SeeMore={filtredProducts.length > 3 ? "See All >" : ""} />
            <Products type={type} categorie={categorie} currentpostid={currentpostid} />
        </>
    )
};
