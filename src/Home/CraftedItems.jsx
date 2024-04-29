import { useLoaderData } from "react-router-dom";
import CraftCard from "./CraftCard";

const CraftedItems = () => {

    const crafts = useLoaderData();

    return (
        <div>
            <div className="bg-base-200 py-5 w-full">
                <h2 className="text-6xl font-serif text-center my-10">Art and Crafts</h2>
            </div>
            <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    crafts.map(craft => <CraftCard key={craft._id} craft={craft}></CraftCard>)
                }
            </div>
        </div>
    );
};

export default CraftedItems;