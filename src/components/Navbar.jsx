// import { useState } from "react";

import { NavLink } from "react-router-dom";
import DarkMode from "./DarkMode";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";
import SideBar from "./SideBar";

const Navbar = () => {
    
  const [sidebarOpen,setSidebarOpen] = useState(false);
  const sideBarClose = () => setSidebarOpen(false);

  return (
    <>
        <nav className={`flex fixed top-0 3xl:w-[1530px] xl:w-full lg:w-full md:w-full w-full xl:mx-auto justify-between items-center 3xl:py-4 py-2 px-6 md:px-4 border-0 border-b border-gray-400 z-40 bg-[color:var(--background-color)] text-[color:var(--text-color)]`}>
            <div className="flex items-center md:justify-between xl:w-[400px] lg:w-[30%] md:w-[30%] w-full">
              <h1 className=" text-xl 3xl:text-[2rem] 2xl:text-[1.5rem] font-bold ">
                Brand Name
              </h1>
              <div className="ml-10 md:ml-0">
                <DarkMode />
              </div>
              {/* mobile menu */}
              <div className="md:hidden ml-auto relative">
                <RiMenu3Fill 
                  className="text-[1.5rem]"
                  onClick={() => setSidebarOpen(true)}
                  />
              </div>
                <SideBar visible={sidebarOpen} onClose={sideBarClose}/>
            </div>

            <div className="hidden md:inline-block xl:w-[500px] 3xl:w-[50%] 2xl:w-[40%] lg:w-[50%] md:w-[60%]  xl:pr-10">
                <ul className="flex items-center justify-between 3xl:text-[1.5rem] 2xl:text-[1.2rem] md:text-sm">
                {['What we do', 'Who we are','How we give me back','Talk to us'].map((menulinks,index) => {
                    return (
                        <li key={index}>
                            <NavLink to={`#${menulinks.toLowerCase()}`} className="">
                                {menulinks}
                            </NavLink>
                        </li>
                    )
                })}
                </ul>
            </div>
          </nav>
          </>
  )
}

export default Navbar