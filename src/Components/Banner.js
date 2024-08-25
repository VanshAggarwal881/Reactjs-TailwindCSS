import React from "react";
import { ReactTyped } from "react-typed";
export default function Banner(){
    return(
        <div className="bg-sky-500 w-full py-[30px] md:py-6">
            <div className="max-w-[1240px] py-[80px] mx-auto text-center font-bold">
               <div className="text-xl md:text-3xl md:p-[20px]">
                Learn With Me
               </div>

               <div className="text-white text-5xl mt-5 md:text-[80px] md:p-[20px]">
                Grow With Me
               </div>

               <div className="text-[20px] mt-5 md:text-[50px] md:p-[20px] text-white">
                Learn
                <ReactTyped className="ml-3"
      strings={[
        "DSA",
        "DEVELOPMENT",
        "DSA + DEVELOPMENT",
      ]}
      typeSpeed={40}
      backSpeed={50}
      
      loop
    >
      
    </ReactTyped>
               </div>
               <button className="bg-black text-white mt-2  md:text-2xl p-4 rounded-md md:w-[20%]">Get Started</button>
            </div>


        </div>
    )
}