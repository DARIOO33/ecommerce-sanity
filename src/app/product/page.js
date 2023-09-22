import { getPosts } from "@/sanity/sanity.query";
import "./product.css"
import Tag from "@/app/components/Tag"

export default async function page(params) {
    const products = await getPosts();
    const postId = (params.searchParams.id);
    const currectProduct = products.filter((product => product._id == postId))
    function toNumber(str) {
        let discountNumber;

        str.length > 2 ? discountNumber = str.substr(0, 2) : discountNumber = str.substr(0, 1)
        return discountNumber
    }

    console.log(currectProduct);
    return (
        <div>
            {currectProduct.map((product => (
                <div key={product._id} className="product-container">
                    <div className="product-images">
                        <div className="product-img">
                            <img src={product.imageLink.image1} />
                        </div>
                        <div className="images-c flex">
                            <img src={product.imageLink.image1} />
                            <img src={product.imageLink.image2} />
                        </div>
                    </div>
                    <div className="pr-details">
                        <h1 className="text-3xl font-bold">{product.product_name}</h1>
                        <div className="mt-2">

                            {product.discount.length > 1
                                ?
                                <Tag text={"Save"} bg={"red"} percent={toNumber(product.discount)} />

                                :
                                <div></div>
                            }
                        </div>
                        <p className=" font-semibold mt-2 text-black">{product.product_desription}</p>
                        <div className="laptop:flex w-full m-auto text-center mobile:block items-center justify-evenly mt-4">
                            <div>

                                <div className="mobile:mt-3 price laptop:text-2xl mt-1 mobile:text-3xl font-bold">
                                    ${(product.product_price).toFixed(2)}
                                </div>
                                <div className="mobile:mt-3 shipping laptop:text-lg mobile:text-lg mt-1 text-blue-800 font-bold">
                                    FREE SHIPPING
                                </div>
                            </div>
                            <div className="mobile:mt-4 buttonn">
                                <button className="rounded-full laptop:text-2xl mobile:text-xl  px-4 py-1 font-semibold slide text-blue-800 cursor-pointer">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>



                </div>


            )))}
        </div>
    )
};
