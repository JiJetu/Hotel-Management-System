import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import UseAuth from "../../../hook/UseAuth";

const LogIn = () => {
    // const { logIn } = useContext(AuthContext);
    const {logIn} = UseAuth()
    const [showPassword, setShowPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setErrorMessage('')

        logIn(email, password)
            .then((result) => {
                const loggedInUser = result.user;
                console.log(loggedInUser);

                alert("login successfully");
                navigate(location?.state ? location.state : '/')

                // const user = { email };

                // get access token
                // axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
                //     .then(res => {
                //         console.log(res.data);
                //         // alert("login successfully");
                //         // navigate(location?.state ? location.state : '/')
                //     })

            }).catch((err) => {
                console.error(err);
                setErrorMessage(err);
            });

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
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
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered" required />
                                <span className="absolute top-4 right-2" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>
                            {
                                errorMessage && <p className="text-red-600">wrong password</p>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className="text-center pb-5">
                        new here!! <Link to='/register' className="text-blue-600">Register</Link> now
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;