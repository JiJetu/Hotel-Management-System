import Navbar from "../../Navbar/Navbar";
import Availability from "./Availability/Availability";
import Banner from "./Banner/Banner";
import Catagories from "./Catagories/Catagories";
import Hospitality from "./Hospitality/Hospitality";

const Home = () => {
    return (
        <div>
            <div className="sticky top-0 z-50 transition ease-in-out">
                <div className="absolute w-full">
                    <Navbar></Navbar>
                </div>
            </div>
            <div className="relative">
                <Banner></Banner>
            </div>
            <div className="absolute w-full bottom-0 z-50">
                <Availability></Availability>
            </div>
            <Hospitality></Hospitality>
            <Catagories></Catagories>
        </div>
    );
};

export default Home;