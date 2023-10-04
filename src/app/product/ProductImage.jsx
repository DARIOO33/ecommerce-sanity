"use client"
import "./product.css"

import { Suspense, useEffect, useRef, useState } from "react"

export default function ProductImage({ image1, image2 }) {
    function optimiseYourImage(imageurl, size) {
        const firstPartOfUrl = imageurl.substr(0, 50)
        const parameters = "ar_1.0,c_limit,h_" + size + "/"
        const secondPartOfUrl = imageurl.substr(50, (imageurl.length) - 50)
        const optimisedImage = firstPartOfUrl + parameters + secondPartOfUrl
        return optimisedImage
    }
    const [loaded, setLoaded] = useState(false)
    const optimisedImage = optimiseYourImage(image1, 50)
    const clickimng1 = optimiseYourImage(image1, 100)
    const clickimng2 = optimiseYourImage(image2, 100)
    const imgRef = useRef(null)
    const setImgPreview = (url) => {
        imgRef.current.src = url

    }
    useEffect(() => {


        console.log("Loaded");
        setImgPreview(image1)

    }, [loaded])
    const imgload = () => {
        setLoaded(true)

    }


    return (
        <div className="product-images  ">
            <div className={loaded ? "product-img loaded" : "product-img"} >

                <img className="mainimg" ref={imgRef} src={optimisedImage} loading="lazy" onLoad={() => imgload()} />

            </div>
            <div className="images-c flex">
                <img src={clickimng1} onClick={() => setImgPreview(image1)} />
                <img src={clickimng2} onClick={() => setImgPreview(image2)} />
            </div>
        </div>
    )
};
