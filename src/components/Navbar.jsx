// import { useState } from "react";

import { NavLink } from "react-router-dom";
import DarkMode from "./DarkMode";

const Navbar = () => {
    
  return (
    <>
        <nav className={`flex  fixed top-0 w-full justify-between items-center py-2 px-6 border-0 border-b border-gray-400 z-40 bg-[color:var(--background-color)] text-[color:var(--text-color)]`}>
            <div className="flex items-center justify-between w-[400px]">
              <h1 className=" text-xl font-bold ">
                Brand Name
              </h1>
              <div className="">
                <DarkMode />
              </div>
            </div>
            <div className="w-[500px] pr-10">
                <ul className="flex items-center justify-between">
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