import { useContext } from "react";
import { AuthContext } from "../provider/context/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateAuth = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <div className="text-center h-[85vh] w-full"><span className="loading loading-dots h-full w-1/3"></span></div>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateAuth;