"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
export default function Categorie({ name, imgsrc }) {
    const router = useRouter()
    return (
        <div className="relative mx-8">
            <div className="imageC    cursor-pointer ">
                <Link href={{
                    pathname: "/categorie",
                    query: {
                        name: `${name.toLowerCase()}`,
                    }
                }}>
                    <Image
                        alt="Test"
                        src={imgsrc}
                        width={200}
                        height={200} />
                </Link>
            </div>
            <Link href={{
                pathname: "/categorie",
                query: {
                    name: `${name.toLowerCase()}`,
                }
            }}>
                <h1 className="hoverColor laptop:text-xl mobile:text-lg font-bold text-center mt-4  cursor-pointer  " >
                    {name}
                </h1>
            </Link>
        </div>
    )
};
