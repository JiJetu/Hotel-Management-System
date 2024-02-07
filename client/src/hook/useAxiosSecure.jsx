import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = UseAuth();
    const navigate = useNavigate();

    useEffect(() => {

        axiosSecure.interceptors.response.use(res => {
            return res;
        }, err => {
            if (err.response.status === 401 || err.response.status === 403) {
                logOut()
                    .then((result) => {
                        navigate('/login')
                    }).catch((err) => {
                        console.error(err);
                    });
            }
        })
    }, [navigate, logOut])

    return axiosSecure;
};

export default useAxiosSecure;