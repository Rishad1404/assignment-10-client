import { Link, useLoaderData} from "react-router-dom";
import Navbar from "../Shared/Navbar";
import PropTypes from 'prop-types';
const CraftDetails = () => {
    const crafts=useLoaderData();



    return (
        <div>
            <Navbar></Navbar>
            <div>
            <div className="lg:flex gap-16 mb-10 mt-10 ml-4 bg-orange-50 p-5">
                <div className="bg-slate-100 p-5">
                <img className="h-auto lg:w-full lg:h-[500px] rounded-lg" src={crafts.photo} alt="" />

                </div>
                <div>
                    <p className="text-4xl font-bold text-orange-500">{crafts.itemName}</p>
                    <hr className="my-6 border-gray-300" />
                    <p className="text-lg">{crafts.description}</p>
                    <hr className="my-6 border-gray-300" />
                    <div className="mb-7">
                        <p className="font-bold">Location:</p>
                        <p className="text-2xl font-bold ">{}</p>
                    </div>
                    <hr className="my-6 border-gray-300" />
                    <p className="text-lg">
                        <span className="font-bold">Status:</span> <span className="bg-green-500 px-6 py-1 rounded-md text-xl font-bold text-white">{crafts.status}</span>
                    </p>
                    <p className="text-lg">
                        <span className="font-bold">Area:</span> {crafts.subcategory}
                    </p>
                    <p className="text-lg">
                        <span className="font-bold">Type:</span> {crafts.rating}
                    </p>
                    <h1 className="my-10 text-3xl font-bold">Price: {crafts.price}</h1>
                    <Link to='/'><button className="btn bg-orange-500 text-white font-bold">Go back</button></Link>
                </div>

            </div>
            </div>
        </div>
    );
};
CraftDetails.propTypes = {
    craft: PropTypes.object
}


export default CraftDetails;