import { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Availability from "./Availability/Availability";
import Banner from "./Banner/Banner";
import Hospitality from "./Hospitality/Hospitality";
import Rooms from "./Rooms/Rooms";
import Footer from "./Footer/Footer";

const Home = () => {
    // navbar color changing
    const [color, setColor] = useState(false)
    const colorChanging = () => {
        if (window.scrollY >= 50) {
            setColor(true)
        }
        else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', colorChanging)

    return (
        <div>
            <div className="sticky top-0 z-50 transition ease-in-out">
                <div className="absolute w-full">
                    <Navbar color={color}></Navbar>
                </div>
            </div>
            <div className="relative">
                <Banner></Banner>
            </div>
            <div className="absolute w-full bottom-0 z-0">
                <Availability></Availability>
            </div>
            <Hospitality></Hospitality>
            <Rooms></Rooms>
            <Footer></Footer>
        </div>
    );
};

export default Home;