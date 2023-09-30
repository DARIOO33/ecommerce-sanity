import "./components.css"
import { AiOutlineSearch } from "react-icons/ai";
export default function HeaderDetail({ smalltext, bigtext, icon }) {
    return (
        <div className="px-2 laptop:mr-6  flex items-center cursor-pointer w-full m-auto ">
            <a href={"/" + bigtext.toLowerCase()}>

                <div className="icon2 w-2/6">
                    {icon}
                </div>
            </a>

            <div className="text w-4/6 ml-2 ">
                <a href={"/" + bigtext.toLowerCase()}>
                    <p className="font-bold text-lg text-white"> {bigtext} </p>
                </a>
                <p className="text-sm text-white"> {smalltext} </p>
            </div>
        </div>
    )
};
