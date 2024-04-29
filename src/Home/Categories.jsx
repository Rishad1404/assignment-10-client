const Categories = () => {
    return (
        <div>
            <div className="bg-base-200 my-10 py-10">
                <h1 className="text-6xl font-serif text-center">Categories</h1>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://i.imgur.com/2qkj7d1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-4xl font-bold text-center">Card Making</h2>
                        <div className="card-actions justify-end">
                            <button className="btn bg-[#0097B2] w-full text-white text-xl">View More</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://i.imgur.com/ajvaglx.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-4xl font-bold text-center">Scrapbooking</h2>
                        <div className="card-actions justify-end">
                            <button className="btn bg-[#0097B2] w-full text-white">View More</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://i.imgur.com/lsmwrgw.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-4xl font-bold text-center">Glass Painting</h2>
                        <div className="card-actions justify-end">
                            <button className="btn bg-[#0097B2] w-full text-white">View More</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://i.imgur.com/ESTAIok.jpg" alt="Shoes" /></figure>
                    <div  className="card-body">
                        <h2 className="text-4xl font-bold text-center">Lampworking</h2>
                        <div className="card-actions justify-end ">
                            <button className="btn bg-[#0097B2] w-full text-white">View More</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://i.imgur.com/uojW1UV.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-4xl font-bold text-center">Paper Quilling & origami</h2>
                        <div className="card-actions justify-end">
                            <button className="btn bg-[#0097B2] w-full text-white">View More</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://i.imgur.com/mNhwXv1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-4xl font-bold text-center">. Glass Dying & Staining</h2>
                        <div className="card-actions justify-end">
                            <button className="btn bg-[#0097B2] w-full text-white">View More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;