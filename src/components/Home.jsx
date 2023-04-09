import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/Bg.png";
import movimg from "../assets/movimag.jpg";
function Home() {
  return (
    <div
      className=" flex flex-row items-end gap-9  w-[100%]  h-[100vh] p-9  bg-no-repeat  bg-cover    "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container flex justify-start gap-11 items-end ">
        <div className="  w-[525px] h-[500px]  flex flex-col justify-center  items-center  gap-5 bg-[#00000061]   drop-shadow-2xl backdrop-blur-[1px]  rounded-2xl ">
          <img
            src={movimg}
            className="w-[450px] h-[220px] rounded-2xl"
            alt=""
          />
          <h1 className="text-white text-center text-4xl  font-ShantellSans font-extrabold ">
            Top 250 movies
          </h1>
          <p className="text-[#d5c9c9] text-center text-sm font-ShantellSans font-bold ">
            some or rity functions in 2022, according to the Foundry.s you want
            from a managed security services provider MSSP.
          </p>

          <button className="w-[200px]  h-[63px] ml-7 text-[#FFC74D]  text-xl font-bold  font-ShantellSans   border-4 border-[#d5c9c9] rounded-2xl rounded-tl-md ">
            <Link to="/Movies">Read More</Link>
          </button>
        </div>
        <div className="">
          <button className="w-[125px]  h-[63px] ml-7 bg-[#F63B3B] text-red-50 text-xl font-ShantellSans   font-bold    rounded-2xl  ">
            <Link to="/login">Log in</Link>
          </button>
          <button className="w-[150px]  h-[63px] ml-7 bg-[#d5c9c9] text-[#F63B3B]  text-xl font-ShantellSans  font-bold    rounded-2xl  ">
            Sing Up
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
