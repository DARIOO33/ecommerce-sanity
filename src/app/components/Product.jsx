import "./components.css"
import Tag from "./Tag"
import Image from "next/image"
export default function Product({ imageUrl, ProductName, price, discount }) {
    let discountNumber;
    discount.length > 2 ? discountNumber = discount.substr(0, 2) : discountNumber = discount.substr(0, 1)
    return (
        <div className="h-full">

            <div className="card mr-8">
                <div className="product-image bg-gray-200 w-full flex justify-center ">
                    <Image
                        alt=""
                        src={imageUrl}
                        width={200}
                        height={200}
                    />
                </div>
                <div className="product-title mt-2 text-lg font-bold w-11/12 ">
                    <span className="cursor-pointer">
                        {ProductName}
                    </span>
                </div>
                <div className="tags mt-1 flex ">
                    {discount.length > 1
                        ?
                        <Tag text={"Save"} bg={"red"} percent={discountNumber} />

                        :
                        <div></div>
                    }
                    {Number(discountNumber) > 20 ?
                        <Tag text={"Promotion Deal"} bg={"orange"} />
                        :
                        <div></div>
                    }


                </div>
                <div className="details flex items-center mt-2">
                    <div className="priceandshipping w-1/2">
                        <div className="price text-xl font-bold">
                            ${price}
                        </div>
                        <div className="shippinh text-sm text-blue-800 font-bold">
                            FREE SHIPPING
                        </div>
                    </div>
                    <div className="button">
                        <button className="rounded-full text-xl mt-2 px-4 py-1 slide text-blue-800 cursor-pointer">
                            See Details
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
};
