import { useContext, useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import { AuthContext } from "../AuthContext/AuthProvider";
import { Link } from "react-router-dom";

const MyCraftItems = () => {
    const { user } = useContext(AuthContext) || {}
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myCraft/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItems(data)
            })
    }, [user])
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-6xl font-serif text-center my-10">My Products</h1>
            <div className="container mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {items.map(item => (
                        <div key={item._id} className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                            <img src={item.photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-semibold tracking-wide">{item.name}</h2>
                                    <p className="font-bold text-red-700">{item.subcategory}</p>
                                    <p className="dark:text-gray-800">{item.description}</p>
                                </div>
                                <div className="flex justify-around">
                                    <h2 className="text-lg font-bold">Price: {item.price} $</h2>
                                    <h2 className="font-bold">Rating: {item.rating}</h2>
                                    <h2 className="font-bold text-green-700">Status: {item.status}</h2>
                                </div>
                                <Link to={`/crafts/${item._id}`}>
                                    <button type="button" className="w-full p-3 font-semibold tracking-wide rounded-md dark:bg-[#0097B2] dark:text-gray-50">View Details</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyCraftItems;