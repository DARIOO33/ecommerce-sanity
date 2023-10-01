"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"
export default function Categorie({ name, imgsrc }) {
    const router = useRouter()
    return (
        <div className="relative mx-8">
            <div className="imageC    cursor-pointer ">
                <Image
                    alt="Test"
                    src={imgsrc}
                    width={200}
                    height={200} />
            </div>
            <h1 onClick={() => router.push(`/categorie?categorie=${name.toLowerCase()}`)} className="hoverColor laptop:text-xl mobile:text-lg font-bold text-center mt-4  cursor-pointer  " >
                {name}
            </h1>
        </div>
    )
};
