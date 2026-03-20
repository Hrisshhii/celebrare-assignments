import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard=()=>{
  const navigate=useNavigate();
  const {user,logout}=useAuth();

  const handleLogout=()=>{
    logout();
    navigate("/");
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg">{user?.name}</p>
      <p className="text-gray-400">{user?.email}</p>
      <button onClick={handleLogout} 
        className="bg-linear-to-r from-red-500 to-red-700 hover:scale-110 hover:opacity-60 transition duration-300 px-4 py-2 rounded text-white cursor-pointer">
          Logout
      </button>
    </div>
  )
}

export default Dashboard