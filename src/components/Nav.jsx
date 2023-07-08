import { useState } from "react";
import { Link,useLocation } from "react-router-dom";


function Nav() {
const[color,setcolor] =useState("#000000c9");
const location= useLocation();

  return (
    <>
      <div className="  absolute  container  mx-auto  pt-8  ">
        <nav className="flex justify-start  items-center   gap-24 w-full">
          <div className="font-black text-2xl text-teal-400">
            <img src={require("../assets/Logo.png")} alt="" />
          </div>
          <div className=" ">
            <ul className="flex  gap-16 text-xl font-medium text-rose-500 ">
              <li className="font-ShantellSans font-black text-3xl text-[#000000c9]">
                <button >
                  <Link to="/" style={{color:location.pathname === '/' ? '#ff1111':'#000000c9'}}>Home</Link>
                </button>
              </li>
              <li className="font-ShantellSans font-black text-3xl   text-[#000000c9]">
                <Link to="/about" style={{color:location.pathname === '/about' ? '#ff1111':'#000000c9'}} >About</Link>
              </li>
              <li className="font-ShantellSans font-black text-3xl  text-[#000000c9]">
                <button >
                  <Link to="/movies"  style={{color:location.pathname === '/movies' ? '#ff1111':'#000000c9'}}>movies</Link>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
