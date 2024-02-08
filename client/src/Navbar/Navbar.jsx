import { Link, NavLink } from "react-router-dom"
import logo from '../../img/t.png'
import './navbar.css'
import { useContext, useState } from "react";
import { AuthContext } from "../provider/context/Authprovider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    // navbar color changing
    const [color, setColor] = useState(false)
    const colorChanging = () => {
        if (window.scrollY >= 7) {
            setColor(true)
        }
        else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', colorChanging)

    const navbar = <>
        <li> <NavLink className='mx-2 hover:border-2 hover:border-[#ffd700] px-[10px] py-[6px] rounded-lg' to="/">Home</NavLink> </li>
        {
            user && <li> <NavLink className='mx-2 hover:border-2 hover:border-[#ffd700] px-[10px] py-[6px] rounded-lg' to="/bookings">My Bookings</NavLink> </li>
        }
        {
            user?.email === 'jije2@gmail.com' && < li > <NavLink className='mx-2 hover:border-2 hover:border-[#ffd700] px-[10px] py-[6px] rounded-lg' to="/dashboard">Dashboard</NavLink> </li>
        }
        <li> <NavLink className='mx-2 hover:border-2 hover:border-[#ffd700] px-[10px] py-[6px] rounded-lg' to="/bookings">My Bookings</NavLink> </li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert("logOut successfully")
            }).catch((err) => {
                console.error(err);
            });
    }

    return (
        <div className={color ? "bg-base-100 rounded-b-full py-3" : "bg-transparent py-2 text-white"}>
            <div className='container mx-auto'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navbar}
                            </ul>
                        </div>
                        <Link to='/'>
                            <button className="flex gap-3 items-center">
                                <div className="h-11 w-11">
                                    <img src={logo} alt=" " className="h-full w-full rounded-full" />
                                </div>
                                <p className="font-bold text-2xl">Tree House</p>
                            </button>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu-horizontal px-1">
                            {navbar}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ? <button className="btn btn-ghost" onClick={handleLogOut}>LogOut</button> :
                                <NavLink className='mx-2 hover:border-2 hover:border-[#ffff00] px-[10px] py-[6px] rounded-lg' to='/login'><button>LogIn</button></NavLink>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;