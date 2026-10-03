import { cookies } from 'next/headers';
import React from 'react';

 export const Session =async () => {
    const cookieStore=await cookies()
try {
        const res=await fetch("http://localhost:5000/api/auth/get-session",{
        headers:{
           cookie:cookieStore.toString()
        },
        cache:"no-cache"
    });
    
    const session=await res.json()
    if(session==null){
        return {data:null,message:"No session found"}
    }
    return {data:session,error:null}
} catch (error) {
  return {data:null,message:'something went wrong.....'}
}



}