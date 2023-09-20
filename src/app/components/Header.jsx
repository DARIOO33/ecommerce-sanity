"use client"
import HeaderDetail from "./HeaderDetail";
import "./components.css"
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi2";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useSearchParams } from 'next/navigation'

export default function Header(params) {
    const [searchinput, setSearchinput] = useState("")
    const [active, setActive] = useState(false)
    const [activeMenu, setActiveMenu] = useState(false)
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    let search = searchParams.get('keyword') || ""
    useEffect(() => {
        search.length > 0 ?
            setSearchinput(search)
            :
            setSearchinput("")


    }, [search])
    const activeClick = () => {
        setActiveMenu(false);

        setActive(!active);

    }
    const activeMenuClick = () => {
        document.querySelector('.mobileheader').classList.toggle("fixed")
        document.querySelector('.mobileheader').classList.toggle("w-full")
        setActive(false)
        setActiveMenu(!activeMenu);

    }
    const searchClick = () => {
        if (searchinput) {
            router.push(`/search?keyword=${searchinput}`)
        }
        else {
            alert("type somnething to search please")
        }
    }
    return (
        <div>
            {!pathname.includes("studio") ?
                <div>

                    <header className="pcheader justify-between items-center">

                        <div className="title text-4xl text-white font-bold cursor-pointer w-2/12 text-center">
                            <Link href={"/"}>
                                FlexStar
                            </Link>
                        </div>
                        <div className="search-bar w-5/12 bg-white h-14 flex items-center rounded-full px-4 justify-between" >

                            <input className="text-lg  font-normal " maxLength={35} type="text" placeholder="Search everything at FlexStar" value={searchinput} onChange={(e) => setSearchinput(e.target.value)} />
                            <div className="icon cursor-pointer" onClick={() => searchClick()}><AiOutlineSearch /></div>

                        </div>
                        <div className="infos flex mr-8 cursor-pointer">
                            <HeaderDetail smalltext={"Sign in"} bigtext={"Account"} icon={<HiOutlineUser />} />
                            <HeaderDetail smalltext={""} bigtext={"Orders"} icon={<BiShoppingBag />} />
                            <HeaderDetail smalltext={""} bigtext={"  Cart"} icon={<BsCart4 />} />

                        </div>
                    </header>
                    <header className="mobileheader items-center justify-between">
                        <div className="text ">

                            <div className="title text-4xl text-white font-bold cursor-pointer w-2/12 text-center">FlexStar</div>
                            <p className="text-white font-light headline">Search everything at FlexStar</p>
                        </div>
                        <div className="icons mr-6 flex ">
                            <div className="search   ml-4">
                                {!active ?
                                    <div className={active ? " icon cursor-pointer bg-black" : "block icon cursor-pointer "} onClick={() => activeClick()}><AiOutlineSearch /></div>
                                    :
                                    <div className="icon cursor-pointer" onClick={() => activeClick()}><AiOutlineClose /></div>
                                }
                            </div>

                            <div className="menu ml-4">
                                {!activeMenu ?
                                    <div className="icon cursor-pointer round" onClick={() => activeMenuClick()}><AiOutlineMenu /></div>
                                    :
                                    <div className="icon cursor-pointer round" onClick={() => activeMenuClick()}><AiOutlineClose /></div>

                                }

                            </div>
                        </div>

                    </header >
                    <div className={active ? "activephone" : "" + 'phone-search'}>
                        <div className="search-bar w-5/6 m-auto bg-white h-16 flex items-center rounded-full px-4 justify-between" >

                            <input className="text-lg font-normal " maxLength={35} type="text" placeholder="Search everything at FlexStar" value={searchinput} onChange={(e) => setSearchinput(e.target.value)} />
                            <div className="icon cursor-pointer relative" onClick={() => searchClick()}><AiOutlineSearch /></div>

                        </div>
                    </div>
                    <div className={activeMenu ? "activemenublock menublock" : "menublock"}>
                        <div className="contentheader w-full m-auto  ">

                            <div className="menubutton ">
                                <div className="flex justify-evenly w-4/6 items-center">

                                    <div className="icon3 w-10 ">
                                        <HiOutlineUser />
                                    </div>
                                    <div>
                                        <p className="font-bold text-4xl text-white w-48 text-center"> Account </p>
                                    </div>
                                </div>
                            </div>

                            <div className="menubutton ">
                                <div className="flex justify-evenly w-4/6 items-center">

                                    <div className="icon3 w-10 ">
                                        <BiShoppingBag />
                                    </div>
                                    <div>
                                        <p className="font-bold text-4xl text-white w-48 text-center"> Orders </p>
                                    </div>
                                </div>
                            </div>  <div className="menubutton">
                                <div className="flex justify-evenly w-4/6 items-center">

                                    <div className="icon3  w-10">
                                        <BsCart4 />
                                    </div>
                                    <div>
                                        <p className="font-bold text-4xl text-white w-48 text-center"> Cart </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div >
                </div>
                :
                <div></div>
            }
        </div>
    )
};
