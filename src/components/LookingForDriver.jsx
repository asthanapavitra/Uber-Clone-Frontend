import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const LookingForDriver = (props) => {
  
  useGSAP(function () {
    if (!props.driverFound) {
      gsap.to(".lookingDriver", {
        duration: 4,
        width:"100%",
        repeat:-1

      });
    }
  }, [props.driverFound]);
  return (
    <div>
      <h5 className="w-full text-center absolute top-2">
        <i
          onClick={() => {
            props.setLookingForDriverPanel(false);
          }}
          className="ri-arrow-down-wide-line text-gray-300  text-3xl"
        ></i>
      </h5>
      <div className="flex flex-col  justify-center p-5">
        <h4 className="text-2xl text-center font-bold mb-2">
          Looking for nearby drivers
        </h4>
        <div className="w-full h-1 mb-8 ">
          <div className="lookingDriver bg-blue-400 h-full w-0"></div>
        </div>
        <img
          className="h-25 w-40 self-center "
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <div className="flex flex-col gap-3 mt-4 mb-4">
          <div className="flex items-center justify-start gap-3 border-b-4 border-gray-300 py-3 ">
            <h4>
              <i class="text-lg ri-map-pin-4-fill"></i>
            </h4>
            <div>
              <h5 className="text-xl font-semibold">512/11-A</h5>
              <p className="text-base text-gray-500 -mt-1">Sector-1 Bisrakh</p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-3 border-b-4 border-gray-300 py-3  ">
            <h4>
              <i class="text-lg ri-square-fill"></i>
            </h4>
            <div>
              <h5 className="text-xl font-semibold">514/19-D</h5>
              <p className="text-base text-gray-500 -mt-1">Sector-22,Noida</p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-3  py-3 ">
            <h4>
              <i class="text-lg ri-currency-fill"></i>
            </h4>
            <div>
              <h5 className="text-xl font-semibold">₹193.15</h5>
              <p className="text-base text-gray-500 -mt-1">Cash Cash</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default LookingForDriver;
