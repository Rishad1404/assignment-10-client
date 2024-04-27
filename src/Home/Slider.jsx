import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../src/App.css'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Slider = () => {
    return (
        <div className='mx-1 lg:mx-0'>
            <div className='container mx-auto my-5'>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    <SwiperSlide><div className="hero h-[350px] md:h-[400px] lg:h-[700px]" style={{ backgroundImage: 'url(https://i.imgur.com/ESTAIok.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-4xl">
                                <h1 className="mb-5 text-2xl md:text-3xl lg:text-7xl font-bold">Artisan Alchemy: Paper Craft and Glass Magic</h1>
                                <p className="mb-5 lg:font-semibold">Dive into a world where paper transforms into intricate sculptures and glass becomes vibrant masterpieces.</p>
                                <Link to='/properties'><button className="btn border-none text-xl text-white bg-[#0097B2]">View Items</button></Link>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="hero h-[350px] md:h-[400px] lg:h-[700px]" style={{ backgroundImage: 'url(https://i.imgur.com/uojW1UV.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-3xl">
                                <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold">Gleaming Creations: The Fusion of Paper Craft and Glass Art</h1>
                                <p className="mb-5 lg:font-semibold"> Immerse yourself in a symphony of colors and textures as paper and glass converge to form breathtaking works of art. </p>
                                <Link to='/properties'><button className="btn border-none text-xl text-white bg-[#0097B2]">View Items</button></Link>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="hero h-[350px] md:h-[400px] lg:h-[700px]" style={{ backgroundImage: 'url(https://i.imgur.com/Dozb697.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-4xl">
                                <h1 className="mb-5 text-2xl md:text-3xl lg:text-6xl font-bold">Crafted Brilliance: Exploring Paper Craft and Glass Artistry</h1>
                                <p className="mb-5 lg:font-semibold">Embark on a journey of creativity and brilliance as we showcase the exquisite craftsmanship of paper craft and glass art.</p>
                                <Link to='/properties'><button className="btn border-none text-xl text-white bg-[#0097B2]">View Items</button></Link>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="hero h-[350px] md:h-[400px] lg:h-[700px]" style={{ backgroundImage: 'url(https://i.imgur.com/mNhwXv1.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-3xl">
                                <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold">Paper & Glass Odyssey: Unveiling Artistic Marvels</h1>
                                <p className="mb-5 lg:font-semibold">Join us on an odyssey of artistic exploration, where paper and glass converge to create awe-inspiring marvels.</p>
                                <Link to='/properties'><button className="btn border-none text-xl text-white bg-[#0097B2]">View Items</button></Link>
                            </div>
                        </div>
                    </div></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;