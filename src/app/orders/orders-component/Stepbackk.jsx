"use client"
import { useRouter } from "next/navigation"

export default function Stepbackk(params) {
    const router = useRouter()
    return (
        <p onClick={() => router.back()} className=" opacity-50 hover:opacity-90 ml-12 fixed bottom-4 text-blue-600 font-bold text-sm cursor-pointer bg-white px-4 py-2 rounded-full">Continue Shopping</p>

    )

};
