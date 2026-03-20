/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";

const Dashboard=()=>{
  const navigate=useNavigate();
  const {logout}=useAuth();
  const [events,setEvents]=useState<any[]>([]);
  const [search,setSearch]=useState("");
  const [selectedEvent,setSelectedEvent]=useState<string|null>(null);
  const [loading,setLoading]=useState(true);
  
  useEffect(()=>{
    const fetchEvents=async ()=>{
      setLoading(true);
      const query=await getDocs(collection(db,"events"));
      const data=query.docs.map((doc)=>({
        id:doc.id,
        ...doc.data(),
      }));
      setEvents(data);
      setLoading(false);
    };
    fetchEvents();
  },[]);

  useEffect(()=>{
    const saved=localStorage.getItem("selectedEvent");
    if(saved) setSelectedEvent(saved);
  },[]);

  const handleLogout=()=>{
    logout();
    navigate("/");
  };

  const filteredEvents=events.filter((event)=>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  if(loading){
    return <div className="h-screen flex justify-center items-center text-gray-700 text-2xl">Loading events...</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">

      <h1 className="text-3xl font-bold mb-4 text-center p-10 bg-clip-text bg-linear-to-r from-blue-500 to-blue-900 text-transparent tracking-wide">Dashboard</h1>

      <div className="flex flex-col items-center justify-center gap-6">
        <input type="text" placeholder="Search event..." value={search} onChange={e=>setSearch(e.target.value)} 
          className="px-5 py-2 border rounded-full w-full mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {filteredEvents.map((event)=>(
            <div key={event.id} 
              className={`p-6 rounded shadow-md hover:shadow-2xl transition duration-300 cursor-pointer
                  ${selectedEvent===event.id?"bg-blue-300 border-2 border-blue-500":"bg-gray-300 "}
                `}
              onClick={()=>{
                setSelectedEvent(event.id);
                localStorage.setItem("selectedEvent",event.id);
              }}
            >
              <h2 className="font-bold">{event.title}</h2>
              <p className="text-gray-700 text-[0.85rem]">{event.date}</p>
              <p>{event.location}</p>
            </div>
          ))}
        </div>

        <button onClick={handleLogout} 
          className="bg-linear-to-r from-red-500 to-red-700 hover:scale-110 hover:opacity-60 transition duration-300 px-4 py-2 rounded text-white cursor-pointer">
            Logout
        </button>
      </div>
    </div>
    
  )
}

export default Dashboard