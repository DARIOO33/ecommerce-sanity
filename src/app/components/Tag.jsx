import "./components.css"
export default function Tag({ text, bg, percent }) {
    return (
        <span className="flex cursor-pointer">

            {
                percent ?
                    <div style={{ backgroundColor: bg }} className="shape py-1 px-4  mr-2">
                        {text} {percent} %
                    </div>
                    :
                    <div style={{ backgroundColor: bg }} className="shape py-1 px-4  mr-2">
                        {text} {percent}
                    </div>


            }

        </span>
    )
};
