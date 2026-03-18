import { getWithExpiry } from "../utils/storage"

const Dashboard=()=>{
  const user=getWithExpiry("user");
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Welcome</h1>
      <p className="text-lg">{user?.name}</p>
      <p className="text-gray-400">{user?.email}</p>
    </div>
  )
}

export default Dashboard