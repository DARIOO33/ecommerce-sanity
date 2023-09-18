import Products from "./Products"
import SmallHeader from "./SmallHeader"
import "./components.css"
export default function TopOffers(params) {
    return (
        <>
            <SmallHeader mainText={"Top Offers"} smallText={"(N items)"} />
            <Products />
        </>
    )
};
