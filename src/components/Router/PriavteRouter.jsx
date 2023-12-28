import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PriavteRouter = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className="ml-96">
            <span className="loading loading-spinner text-success min-h-screen  text-3xl "></span>
        </div>
    }
    if(user){
        return children
    }

return <Navigate to={"/login" } state={{from: location}} replace></Navigate>
    
};

export default PriavteRouter;