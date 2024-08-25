import React from "react"
import dsandev from '../assets/dsandev.png'
export default function Dsandev(){
    return(
        <div className="max-w-[1240px] mx-auto my-10 md:grid grid-cols-2">
            <div className=" col-span-1 md:w-[80%]">
                <img className=" m-auto md:w-full" src= {dsandev} alt=""/>
            </div>

            <div className="px-3 col-span-1 flex flex-col justify-center">
                <h1 className="text-blue-400 font-bold my-3 text-2xl">Learn DSA and DEVELOPMENT</h1>

                <p className="my-2 text-justify text-xl">learn dsa and dev learn dsa and dev learn dsa and dev learn dsa and dev learn dsa and dev learn dsa and dev learn dsa and dev learn dsa and dev.</p>

                <button className="bg-black text-white p-4 rounded-md w-[30%]">Get Started</button>
            </div>

        </div>
    )
}