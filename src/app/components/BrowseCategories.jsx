import Categorie from "./Categorie"
export default function BrowseCategories(params) {
    const categories = [
        {
            id: 0,
            name: "Electronics",
            imgsrc: "https://res.cloudinary.com/dizjoy6v5/image/upload/v1695932368/pngegg_2_qxizzs.png"
        },
        {
            id: 1,
            name: "Sport",
            imgsrc: "https://res.cloudinary.com/dizjoy6v5/image/upload/v1695932365/pngegg_3_sqwbx2.png"
        },
        {
            id: 2,
            name: "Fashion",
            imgsrc: "https://res.cloudinary.com/dizjoy6v5/image/upload/v1695932377/pngwing.com_6_ro9eb4.png"
        },
        {
            id: 3,
            name: "Accessories",
            imgsrc: "https://res.cloudinary.com/dizjoy6v5/image/upload/v1695932357/pngwing.com_7_ovkfk2.png"
        }
    ]
    return (
        <div className="mt-6 pb-6">
            <h1 className=" font-bold text-center text-4xl">Browse <span className="ml-2 font-bold text-center text-4xl text-blue-600">Categories</span> </h1>
            <div className="w-9/12 m-auto categories laptop:flex laptop:justify-between mt-6 mobile:grid">
                {categories.map((categorie => (
                    <Categorie key={categorie.id} name={categorie.name} imgsrc={categorie.imgsrc} />
                )))}
            </div>
        </div>

    )

};
