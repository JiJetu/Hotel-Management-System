import { RiCupLine } from "react-icons/ri";
import { FaWifi } from "react-icons/fa";
import { TbToolsKitchen3 } from "react-icons/tb";
import { LuMonitor } from "react-icons/lu";

const Room = () => {
    return (
        <div className="h-[530px] shadow-xl">
            <div className="w-full h-[50%]">
                <img className="w-full h-full" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/340538951.jpg?k=e8fb42a89ec3a858754fb335f58324184366a51bab9747209400d20b03b236f4&o=&hp=1" alt="" />
            </div>
            <div className="p-6">
                <div>
                    <h1 className="hover:text-[#ffd700] text-3xl font-semibold">Family Room3</h1>
                    <h4 className="text-[#ffd700] font-semibold">Family Room</h4>
                </div>
                <div>
                    <p className="text-gray-500 text-base mt-4">Make yourself comfortable in any of our serene guest rooms and spacious suites...</p>
                    <div className="grid grid-cols-12 mt-4">
                        <RiCupLine className="col-span-1"></RiCupLine>
                        <FaWifi className="col-span-1"></FaWifi>
                        <TbToolsKitchen3 className="col-span-1"></TbToolsKitchen3>
                        <LuMonitor className="col-span-1"></LuMonitor>
                    </div>
                </div>
                <p className="mt-5 py-3 border-t border-gray-200 hover:border-[#ffd700]"><span className="text-xl">Price:</span> <span className="text-3xl font-serif font-extrabold text-black ml-3">$123</span>/night</p>
            </div>
        </div>
    );
};

export default Room;