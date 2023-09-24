export default function Price({ value }) {
    return (
        <div className="flex w-1/2 h-4/5 m-auto justify-evenly items-center font-bold text-sm">
            <h1>{value.toFixed(2)} $</h1>
        </div>
    )
};
