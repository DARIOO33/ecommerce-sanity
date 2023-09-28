import Image from "next/image"
export default function Categorie({ name, imgsrc }) {
    return (
        <div>
            <div className="imageC    cursor-pointer ">
                <Image
                    alt="Test"
                    src={imgsrc}
                    width={200}
                    height={200} />
            </div>
            <h1 className="hoverColor text-xl font-bold text-center mt-4  cursor-pointer  " >
                {name}
            </h1>
        </div>
    )
};
