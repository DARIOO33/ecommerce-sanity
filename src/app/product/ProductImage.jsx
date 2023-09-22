"use client"
import { useEffect, useRef, useState } from "react"

export default function ProductImage({ image1, image2 }) {
    const imgRef = useRef(null)
    const setImgPreview = (url) => {
        imgRef.current.src = url
        console.log(url);
    }
    const [index, setIndex] = useState(0)

    return (
        <div className="product-images">
            <div className="product-img">
                <img ref={imgRef} src={image1} />
            </div>
            <div className="images-c flex">
                <img src={image1} onClick={() => setImgPreview(image1)} />
                <img src={image2} onClick={() => setImgPreview(image2)} />
            </div>
        </div>
    )
};
