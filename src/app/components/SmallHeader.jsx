import "./components.css"
export default function SmallHeader({ mainText, smallText }) {
    return (
        <section>
            <div className="miniheader w-full flex justify-between mt-6 items-center">
                <div className="flex items-center">
                    <h1 className="under py-2 text-3xl font-bold">{mainText}</h1>
                    <p className="ml-4 text-lg">{smallText}</p>
                </div>
                <div className=" cursor-pointer text-xl font-bold text-blue-600">
                    See More {" >"}
                </div>

            </div>
        </section>
    )
};
