import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../../src/App.css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Slider = () => {
    return (
        <div className='mx-1'>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide><div className="hero h-[350px] md:h-[400px] lg:h-[700px]" style={{ backgroundImage: 'url(https://i.imgur.com/qhff70B.jpeg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-2xl">
                            <h1 className="mb-5 text-7xl font-bold">Luxury Living Redefined</h1>
                            <p className="mb-5 font-semibold">Experience unparalleled comfort and prestige in our exclusive collection of high-end properties, curated to exceed even the most discerning expectations.</p>
                            <Link to='/properties'><button className="btn border-none text-xl text-white bg-orange-500">View Properties</button></Link>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="hero h-[350px] md:h-[400px] lg:h-[700px]" style={{ backgroundImage: 'url(https://i.imgur.com/RACSnmP.jpeg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-3xl">
                            <h1 className="mb-5 text-5xl font-bold">Beyond Compare: Experience the Ultimate in Luxury Living</h1>
                            <p className="mb-5 font-semibold">Experience unparalleled comfort and prestige in our exclusive collection of high-end properties, curated to exceed even the most discerning expectations.</p>
                            <Link to='/properties'><button className="btn border-none text-xl text-white bg-orange-500">View Properties</button></Link>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="hero h-[350px] md:h-[400px] lg:h-[700px]" style={{ backgroundImage: 'url(https://i.imgur.com/dEysptj.jpeg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-4xl">
                            <h1 className="mb-5 text-6xl font-bold">Unparalleled Sophistication: Unveiling Elite Estates</h1>
                            <p className="mb-5 font-semibold">Experience unparalleled comfort and prestige in our exclusive collection of high-end properties, curated to exceed even the most discerning expectations.</p>
                            <Link to='/properties'><button className="btn border-none text-xl text-white bg-orange-500">View Properties</button></Link>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="hero h-[350px] md:h-[400px] lg:h-[700px]" style={{ backgroundImage: 'url(https://i.imgur.com/DxgNhkF.jpeg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-3xl">
                            <h1 className="mb-5 text-5xl font-bold">The Epitome of Luxury Living: Your Exclusive Retreat</h1>
                            <p className="mb-5 font-semibold">Experience unparalleled comfort and prestige in our exclusive collection of high-end properties, curated to exceed even the most discerning expectations.</p>
                            <Link to='/properties'><button className="btn border-none text-xl text-white bg-orange-500">View Properties</button></Link>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="hero h-[350px] md:h-[400px] lg:h-[700px]" style={{ backgroundImage: 'url(https://i.imgur.com/8kB4KqE.jpeg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-3xl">
                            <h1 className="mb-5 text-5xl font-bold">Opulence Awaits: Step Into Your Dream Home</h1>
                            <p className="mb-5 font-semibold">Experience unparalleled comfort and prestige in our exclusive collection of high-end properties, curated to exceed even the most discerning expectations.</p>
                            <Link to='/properties'><button className="btn border-none text-xl text-white bg-orange-500">View Properties</button></Link>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="hero h-[350px] md:h-[400px] lg:h-[700px]" style={{ backgroundImage: 'url(https://i.imgur.com/ZrmErV1.jpeg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-3xl">
                            <h1 className="mb-5 text-5xl font-bold">Luxury Unleashed: Discover Unrivaled Residences</h1>
                            <p className="mb-5 font-semibold">Experience unparalleled comfort and prestige in our exclusive collection of high-end properties, curated to exceed even the most discerning expectations.</p>
                            <Link to='/properties'><button className="btn border-none text-xl text-white bg-orange-500">View Properties</button></Link>
                        </div>
                    </div>
                </div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;