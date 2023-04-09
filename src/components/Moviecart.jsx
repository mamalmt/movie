import React from "react";
import { Link } from "react-router-dom";

function Moviecart({ id, image, imdbRating, year, title, rank }) {
  return (
    <>
      <div className="  w-[220px] h-[400px]  flex flex-col   justify-center  items-center gap-3  bg-[#00000038]  pt-4  drop-shadow-sm backdrop-blur-sm  rounded-2xl">
        <img src={image} alt="" className="w-[150px] h-[160px]  " />
        <div className="flex  justify-between items-center gap-40">
          <p className="text-[#ff0000be]  font-ShantellSans font-bold  text-sm ">
            {imdbRating}
          </p>
          <p className="text-[#ff1111]  font-ShantellSans font-bold  text-sm ">
            {year}
          </p>
        </div>
        <h1 className=" text-[#000000] font-ShantellSans font-bold text-center text-xl">
          <Link to={`/movies/${id}`}>{title}</Link>
        </h1>
        <button className="  w-8 h-7 bg-[#000000]  text-[#ffffff] font-ShantellSans  font-medium   rounded-full text-center">
          {rank}
        </button>
      </div>
    </>
  );
}

export default Moviecart;
