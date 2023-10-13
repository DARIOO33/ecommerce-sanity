export default function FooterList({ title, e1, e2, e3, e4, e5 }) {
    return (
        <div className="list laptop:my-0 mobile:my-8">
            <div className="pb-2 listtitle text-white font-bold ">
                {title}
            </div>
            <ul>
                <li className="mt-1.5"><a href="/" className="text-white mobile:text-sm laptop:text-base">{e1}</a></li>
                <li className="mt-1.5"><a href="/" className="text-white mobile:text-sm laptop:text-base">{e2}</a></li>
                <li className="mt-1.5"><a href="/" className="text-white mobile:text-sm laptop:text-base ">{e3}</a></li>
                <li className="mt-1.5"><a href="/" className="text-white text-sm  laptop:text-base">{e4}</a></li>
                <li className="mt-1.5"><a href="/" className="text-white  laptop:text-base ">{e5}</a></li>
            </ul>
        </div>
    )
};
