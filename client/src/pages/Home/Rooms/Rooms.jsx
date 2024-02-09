import Room from "../Room/Room";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const Rooms = () => {
    return (
        <div id="room&suits" className="container mx-auto">
            <div className="text-center my-12 space-y-4">
                <p>LUXURY HOTEL</p>
                <h3 className="text-4xl font-serif font-medium">Rooms & Suits</h3>
            </div>
            {/* all room section */}
            <div>
                <div className="mb-10 flex items-center justify-center">
                    <button><FaArrowLeftLong></FaArrowLeftLong></button>
                    <button className="text-xl mx-4">View All</button>
                    <button><FaArrowRightLong></FaArrowRightLong></button>
                </div>
                <div className="flex gap-5">
                    <Room></Room>
                    <Room></Room>
                    <Room></Room>
                </div>
            </div>
        </div>
    );
};

export default Rooms;