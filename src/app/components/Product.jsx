"use client"
import { useRouter } from "next/navigation"
import "./components.css"
import Tag from "./Tag"
import Link from "next/link"
import Rating from '@mui/material/Rating';
import Image from "next/image"
export default function Product({ id, imageUrl, ProductName, price, discount }) {
    const router = useRouter()
    let discountNumber;
    discount.length > 2 ? discountNumber = discount.substr(0, 2) : discountNumber = discount.substr(0, 1)
    return (
        <div className="h-full">

            <div className="card mr-8">
                <Link href={{
                    pathname: "/product",
                    query: {
                        id: id,
                    }
                }}>
                    <div className="product-image bg-gray-200 w-full flex justify-center ">

                        <Image
                            alt=""
                            className=" cursor-pointer"
                            src={imageUrl}
                            width={200}
                            height={200}
                        />

                    </div>
                </Link>
                <div className="product-title mt-2  laptop:text-xl mobile:text-sm font-bold w-11/12 " >
                    <Link href={{
                        pathname: "/product",
                        query: {
                            id: id,
                        }
                    }}>

                        <span className="cursor-pointer " >
                            {ProductName}
                        </span>

                    </Link>
                    <div className="flex items-center">
                        <Rating name="read-only" value={5} readOnly />
                        <p className="ml-2 font-semibold text-blue-700">(5)</p>

                    </div>
                </div>
                <div className="tags  mt-1 flex ">
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
                        <Link href={{
                            pathname: "/product",
                            query: {
                                id: id,
                            },
                            shallow: true
                        }}>
                            <button className="rounded-full laptop:text-xl mobile:text-xs    slide text-blue-800 cursor-pointer" >
                                See Details
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>

    )
};
