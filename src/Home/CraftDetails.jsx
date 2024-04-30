import { Link, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
const CraftDetails = () => {
    // const crafts=useLoaderData();
    const { id } = useParams()
    console.log(id)
    const [crafts, setCrafts] = useState({})
    useEffect(() => {
        fetch(`https://lumina-art-and-craft-store-server.vercel.app/singleCraft/${id}`)
            .then(res => res.json())
            .then(data => {
                setCrafts(data)
                console.log(data)
            })
    }, [id])




    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto">
                <div className="lg:flex gap-16 mb-10 mt-10 ml-4 bg-base-200 p-5">
                    <div className="bg-base-200 p-5">
                        <img className="h-auto lg:w-full lg:h-[500px] rounded-lg" src={crafts.photo} alt="" />

                    </div>
                    <div className="mt-10">
                        <p className="text-4xl font-bold text-[#0097B2]">{crafts.itemName}</p>
                        <hr className="my-6 border-gray-300" />
                        <p className="text-lg">{crafts.description}</p>
                        <hr className="my-6 border-gray-300" />
                        <div className="mb-7">
                            <p className="font-bold">{crafts.subcategory}</p>
                            <p className="text-2xl font-bold ">{ }</p>
                        </div>
                        <hr className="my-6 border-gray-300" />
                        <p className="text-lg">
                            <span className="font-bold">Status:</span> <span className={`${crafts.status==="Available"? "bg-green-600":"bg-red-600"} px-6 py-1 rounded-md text-xl font-bold text-white`}>{crafts.status}</span>
                        </p>
                        <p className="text-lg ">Customization:
                            <span className={`font-bold ${crafts.customization === "Yes" ? "text-green-700" : "text-red-700"}`}>{crafts.customization}</span > 
                        </p>
                        <p className="text-lg flex items-center">Rating: 
                            <span className="font-bold"><FaStar></FaStar></span> {crafts.rating}
                        </p>
                        <h1 className="my-10 text-xl font-bold">Price: {crafts.price} $</h1>
                        <Link to='/'><button className="btn bg-[#0097B2] text-white font-bold">Go back</button></Link>
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