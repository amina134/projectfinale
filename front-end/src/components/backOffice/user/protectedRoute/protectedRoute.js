import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router";



const ProtectedRoute=()=>{
    const{currentUser}=useSelector(state=>state.userElement);
    return currentUser ?<Outlet/>:<Navigate to="/login"/>;
}

export default ProtectedRoute;