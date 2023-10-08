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
        if (imgRef.current) {
            imgRef.current.src = url;
            console.log(imgRef);
            setLoaded(false); // Trigger a re-render
        }
    };
    useEffect(() => {

        console.log("Loaded")

    }, [loaded])

    const handleImageLoad = () => {
        setLoaded(true);
    };

    return (
        <div className="product-images  ">
            <div className={loaded ? "product-img loaded" : "product-img"} >
                <img
                    ref={imgRef}
                    src={optimiseYourImage(image1, 700)}
                    alt="Picture of the author"
                    onLoad={handleImageLoad}
                />
            </div>
            <div className="images-c flex">
                <Image width={100} height={100} src={clickimng1} onClick={() => setImgPreview(optimiseYourImage(image1, 600))} />
                <Image width={100} height={100} src={clickimng2} onClick={() => setImgPreview(optimiseYourImage(image2, 600))} />
            </div>
        </div>
    )
};
