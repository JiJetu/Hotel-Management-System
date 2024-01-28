import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/context/Authprovider";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const { createUser, googleLogIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    const provider = new GoogleAuthProvider();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        setErrorMessage('');

        if(!/[A-Z]/.test(password)){
            return setErrorMessage("Password should have at least one upper cse characters");
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                alert("register successfully")
            }).catch((err) => {
                console.error(err);
                setErrorMessage(err.message)
            });
    }

    const handleLoginWithGoogle = () => {
        googleLogIn(provider)
            .then((result) => {
                const user = result.user
                console.log(user);
            }).catch((err) => {
                console.error(err.message);
            });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                                name="name"
                                placeholder="name....."
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered w-full" required />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute top-4 right-3">{showPassword ?
                                    <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }</span>
                                {
                                    errorMessage && <p className="text-red-700">{errorMessage}</p>
                                }
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Register" />
                        </div>
                    </form>
                    <button onClick={handleLoginWithGoogle} className="text-center flex items-center bg-red-700 text-white p-2"><span className=""><FaGoogle className="bg-white p-2 text-red-700 text-3xl rounded-full"></FaGoogle></span><span className="font-semibold ml-12">signIn with Google</span></button>
                    <div className="text-center pb-5">
                        have an account?? please <Link to='/login' className="text-blue-600">login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;