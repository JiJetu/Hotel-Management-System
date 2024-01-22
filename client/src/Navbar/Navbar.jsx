import { Link, NavLink } from "react-router-dom"
import logo from '../../img/t.png'
import './navbar.css'

const Navbar = () => {

    const navbar = <>
        <li> <NavLink to="/">Home</NavLink> </li>
        <li> <NavLink to="/bookings">My Bookings</NavLink> </li>
    </>

    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
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
                                <img src={logo} alt=" " className="h-full w-full" />
                            </div>
                            <p className="font-bold text-2xl">Tree House</p>
                        </button>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navbar}
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink className="" to='/login'><button>LogIn</button></NavLink>     
                </div>
            </div>
        </div>
    );
};

export default Navbar;