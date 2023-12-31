import "./components.css"
export default function Tag({ text, bg, type, percent }) {
    if (percent == 0) {
        return (

            <> <div className=" shape py-1 px-4 laptop:text-sm ml-1    mr-2">
                {text} {percent} %
            </div></>
        )
    }
    return (
        <span className="flex cursor-pointer">



            {type == "small" ?

                <div style={{ backgroundColor: bg }} className=" shape py-0.5 px-2 text-small   mr-2">
                    {text} {percent} %
                </div>

                :
                <div style={{ backgroundColor: bg }} className=" shape py-1 px-4 laptop:text-sm ml-1    mr-2">
                    {text} {percent} %
                </div>

            }







        </span>
    )
};
