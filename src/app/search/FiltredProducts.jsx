import CatalogContainer from "../components/CatalogContainer";
import Product from "../components/Product"
import { Suspense } from "react";
export default function FiltredProducts({ filtredProducts }) {
    function percentToInt(discount) {
        if (discount == "") return 0
        let discountNumber;
        discount.length > 2 ? discountNumber = discount.substr(0, 2) : discountNumber = discount.substr(0, 1)
        return Number(discountNumber)
    }
    return (
        <>
            <CatalogContainer filtredProducts={filtredProducts} currentpostid={0} />
        </>
    )
};
