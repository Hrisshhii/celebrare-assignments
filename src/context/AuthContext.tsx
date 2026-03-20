/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useEffect, useState } from "react";
import { getWithExpiry, setWithExpiry } from "../utils/storage";
import { signInWithPopup } from "firebase/auth";
import {auth,provider} from "../utils/firebase";

const AuthContext=createContext<any>(null);

export const AuthProvider=({children}:any)=>{
  const [user,setUser]=useState<any>(null);
  const [isLoading,setIsLoading]=useState(true);
  
  useEffect(()=>{
    const storedUser=getWithExpiry("user");
    if(storedUser){
      setUser(storedUser);
    }
    setIsLoading(false);
  },[]);

  const login=async ()=>{
    const result=await signInWithPopup(auth,provider);
    const userData={
      name:result.user.displayName,
      email:result.user.email,
    };
    const TTL=24*60*60*1000;
    setWithExpiry("user",userData,TTL);
    setUser(userData);
  };

  const logout=()=>{
    localStorage.removeItem("user");
    setUser(null);
  };

  return(
    <AuthContext.Provider value={{user,login,logout,isLoading}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth=()=>useContext(AuthContext);