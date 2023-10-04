import "./components.css"
export default function SmallHeader({ mainText, smallText, SeeMore }) {
    return (
        <section>
            <div className="miniheader w-full flex justify-between mt-6 items-center mobile:px-2 laptop:px-0">
                <div className="flex items-center">

                    <h1 className="under py-2 Top font-bold">{mainText}</h1>


                    {smallText.includes("Found") ?
                        <p className="ml-4 pb-2 Items">{smallText}</p>
                        :
                        <p className="ml-4 Items">{smallText}</p>

                    }


                </div>
                <div className=" cursor-pointer text-xl font-bold text-blue-600">
                    <a href={"/offer?name=" + mainText.replace(" ", "")}>
                        {SeeMore}
                    </a>
                </div>

            </div>
        </section >
    )
};
