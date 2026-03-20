/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute=({children}:any)=>{
  const {user,isLoading}=useAuth();
  if(isLoading) return <div className="text-gray-500 flex justify-center items-center text-2xl">Loading...</div>
  return user?children:<Navigate to="/" />
};
export default ProtectedRoute;