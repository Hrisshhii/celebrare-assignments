import { useNavigate } from "react-router-dom";
import { getWithExpiry } from "../utils/storage"

const Dashboard=()=>{
  const user=getWithExpiry("user");
  const navigate=useNavigate();

  const handleLogout=()=>{
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg">{user?.name}</p>
      <p className="text-gray-400">{user?.email}</p>
      <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded text-white cursor-pointer">Logout</button>
    </div>
  )
}

export default Dashboard