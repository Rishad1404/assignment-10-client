import { useState } from 'react';
import { Link } from "react-router-dom";

const Categories = () => {
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);

    // Function to handle selection of subcategory
    const handleSubcategorySelection = (subcategory) => {
        setSelectedSubcategory(subcategory);
    };

    return (
        <div>
            <div className="bg-base-200 my-10 py-10">
                <h1 className="text-6xl font-serif text-center">Art and Craft Categories</h1>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
            <div className={`card card-compact bg-base-100 shadow-xl ${selectedSubcategory === 'Card Making' ? 'selected' : ''}`}>
                    <figure><img src="https://i.imgur.com/2qkj7d1.jpg" alt="Shoes"/></figure>
                    <div className="card-body">
                        <h2 className="text-4xl font-bold text-center">Card Making</h2>
                        <div className="card-actions justify-end">
                            <Link to={{ pathname: '/subcategories', state: { subcategory: 'Card Making' } }}>
                                <button className="btn bg-[#0097B2] w-full text-white" onClick={() => handleSubcategorySelection('Card Making')}>View More</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://i.imgur.com/ajvaglx.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-4xl font-bold text-center">Scrapbooking</h2>
                        <div className="card-actions justify-end">
                            <Link to='/subcategories'><button className="btn bg-[#0097B2] w-full text-white" onClick={() => handleSubcategorySelection('Scrapbooking')}>View More</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://i.imgur.com/lsmwrgw.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-4xl font-bold text-center">Glass Painting</h2>
                        <div className="card-actions justify-end">
                            <Link to='/subcategories'><button className="btn bg-[#0097B2] w-full text-white" onClick={() => handleSubcategorySelection('Glass Painting')}>View More</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://i.imgur.com/ESTAIok.jpg" alt="Shoes" /></figure>
                    <div  className="card-body">
                        <h2 className="text-4xl font-bold text-center">Lampworking</h2>
                        <div className="card-actions justify-end ">
                            <Link to='/subcategories'><button className="btn bg-[#0097B2] w-full text-white" onClick={() => handleSubcategorySelection('Lampworking')}>View More</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://i.imgur.com/uojW1UV.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-4xl font-bold text-center">Paper Quilling & origami</h2>
                        <div className="card-actions justify-end">
                            <Link to='/subcategories'><button className="btn bg-[#0097B2] w-full text-white" onClick={() => handleSubcategorySelection('Paper Quilling & origami')}>View More</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://i.imgur.com/mNhwXv1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-4xl font-bold text-center">Glass Dying & Staining</h2>
                        <div className="card-actions justify-end">
                            <Link to='/subcategories'><button className="btn bg-[#0097B2] w-full text-white" onClick={() => handleSubcategorySelection('Glass Dying & Staining')}>View More</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
