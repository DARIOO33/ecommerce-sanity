import FooterList from "./FooterList"
import "./components.css"
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
        <footer className="  py-8 pt-16">
            <div className="footer-content laptop:flex  justify-between">

                <div className="informations1 laptop:w-5/12 mobile:w-11/12 mobile:m-auto ">
                    <div className="list-container flex justify-between">

                        <FooterList title={companyinfo[0]} e1={companyinfo[1]} e2={companyinfo[2]} e3={companyinfo[3]} e4={companyinfo[4]} />
                        <FooterList title={help[0]} e1={help[1]} e2={help[2]} e3={help[3]} e4={help[4]} e5={help[5]} />
                        <FooterList title={customer[0]} e1={customer[1]} e2={customer[2]} e3={customer[3]} e4={customer[4]} e5={customer[5]} />

                    </div>

                </div>
                <div className="informations2  w-5/12">
                    <div className="platforms flex justify-between">
                        <div className="socials">
                            <h1 className="text-white font-bold">Socials</h1>
                        </div>
                        <div className="apps">
                            <h1 className="text-white font-bold">Platforms</h1>

                        </div>
                    </div>

                </div>
            </div>
        </footer >

    )
};
