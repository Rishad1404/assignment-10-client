import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from '../../public/Logo.png'
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success('Logged Out');
                navigate(location.state = '/login');
            })
            .catch(() => {
                toast.error("Logout failed");
            });
    }

    const navLinks = (
        <>
            <li><NavLink className='text-xl font-mono font-bold ' to='/'>Home</NavLink></li>
            <li><NavLink className='text-xl font-bold font-mono' to='/features'>About</NavLink></li>
            <li><NavLink className='text-xl font-bold font-mono' to='/properties'>All Items</NavLink></li>

        </>
    );
    return (
        <div className="navbar bg-orange-50 rounded-lg my-2 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/'><img className='w-20 lg:w-44' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-5">

                {
                    user ?

                        <div> <button onClick={handleLogout} className='btn bg-orange-200 text-black text-xl font-mono border-none'>Logout</button><Toaster position="top-right"
                            reverseOrder={false} /></div> :
                        <Link to='/login'><button className='btn bg-orange-200 text-black text-xl font-mono border-none'>Login</button></Link>

                }
            </div>

        </div>
    );
};

export default Navbar;