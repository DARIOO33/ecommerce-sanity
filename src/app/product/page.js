import { getPosts } from "@/sanity/sanity.query";
import "./product.css"
import Tag from "@/app/components/Tag"
import ProductImage from "./ProductImage";
import BuyButton from "./BuyButton";
import RelatedItems from "./RelatedItems";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Offers from "../components/Offers";



export default async function page(params) {
    const products = await getPosts();
    const postId = (params.searchParams.id);
    const currectProduct = products.filter((product => product._id == postId))
    function toNumber(str) {
        let discountNumber;
        str.length > 2 ? discountNumber = str.substr(0, 2) : discountNumber = str.substr(0, 1)
        return discountNumber
    }
    function percentToInt(discount) {
        if (discount == "") return 0
        let discountNumber;
        discount.length > 2 ? discountNumber = discount.substr(0, 2) : discountNumber = discount.substr(0, 1)
        return Number(discountNumber)
    }

    return (
        <div>
            <div>

                {currectProduct.map((product => (
                    <div key={product._id}>

                        <div className="product-container">

                            <ProductImage image1={product.imageLink.image1} image2={product.imageLink.image2} />
                            <div className="pr-details">
                                <h1 className="text-3xl font-bold">{product.product_name}</h1>
                                <div className="mobile:mt-3 price laptop:text-2xl mobile:text-4xl font-bold">
                                    ${((product.product_price) - ((product.product_price) * (percentToInt(product.discount) / 100))).toFixed(2)}
                                </div>
                                <div className="flex items-center mt-2">
                                    <Rating name="read-only" value={5} readOnly />
                                    <p className="ml-2 font-semibold text-blue-700">(5)</p>

                                </div>
                                <div className="mt-2">

                                    {product.discount.length > 1
                                        ?
                                        <Tag text={"Save"} bg={"red"} percent={toNumber(product.discount)} />

                                        :
                                        <div></div>
                                    }
                                </div>
                                <p className=" font-semibold mt-2 text-black">{product.product_desription}</p>
                                <div className=" w-full m-auto text-center mobile:block items-center justify-evenly mt-6">
                                    <div>


                                        {/* <div className="mobile:mt-3 shipping laptop:text-lg mobile:text-lg mt-1 text-blue-800 font-bold">
                                    FREE SHIPPING
                                </div> */}
                                    </div>
                                    <BuyButton

                                        id={product._id}
                                        name={product.product_name}
                                        description={product.product_desription}
                                        price={product.product_price}
                                        category={product.categorie}
                                        image={product.imageLink.image1}
                                        discount={product.discount}
                                    />
                                </div>
                            </div>




                        </div>

                        <Offers type={"Related Items"} categorie={product.categorie} params={params.searchParams} />
                        <Offers type={"Weekly deals"} categorie={product.categorie} params={params.searchParams} />

                    </div>
                )))}
            </div>
            {/* <RelatedItems /> */}

        </div>
    )
};

export async function generateMetadata(params) {
    const products = await getPosts();
    const postId = (params.searchParams.id);
    const currectProduct = products.filter((product => product._id == postId))
    const pname = (currectProduct[0].product_name);
    console.log("NOW");

    return {
        title: pname,
    }
}