import PropTypes from 'prop-types';
import { Link, useLoaderData } from 'react-router-dom';
const CraftCard = () => {
    const crafts = useLoaderData();
    const { _id, itemName, description, photo } = crafts;
    return (
        <div>
            <div className="rounded-md shadow-md  dark:bg-gray-50 dark:text-gray-800">
                <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{itemName}</h2>
                        <p className="dark:text-gray-800">{description}</p>
                    </div>
                    <Link to={`/crafts/${_id}`}>
                        <button type="button" className=" items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-[#0097B2] dark:text-gray-50">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
CraftCard.propTypes = {
    craft: PropTypes.object
}

export default CraftCard;