/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate } from "react-router-dom";
import { getWithExpiry } from "../utils/storage"

const ProtectedRoute=({children}:any)=>{
  const user=getWithExpiry("user");
  return user?children:<Navigate to="/" />
};
export default ProtectedRoute;