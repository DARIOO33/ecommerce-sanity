import Products from "../components/Products";
import SmallHeader from "../components/SmallHeader";

export default function page(params) {
    console.log(params.searchParams.keyword);
    return (
        <>
            <SmallHeader smallText={"5 Items Found"} />
            <Products />
        </>
    )
};
