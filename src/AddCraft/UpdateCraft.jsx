
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import Swal from "sweetalert2";

const UpdateCraft = () => {
    const { user } = useContext(AuthContext) || {}
    const handleAddCraft=e=>{
        e.preventDefault();
        const name=e.target.name.value
        const email=user.email
        const itemName=e.target.itemName.value
        const photo=e.target.photo.value
        const subcategory=e.target.subcategory.value
        const price=e.target.price.value
        const description=e.target.description.value
        const rating=e.target.rating.value
        const customization=e.target.customization.value
        const processTime=e.target.processTime.value
        const status=e.target.status.value
        // console.log(name,email,itemName,photo,subcategory,rating,price,customization,processTime,status)
        const updatedCraft={name,email,itemName,photo,subcategory,rating,price,description,customization,processTime,status}

        fetch('http://localhost:5000/crafts',{
            method:"PUT",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(updatedCraft)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data?.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Craft updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                e.target.reset();
            }
        })

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-base-100">
                <section className="p-6 dark:text-gray-900">

                    <form onSubmit={handleAddCraft} className="container flex flex-col mx-auto space-y-12">
                        <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-lg border-[#0097B2] border dark:bg-base-200">
                            <h2 className="text-center col-span-full text-3xl font-bold">Add a Craft Item</h2>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="name" className="text-lg">User Name</label>
                                    <input id="name" type="text" name="name" placeholder="User Name" className="w-full p-3 border rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-[#0097B2] dark:border-gray-300" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="email" className="text-lg">Email</label>
                                    <input id="email" type="email" name="email" placeholder="Email" className="w-full p-3 border rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-[#0097B2] dark:border-gray-300" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="itemName" className="text-lg">Item Name</label>
                                    <input id="itemName" type="text" name="itemName" placeholder="Item Name" className="w-full p-3 border rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-[#0097B2] dark:border-gray-300" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="photo" className="text-lg">Photo URL</label>
                                    <input id="photo" type="text" placeholder="Photo URL" className="w-full p-3 border rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-[#0097B2] dark:border-gray-300" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="subcategory" className="text-lg">Subcategory Name</label>
                                    <select name="subcategory" className="w-full p-3 border rounded-md  focus:dark:ring-[#0097B2] dark:border-gray-300" id="">
                                        <option value="">Select an option</option>
                                        <option value="Card Making">Card Making</option>
                                        <option value="ScrapBooking">ScrapBooking</option>
                                        <option value="Paper Quilling & origami">Paper Quilling & origami</option>
                                        <option value="Glass Painting">Glass Painting</option>
                                        <option value="Lamp Working">Lamp Working</option>
                                        <option value="Glass Dying & Staining">Glass Dying & Staining</option>
                                    </select>
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="address" className="text-lg">Short Description</label>
                                    <input id="address" type="text" placeholder="Short Description" name="description" className="w-full p-3 border rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-[#0097B2] dark:border-gray-300" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="city" className="text-lg">Price</label>
                                    <input id="city" type="text" placeholder="Price" name="price" className="w-full p-3 border rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-[#0097B2] dark:border-gray-300" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="state" className="text-lg">Rating</label>
                                    <input id="state" type="number" placeholder="Rating" name="rating" className="w-full p-3 border rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-[#0097B2] dark:border-gray-300" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="zip" className="text-lg">Customization</label>
                                    <input id="zip" type="text" placeholder="Yes / No" name="customization" className="w-full rounded-md p-3 border focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-[#0097B2] dark:border-gray-300" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="zip" className="text-lg">Processing Time</label>
                                    <input id="zip" type="text" placeholder="Processing Time" name="processTime" className="w-full rounded-md p-3 border focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-[#0097B2] dark:border-gray-300" />
                                </div>
                                <div className="col-span-full sm:col-span-full">
                                    <label htmlFor="zip" className="text-lg">Stock Status</label>
                                    <input id="zip" type="text" name="status" placeholder="Stock Status - example: In Stock" className="w-full rounded-md p-3 border focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-[#0097B2] dark:border-gray-300" />
                                </div>
                                <button type="submit" className="btn col-span-full text-lg font-extrabold bg-[#0097B2] text-white">Add Craft</button>
                            </div>

                        </fieldset>

                    </form>

                </section>
                <section className="py-6 dark:bg-base-200 dark:text-gray-900">
                    <div className="container mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row">
                        <div className="flex flex-col justify-center lg:text-left">
                            <p className="mb-1 text-sm font-medium tracking-widest uppercase dark:text-[#0097B2]">To get updates in quick time</p>
                            <h1 className="py-2 text-3xl font-medium leading-tight title-font">Download Our Application</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
                            <button className="inline-flex items-center px-6 py-3 rounded-lg dark:bg-[#0097B2] dark:text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current w-7 h-7 dark:text-gray-50">
                                    <path d="M 5.4160156 2.328125 L 12.935547 10.158203 C 13.132547 10.363203 13.45925 10.363203 13.65625 10.158203 L 15.179688 8.5742188 C 15.405688 8.3392188 15.354312 7.956875 15.070312 7.796875 C 11.137313 5.571875 6.2620156 2.811125 5.4160156 2.328125 z M 3.140625 2.8476562 C 3.055625 3.0456562 3 3.2629063 3 3.5039062 L 3 20.591797 C 3 20.788797 3.044375 20.970625 3.109375 21.140625 L 11.576172 12.324219 C 11.762172 12.131219 11.762172 11.826813 11.576172 11.632812 L 3.140625 2.8476562 z M 17.443359 9.2578125 C 17.335484 9.2729375 17.233297 9.32375 17.154297 9.40625 L 15.015625 11.632812 C 14.829625 11.825812 14.829625 12.130219 15.015625 12.324219 L 17.134766 14.529297 C 17.292766 14.694297 17.546141 14.729188 17.744141 14.617188 C 19.227141 13.777188 20.226563 13.212891 20.226562 13.212891 C 20.725562 12.909891 21.007 12.443547 21 11.935547 C 20.992 11.439547 20.702609 10.981938 20.224609 10.710938 C 20.163609 10.676937 19.187672 10.124359 17.763672 9.3183594 C 17.664172 9.2623594 17.551234 9.2426875 17.443359 9.2578125 z M 13.296875 13.644531 C 13.165875 13.644531 13.034047 13.696328 12.935547 13.798828 L 5.4746094 21.566406 C 6.7566094 20.837406 11.328781 18.249578 15.050781 16.142578 C 15.334781 15.981578 15.386156 15.599281 15.160156 15.363281 L 13.65625 13.798828 C 13.55775 13.696328 13.427875 13.644531 13.296875 13.644531 z"></path>
                                </svg>
                                <span className="flex flex-col items-start ml-4 leading-none">
                                    <span className="mb-1 text-xs">GET IT ON</span>
                                    <span className="font-semibold title-font">Google Play</span>
                                </span>
                            </button>
                            <button className="inline-flex items-center px-5 py-3 rounded-lg dark:bg-[#0097B2] dark:text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="fill-current w-7 h-7 dark:text-gray-50">
                                    <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
                                </svg>
                                <span className="flex flex-col items-start ml-4 leading-none">
                                    <span className="mb-1 text-xs">Download on the</span>
                                    <span className="font-semibold title-font">App Store</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default UpdateCraft;