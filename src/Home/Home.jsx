
import Navbar from "../Shared/Navbar";
import CraftedItems from "./CraftedItems";
import GetInTouch from "./GetInTouch";
import HelpSection from "./HelpSection";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <Slider></Slider>
                <CraftedItems></CraftedItems>
                <HelpSection></HelpSection>
                <GetInTouch></GetInTouch>
            </div>
        </div>
    );
};

export default Home;