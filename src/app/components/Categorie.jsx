import Image from "next/image"
export default function Categorie({ name, imgsrc }) {
    return (
        <div className="relative mx-8">
            <div className="imageC    cursor-pointer ">
                <Image
                    alt="Test"
                    src={imgsrc}
                    width={200}
                    height={200} />
            </div>
            <h1 className="hoverColor laptop:text-xl mobile:text-lg font-bold text-center mt-4  cursor-pointer  " >
                {name}
            </h1>
        </div>
    )
};
