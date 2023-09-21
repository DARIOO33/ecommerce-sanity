import { getPosts } from "@/sanity/sanity.query";

export default async function page(params) {
    const products = await getPosts();
    const postId = (params.searchParams.id);
    const currectProduct = products.filter((product => product._id == postId))

    console.log(currectProduct);
    return (
        <div>
            {currectProduct.map((product => (
                <div key={product._id} className="product-container">
                    <h1> id={product._id}</h1>
                    <h1> {product.product_name}</h1>


                </div>


            )))}
        </div>
    )
};
