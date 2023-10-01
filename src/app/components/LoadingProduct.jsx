"use client"
import "./components.css"
import Tag from "./Tag"

export default function Product({ id, imageUrl, ProductName, price, discount }) {

    return (
        <div className="h-full">

            <div className="card mr-8">
                <div className="product-image bg-gray-200 w-full flex justify-center ">



                </div>
                <div className="product-title mt-2 laptop:text-xl mobile:text-sm font-bold w-11/12 " >
                    <a href={("/product?id=" + id)}>

                        <span className="cursor-pointer" >
                            {ProductName}
                        </span>

                    </a>
                    <div className="flex items-center">
                        <p className="ml-2 font-semibold text-blue-700">(5)</p>

                    </div>
                </div>
                <div className="tags mt-1 flex ">
                    {discount.length > 1
                        ?
                        <Tag text={"Save"} bg={"red"} percent={discountNumber} />

                        :
                        <div></div>
                    }
                    {/* {Number(discountNumber) > 20 ?
                        <Tag text={"Promotion Deal"} bg={"orange"} />
                        :
                        <div></div>
                    } */}


                </div>
                <div className="details flex justify-between items-center mt-2">
                    <div className="price laptop:text-xl mobile:text-sm font-bold">
                        ${price.toFixed(2)}
                    </div>

                    <div className="button">
                        <a href={("/product?id=" + id)}>
                            <button className="rounded-full laptop:text-xl mobile:text-xs    slide text-blue-800 cursor-pointer" >
                                See Details
                            </button>
                        </a>

                    </div>
                </div>
            </div>
        </div>

    )
};