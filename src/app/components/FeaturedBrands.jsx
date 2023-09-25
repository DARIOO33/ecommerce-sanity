import Image from "next/image"
export default function FeaturedBrands(params) {
    return (
        <div className="mobile:px-4 laptop:px-0">

            <div className="brands flex items-center justify-between  w-full ">
                <h1 className="text-blue-700 font-bold text-2xl  ">FEATURED BRANDS</h1>

                <Image
                    alt="brand"
                    width={100}
                    height={100}
                    src={"https://res.cloudinary.com/dizjoy6v5/image/upload/v1695143943/ecommerce/pngwing.com_1_tgbeko.png"}
                />

                <Image
                    alt="brand"
                    width={100}
                    height={100}
                    src={"https://res.cloudinary.com/dizjoy6v5/image/upload/v1695143947/ecommerce/pngwing.com_2_fhmfxx.png"}
                />

                <Image
                    alt="brand"
                    width={100}
                    height={100}
                    src={"https://res.cloudinary.com/dizjoy6v5/image/upload/v1695143945/ecommerce/pngwing.com_3_vcytvj.png"}
                />
                <Image
                    alt="brand"
                    width={100}
                    height={100}
                    src={"https://res.cloudinary.com/dizjoy6v5/image/upload/v1695143944/ecommerce/pngwing.com_4_mjhjzk.png"}
                />

                <Image
                    alt="brand"
                    width={150}
                    height={150}
                    src={"https://res.cloudinary.com/dizjoy6v5/image/upload/v1695143943/ecommerce/pngwing.com_5_cvlaje.png"}
                />


            </div>
        </div>

    )
};
