import Product from "./Product";
import Scroll from "./Scroll";
import "./components.css"
import { getPosts } from "@/sanity/sanity.query";

export default async function Products({ type, categorie, currentpostid }) {
    const products = await getPosts();
    let filtredProducts = [];
    function percentToInt(discount) {
        if (discount == "") return 0
        let discountNumber;
        discount.length > 2 ? discountNumber = discount.substr(0, 2) : discountNumber = discount.substr(0, 1)
        return Number(discountNumber)
    }

    let otype = type.replace(" ", "")
    if (otype == 'TopOffers') {
        filtredProducts = products.filter((product => (percentToInt(product.discount) >= 5) && percentToInt(product.discount) <= 25))


    }
    else if (otype == "Weeklydeals") {
        filtredProducts = products.filter((product => percentToInt(product.discount) >= 30))

    }
    else if ((otype == "FeauturedProducts")) {
        filtredProducts = products.filter((product => percentToInt(product.discount) == 0))



    }
    else {

        filtredProducts = products.filter((product => (product.categorie).toLowerCase() == categorie.toLowerCase()))




    }
    const showproduct = filtredProducts.slice(0, 7)
    return (
        <>
            {filtredProducts.length > 3 ?
                <Scroll />
                :
                <div></div>
            }
            <div className="catalog-container  mt-10  pb-6">
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
                            discount={product.discount} />
                )))}
            </div>


        </>
    )
};
