import React, { useState } from "react";
import axios from "axios";
function App() {
  const[excuse,setExcuse] =useState("I drove to the previous employer yesterday.")
  const fetchData =async(reason)=>{
    const {data} = await axios.get(`https://excuser-three.vercel.app/v1/excuse/${reason}`)
    setExcuse(data[0].excuse);

   


    
  }

  return (
    <div className="flex h-screen w-screen  justify-center items-center flex-col  gap-8">
      <div className="">
        <h1 className="text-3xl text-green-900 font-bold"> GENARATE AN EXCUSE</h1>
      </div>
 
      <div className="flex flex-col items-center gap-4 ">
      <button onClick={()=>{fetchData("funny")}} className=" px-10 py-4 bg-red-400 rounded-full">funny</button>
    <button onClick={()=>{fetchData("office")}}className=" px-20 py-4 bg-green-400 rounded-full">office</button>
    <button onClick={()=>{fetchData("office")}}className=" px-20 py-4 bg-yellow-400 rounded-full">developers</button>
      </div>
 

<div>
<h1 className="text-3xl text-orange-700 font-bold">{excuse}</h1>
</div>
   
   
      
    
    </div>

  );
}

export default App;
