import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Single() {
  const [singleMovie, setsingleMovie] = useState([]);
  const { id } = useParams();
  const sendResponsSingle = async () => {
    const sendRespons = await fetch(
      `https://imdb-api.com/en/API/Title/k_c9no9x5w/${id}/FullActor&FullCast`
    );
    const ResponsDate = await sendRespons.json();
    setsingleMovie(ResponsDate);
    console(ResponsDate);
  };

  useEffect(() => {
    sendResponsSingle();
  }, []);

  return (
    <div className=" w-[100%]  bg-[#FFC74E]   bg-bottom  h-[100vh]  flex flex-col    gap-12     p-9  ">
      <div className="flex justify-end pt-4">
        <button className="w-[125px]  h-[63px] ml-7 bg-[#F63B3B] text-red-50 font-ShantellSans  text-xl  font-bold    rounded-2xl  ">
          <Link to="/login">Log in</Link>
        </button>
        <button className="w-[150px]  h-[63px] ml-7 bg-[#ffffff] text-[#F63B3B] font-ShantellSans  text-xl font-bold    rounded-2xl  ">
          Sing Up
        </button>
      </div>
    
      <div className=" flex justify-between items-center  p-5">
        <div className="flex flex-col w-[650px]  gap-6 justify-end ml-12  mb-28 ">
          <h1 className="text-[#000000]  font-ShantellSans font-extrabold  text-6xl">
            {singleMovie.title}
          </h1>
          <br />
          <p className="text-[#ffffffda] font-ShantellSans font-bold  text-lg">
            {singleMovie.plot}
          </p>
        </div>
        <div className="flex flex-col w-[550px]  gap-6 justify-center  pt-5 ">
          <div className="">
            <img
              src={singleMovie.image}
              className="w-[500px] h-[400px] rounded-md"
              alt=""
            />
          </div>
          <div className="">
            <ul className=" flex w-[500px] justify-between text-[#ff1111] text-xl font-bold">
              <li>{singleMovie.releaseDate}</li>
              <li className="text-[#ffffff]"> {singleMovie.imDbRating}</li>
              <li>
                <button className="   h-11     text-[#000000] font-ShantellSans  font-medium   rounded-full text-center">
                  {singleMovie.runtimeStr}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Single;
