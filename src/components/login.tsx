import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
import { getWithExpiry, setWithExpiry } from "../utils/storage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login=()=>{
  const navigate=useNavigate();

  const handleLogin=async()=>{
    const result=await signInWithPopup(auth,provider);
    const user=result.user;
    const TTL=24*60*60*1000;
    const userData={
      name:user.displayName,
      email:user.email,
    }
    setWithExpiry("user",userData,TTL);
    navigate("/dashboard")
    console.log("User saved: ",userData);
  };

  useEffect(()=>{
    const user=getWithExpiry("user");
    if(user){
      navigate("/dashboard");
    }
  });

  return(
    <div className="h-screen flex items-center justify-center">
      <button onClick={handleLogin} className="bg-blue-500 px-4 py-2 rounded cursor-pointer text-white">
        Login with Google
      </button>
    </div>
  );
}
export default Login;