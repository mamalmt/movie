import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [textColor, setTextColor] = useState("black");
  const handemovcliked = () => {
    if (textColor === "black") {
      setTextColor("red");
    } else {
      setTextColor("black");
    }
  };

  return (
    <>
      <div className="  absolute  container  mx-auto  pt-8  ">
        <nav className="flex justify-start  items-center   gap-24 w-full">
          <div className="font-black text-2xl text-teal-400">
            <img src={require("../assets/Logo.png")} alt="" />
          </div>
          <div className=" ">
            <ul className="flex  gap-16 text-xl font-medium text-rose-500 ">
              <li className="font-ShantellSans font-black text-3xl  text-[#000000c9]">
                <button onClick={handemovcliked} >
                  <Link to="/">Home</Link>
                </button>
              </li>
              <li className="font-ShantellSans font-black text-3xl   text-[#000000c9]">
                <Link to="/about">About</Link>
              </li>
              <li className="font-ShantellSans font-black text-3xl  text-[#000000c9]">
                <button onClick={handemovcliked} style={{ color: textColor }}>
                  <Link to="/movies">movies</Link>
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
