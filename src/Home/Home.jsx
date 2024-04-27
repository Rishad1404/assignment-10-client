
import Navbar from "../Shared/Navbar";
import GetInTouch from "./GetInTouch";
import HelpSection from "./HelpSection";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <Slider></Slider>
                <HelpSection></HelpSection>
                <GetInTouch></GetInTouch>
            </div>
        </div>
    );
};

export default Home;