/* eslint-disable react-hooks/exhaustive-deps */
import {useAuth} from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login=()=>{
  const navigate=useNavigate();
  const {user,login}=useAuth();

  const handleLogin=async()=>{
    await login();
    navigate("/dashboard");
  };

  useEffect(()=>{
    if(user){
      navigate("/dashboard");
    }
  },[user]);

  return(
    <div className="h-screen flex items-center justify-center">
      <button onClick={handleLogin} 
        className="bg-linear-to-r from-blue-500 to-blue-700 px-4 hover:opacity-70 hover:scale-110 transition duration-300 py-2 rounded cursor-pointer text-white"
      >
        Login with Google
      </button>
    </div>
  );
}
export default Login;