import React , {useState} from "react";
const Header = ()=>{
    const [toggle , setToggle] = useState(false)
    return(
        <div className="bg-sky-500 p-4  fixed top-0 left-0 right-0">

            <div className="max-w-[1240px] items-center  flex py-2 justify-between  mx-auto">

                <div className="text-3xl font-bold">
                    1Tech
                </div>

                {
                   toggle ?
                   <i onClick={() => setToggle(!toggle)} className=" text-white block md:hidden text-2xl fa-solid fa-xmark cursor-pointer"></i>
                   :
                   <i onClick={() => setToggle(!toggle)} className=" text-white block md:hidden text-2xl fa-solid fa-bars cursor-pointer"></i>


                }

                

               

                <ul className=" hidden md:flex text-white gap-7">
                    <li>Home</li>
                    <li>Company</li>
                    <li>Resources</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                {/* copy of menu for responsiveness */}

                <ul className={` duration-300 md:hidden  fixed text-white bg-black gap-7 ${toggle? 'left-[0]' : 'left-[-100%]'} top-[84px] w-full h-screen`}>
                    <li className="p-4">Home</li>
                    <li className="p-4">Company</li>
                    <li className="p-4">Resources</li>
                    <li className="p-4">About</li>
                    <li className="p-4">Contact</li>
                </ul> 

            </div>
            
        </div>
    )
}

export default Header;