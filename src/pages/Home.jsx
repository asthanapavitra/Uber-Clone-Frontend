import React, { useState } from "react";
import {useGSAP} from '@gsap/react'
import { useRef } from "react";
import 'remixicon/fonts/remixicon.css'
import gsap from 'gsap'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRidePanel from "../components/ConfirmRidePanel";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
const Home = () => {
  const [pickup,setPickup]=useState('');
  const [dest, setDest] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const [vehiclePanel,setVehiclePanel]=useState(false);
  const [confirmRidePanel,setConfirmRidePanel]=useState(false);
  const[lookingForDriverPanel,setLookingForDriverPanel]=useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const [driverFound, setDriverFound] = useState(false);
  const submitHandler=(e)=>{
    e.preventDefault();
  }
  const panelOpenRef=useRef(null);
  const waitingForDriverRef=useRef(null);
  const vehiclePanelRef=useRef(null);
  const confirmRidePanelRef=useRef(null);
  const lookingForDriverPanelRef=useRef(null);
  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelOpenRef.current,{
        duration:0.5,
        height:'80%'
      })
      
      
    }
    else{
      gsap.to(panelOpenRef.current,{
        duration:0.5,
        height:'0%'
      })
        
    }
  },[panelOpen])
  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
       
        duration:0.5,
        translateY:'0%'
      })
    }
    else{
      gsap.to(vehiclePanelRef.current,{
        duration:0.5,
        translateY:'100%'
      })
    }
  },[vehiclePanel])
  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current,{
       
        duration:0.5,
        translateY:'0%'
      })
    }
    else{
      gsap.to(confirmRidePanelRef.current,{
        duration:0.5,
        translateY:'100%'
      })
    }
  },[confirmRidePanel])
  useGSAP(function(){
    if(lookingForDriverPanel){
      gsap.to(lookingForDriverPanelRef.current,{
       
        duration:0.5,
        translateY:'0%'
      })
    }
    else{
      gsap.to(lookingForDriverPanelRef.current,{
        duration:0.5,
        translateY:'100%'
      })
    }
  },[lookingForDriverPanel])
  useGSAP(function(){
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current,{
       
        duration:0.5,
        translateY:'0%'
      })
    }
    else{
      gsap.to(waitingForDriverRef.current,{
        duration:0.5,
        translateY:'100%'
      })
    }
  },[waitingForDriver])
  return (
    <div className="h-screen relative overflow-hidden ">
      <img
        className=" w-25 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
        alt=""
      />
      <div >
        <img onClick={()=>{
        setVehiclePanel(false)
      }}
         className="h-screen w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt=""  />
      </div>
      <div className="absolute bottom-0 flex flex-col justify-end w-full h-screen">
        <div className="bg-white px-5 py-8 w-full relative  "> 
          <div className="flex items-center justify-between mr-5">
          <h4 className="text-[1.75rem] font-bold">Find a trip</h4>
          <h5>
           {panelOpen && <i onClick={()=>{
            setPanelOpen(false);
           }}
           className="ri-arrow-down-wide-line  text-3xl"></i>}
          </h5>
          
          </div>
          
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}>
          <div className="absolute top-[45%] left-10 flex flex-col justify-start gap-0">
            <h5><i className="ri-map-pin-4-fill text-md text-black"></i></h5>
            <div className="h-12 ml-[6px] w-[2.5px] bg-gray-700 rounded-full "></div>
            <i className="ri-square-fill text-sm"></i>
            
          </div>
            
            <input value={pickup}
            onClick={()=>{
              setPanelOpen(true);
              console.log(panelOpen)
            }}
             onChange={(e)=>{
              setPickup(e.target.value);
             }}
             className="bg-[#eee] border-yellow-500  rounded-lg px-12 py-3 text-xl w-full mt-5" type="text" name="pickup" placeholder="Add a pickup-location"  />
            <input value={dest}
            onClick={()=>{
              setPanelOpen(true)
            }}
            onChange={(e)=>{
              setDest(e.target.value)
            }} className="bg-[#eee]  rounded-lg px-12 py-4 text-xl w-full mt-3" type="text" name="destination" placeholder="Enter your destination"/>
          </form>
        </div>
        <div ref={panelOpenRef} className="bg-white h-[0%] ">
            <LocationSearchPanel setVehiclePanel={setVehiclePanel} setPanelOpen={setPanelOpen}/>
        </div>
      </div>
      <div ref={vehiclePanelRef} className="fixed bottom-0 bg-white px-4 py-12 z-10 translate-y-full w-full">
            <VehiclePanel setVehiclePanel={setVehiclePanel} setConfirmRidePanel={setConfirmRidePanel}/>
            
      </div>
      <div ref={confirmRidePanelRef} className="fixed bottom-0 bg-white px-4 py-12 z-10 translate-y-full w-full">
          <ConfirmRidePanel setConfirmRidePanel={setConfirmRidePanel} setLookingForDriverPanel={setLookingForDriverPanel}/>
      </div>
      <div ref={lookingForDriverPanelRef} className="fixed bottom-0 bg-white px-4 py-12 z-10 translate-y-full w-full">
          <LookingForDriver setLookingForDriverPanel={setLookingForDriverPanel} driverFound={driverFound}/>
      </div>
      <div ref={waitingForDriverRef} className="fixed bottom-0 bg-white px-4  translate-y-full py-12 z-10  w-full">
          <WaitingForDriver setWaitingForDriver={setWaitingForDriver}/>
      </div>
    </div>
    
  );
};

export default Home;
