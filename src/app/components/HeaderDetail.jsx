import "./components.css"
import Link from "next/link"
import { AiOutlineSearch } from "react-icons/ai";
export default function HeaderDetail({ smalltext, bigtext, icon }) {
    return (
        <div className="px-2 laptop:mr-6  flex items-center cursor-pointer w-full m-auto ">
            <Link href={{
                pathname: bigtext.toLowerCase(),
            }}>

                <div className="icon2 w-2/6">
                    {icon}
                </div>
            </Link>

            <div className="text w-4/6 ml-2 flex items-center  ">
                <Link href={{
                    pathname: bigtext.toLowerCase(),
                }}>
                    <p className="font-bold text-lg text-white"> {bigtext} </p>
                </Link>
                <Link href={{
                    pathname: bigtext.toLowerCase(),


                }}>
                    <p className="text-sm text-white ml-2"> {smalltext} </p>
                </Link>
            </div>
        </div>
    )
};
