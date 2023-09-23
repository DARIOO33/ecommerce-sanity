"use client"
import "./product.css"

import { Suspense, useEffect, useRef, useState } from "react"

export default function ProductImage({ image1, image2 }) {

    const [loaded, setLoaded] = useState(false)
    const firstPartOfUrl = image1.substr(0, 50)
    const parameters = "ar_1.0,c_limit,h_50/"
    const secondPartOfUrl = image1.substr(50, (image1.length) - 50)
    const optimisedImage = firstPartOfUrl + parameters + secondPartOfUrl
    const imgRef = useRef(null)
    const setImgPreview = (url) => {
        imgRef.current.src = url
    }
    const [index, setIndex] = useState(0)
    useEffect(() => {
        setTimeout(() => {

            console.log("Loaded");
            setImgPreview(image1)
        }, 500);
    }, [loaded])
    const imgload = () => {
        setLoaded(true)

    }
    return (
        <div className="product-images">
            <div className={loaded ? "product-img loaded" : "product-img"} >

                <img className="mainimg" ref={imgRef} src={optimisedImage} loading="lazy" onLoad={() => imgload()} />

            </div>
            <div className="images-c flex">
                <img src={image1} onClick={() => setImgPreview(image1)} />
                <img src={image2} onClick={() => setImgPreview(image2)} />
            </div>
        </div>
    )
};
