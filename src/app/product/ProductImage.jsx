"use client"
import "./product.css"
import Image from 'next/image'

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

    const clickimng1 = optimiseYourImage(image1, 100)
    const clickimng2 = optimiseYourImage(image2, 100)
    const imgRef = useRef(null);

    const setImgPreview = (url) => {
        imgRef.current.src = url;
    };

    function onload() {
        setLoaded(true)
    }

    const oimage1 = optimiseYourImage(image1, 400)
    const oimage2 = optimiseYourImage(image2, 400)
    useEffect(() => {

        setImgPreview(oimage1)

    }, [loaded])


    const loadimage = optimiseYourImage(image1, 50)


    return (
        <div className="product-images  ">
            <div className={loaded ? "product-img " : "product-img"} >
                <img
                    ref={imgRef}
                    src={loadimage}
                    alt="Picture of the author"
                    onLoad={() => onload()}
                />
            </div>
            <div className="images-c flex">
                <Image width={100} height={100} src={clickimng1} alt="test" onClick={() => setImgPreview(oimage1)} />
                <Image width={100} height={100} src={clickimng2} alt="test" onClick={() => setImgPreview(oimage2)} />
            </div>
        </div>
    )
};
