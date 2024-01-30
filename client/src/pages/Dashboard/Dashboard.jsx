import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";

const Dashboard = () => {
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-12 min-h-[80vh] container w-11/12 mt-10 mx-auto">
                <div className="col-span-3 flex flex-col">
                    <NavLink className='p-2 my-2 w-full' to="/dashboard">home</NavLink>
                    <NavLink className='p-2 my-2 border-2 border-green-300 w-full' to="/dashboard/addProduct">Add Product</NavLink>
                    <NavLink className='p-2 my-2 border-2 border-green-300 w-full' to="/dashboard/manageProduct">Manage Product</NavLink>
                </div>
                <div className="col-span-9">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;