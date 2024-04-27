import toast, { Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";
import Navbar from '../Shared/Navbar';
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';
const Register = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false)
    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {


        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const name = form.get('name')
        const photo = form.get('photo')
        const password = form.get('password')

        if (password.length < 6) {
            toast.error('Your Password should be 6 characters or longer')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Your password should have an Uppercase character')
            return
        }
        else if (!/[a-z]/.test(password)) {
            toast.error('Your password should have an Lowercase character')
            return
        }

        // Create User
        createUser(email, password, name, photo)
            .then(result => {
                console.log(result.user)
                toast.success('User Created Successfully')
                navigate(location.state = '/')

            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto mb-10 my-10">
                <Helmet>
                    <title>Welcome to Elite Estate</title>
                </Helmet>
                <div className=" max-w-md p-8 space-y-3 rounded-xl dark:bg-base-200 dark:text-gray-800 md:w-3/4 lg:w-1/2 mx-auto shadow-md">
                    <h1 className="text-2xl font-bold text-center mb-8">Welcome to Elite Estates</h1>
                    <form onSubmit={handleRegister} noValidate="" action="" className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="displayName" className="block dark:text-gray-600">User Name</label>
                            <input type="text" name="name" id="name" placeholder="Username" className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="photoURL" className="block dark:text-gray-600">Photo URL</label>
                            <input type="text" name="photo" id="photo" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block dark:text-gray-600">Password</label>

                            <div className=" text-xs dark:text-gray-600 relative">
                                <input
                                    type={showPass ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                                <span className='absolute top-3 right-4' onClick={() => setShowPass(!showPass)}>
                                    {
                                        showPass ? <FaEyeSlash className='w-5 h-5'></FaEyeSlash> : <FaEye className='w-5 h-5'></FaEye>
                                    }
                                </span>
                            </div>
                        </div>
                        <div> <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-[#0097B2]">Register</button><Toaster position="top-right"
                            reverseOrder={false} /></div>
                    </form>
                    <p className="text-md text-center sm:px-6 dark:text-gray-600">Already have an account?
                        <Link to='/login' className="underline text-[#0097B2] font-bold">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;