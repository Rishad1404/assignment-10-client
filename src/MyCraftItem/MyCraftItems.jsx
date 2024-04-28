import { useContext, useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import { AuthContext } from "../AuthContext/AuthProvider";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import Swal from "sweetalert2";
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

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/myCrafts/${_id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-base-200 py-5 my-5 text-center">
                <h1 className="text-6xl font-serif text-center my-10">My Art and Craft</h1>
                <button className="btn bg-[#0097B2] text-white text-lg "><CiFilter /> Filter</button>
            </div>
            <div className="container mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {items.map(item => (
                        <div key={item._id} className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                            <img src={item.photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2 text-center">
                                    <h2 className="text-3xl font-semibold tracking-wide">{item.itemName}</h2>
                                    <p className="font-bold text-red-700 text-xl">{item.subcategory}</p>
                                </div>
                                <div className="flex justify-around">
                                    <h2 className="text-lg font-bold">Price: {item.price} $</h2>
                                    <h2 className="font-bold text-lg ">Rating: {item.rating}</h2>
                                </div>
                                <div className="flex justify-around">
                                    <h2 className="text-lg font-bold">Customization: <span className={`font-bold ${item.customization === "Yes" ? "text-green-700" : "text-red-700"}`}>{item.customization}</span></h2>
                                    <h2 className="font-bold text-lg ">Status: <span className="text-green-700">{item.status}</span></h2>
                                </div>
                                <div className="flex gap-5 justify-center">
                                    <Link to={`updateCraft/${item._id}`}>
                                        <button type="button" className="w-full p-3 font-semibold tracking-wide rounded-md dark:bg-[#0097B2] dark:text-gray-50 flex items-center gap-2 justify-center">
                                            <GrUpdate /> Update
                                        </button>
                                    </Link>
                                    <button onClick={() => handleDelete(item._id)} type="button" className=" p-3 font-semibold tracking-wide rounded-md dark:bg-[#0097B2] dark:text-gray-50 flex items-center gap-2 justify-center"><MdDeleteOutline /> Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyCraftItems;