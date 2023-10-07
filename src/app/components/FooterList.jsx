export default function FooterList({ title, e1, e2, e3, e4, e5 }) {
    return (
        <div className="list">
            <div className="pb-2 listtitle text-white font-bold">
                {title}
            </div>
            <ul>
                <li className="mt-1.5"><a href="/" className="text-white">{e1}</a></li>
                <li className="mt-1.5"><a href="/" className="text-white">{e2}</a></li>
                <li className="mt-1.5"><a href="/" className="text-white">{e3}</a></li>
                <li className="mt-1.5"><a href="/" className="text-white">{e4}</a></li>
                <li className="mt-1.5"><a href="/" className="text-white">{e5}</a></li>
            </ul>
        </div>
    )
};
