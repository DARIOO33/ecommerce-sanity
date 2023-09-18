"use client"
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";
export default function Scroll(params) {
    const [scrollLeft, setScrollLeft] = useState(0)
    const scrollL = () => {
        const slider = (document.querySelector(".catalog-container"));
        slider.scrollLeft += 800
        setScrollLeft(slider.scrollLeft + 800)


    }
    const scrollR = () => {
        const slider = (document.querySelector(".catalog-container"));
        slider.scrollLeft > 0 ? slider.scrollLeft -= 800 : setScrollLeft(0)
        setScrollLeft(slider.scrollLeft - 800)









    }
    return (
        <div className="buttons-container">
            {scrollLeft > 0 ?
                <div onClick={() => scrollR()}>
                    <BsFillArrowLeftCircleFill />
                </div>
                :
                <div></div>

            }

            <div className="right" onClick={() => scrollL()}>
                <BsFillArrowRightCircleFill />
            </div>


        </div>
    )
};
