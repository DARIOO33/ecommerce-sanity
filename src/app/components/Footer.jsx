import FooterList from "./FooterList"
import "./components.css"
import Link from "next/link"
import { FaFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaSquareSnapchat } from "react-icons/fa6";
import { DiAndroid } from "react-icons/di";
import { DiApple } from "react-icons/di";

export default function Footer(params) {
    const companyinfo = [
        "Company info", "About Laura's Closet", "Scoial Responsibility", "Affiliate", "Fashion Blogger"
    ]
    const help = [
        "Help & Support", "Shipping Info", "Returns", "How to Order", "How to Track", "Size Chart"
    ]
    const customer = [
        "customer care", "Contact Us", "Payment", "Bonus Point", "Notices"
    ]
    return (
        <footer className="  laptop:py-12 mobile:py-2">
            <div className="footer-content laptop:flex  justify-between">

                <div className="informations1 laptop:w-5/12 mobile:w-11/12 mobile:m-auto ">
                    <div className="list-container mobile:text-center laptop:text-left laptop:flex mobile:block justify-between">

                        <FooterList title={companyinfo[0]} e1={companyinfo[1]} e2={companyinfo[2]} e3={companyinfo[3]} e4={companyinfo[4]} />
                        <FooterList title={help[0]} e1={help[1]} e2={help[2]} e3={help[3]} e4={help[4]} e5={help[5]} />
                        <FooterList title={customer[0]} e1={customer[1]} e2={customer[2]} e3={customer[3]} e4={customer[4]} e5={customer[5]} />

                    </div>

                </div>
                <div className="informations2  laptop:w-5/12 mobile:w-full  ">
                    <div className="platforms laptop:flex mobile:block justify-between">
                        <div className="socials mobile:w-1/2 mobile:m-auto mobile:text-center laptop:text-left laptop:w-7/12 ">
                            <h1 className="text-white font-bold laptop:mt-0 mobile:mt-6">Socials</h1>
                            <div className="social-icons w-3/4 mobile:mt-4 mobile:m-auto laptop:mt-4 laptop:mx-0 flex justify-between">
                                <Link href={"https://www.facebook.com/profile.php?id=100085432064449"} target="_blank">
                                    <FaFacebook />
                                </Link>

                                <FaSquareTwitter />
                                <Link href={"https://www.instagram.com/esmi_dario/"} target="_blank">

                                    <FaSquareInstagram />
                                </Link>

                                <FaTiktok />
                                <FaSquareSnapchat />


                            </div>
                        </div>
                        <div className="apps mobile:w-1/2 mobile:m-auto mobile:text-center laptop:text-left laptop:w-7/12  w-5/12">
                            <h1 className="text-white font-bold laptop:mt-0 mobile:mt-6">Platforms</h1>
                            <div className="platforms-icons mobile:mt-4 mobile:m-auto laptop:mt-4 laptop:mx-0 flex mt-4 justify-evenly w-1/3">

                                <DiAndroid />
                                <DiApple />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer >

    )
};
