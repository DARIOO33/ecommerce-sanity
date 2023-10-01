import Products from "../components/Products";
import SmallHeader from "../components/SmallHeader";
import { getPosts } from "@/sanity/sanity.query";
import Product from "../components/Product";
import "../search/search.css"

export default async function page(params) {
    const products = await getPosts();
    const categorie = (params.searchParams.categorie);
    // console.log(keyword);
    function percentToInt(discount) {
        if (discount == "") return 0
        let discountNumber;
        discount.length > 2 ? discountNumber = discount.substr(0, 2) : discountNumber = discount.substr(0, 1)
        return Number(discountNumber)
    }
    const filtredProducts = products.filter((product => product.categorie.toLowerCase() == categorie))

    return (
        <>
            <SmallHeader mainText={categorie} smallText={""} />
            <div className="catalog-container-search  grid mt-10  pb-6">
                {filtredProducts.map((product => (
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
