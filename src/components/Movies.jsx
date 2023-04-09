import Moviecart from "./Moviecart";
import { Link } from "react-router-dom";

function Movies({ movies }) {
  return (
    <>
      <div className="bg-[#FFC74E]  ">
        <div className="container flex justify-end p-11 ">
          <button className="w-[125px]  h-[63px] ml-7 bg-[#F63B3B] text-red-50 font-ShantellSans  text-xl  font-bold    rounded-2xl  ">
            <Link to="/login">Log in</Link>
          </button>
          <button className="w-[150px]  h-[63px] ml-7 bg-[#ffffff] text-[#F63B3B] font-ShantellSans  text-xl font-bold    rounded-2xl  ">
            Sing Up
          </button>
        </div>
        <h1 className="text-white text-center text-5xl mb-64  font-ShantellSans font-extrabold ">
          Top 250 movies
        </h1>
        <div className=" container grid  grid-cols-5  mx-auto   items-center justify-between gap-9  p-9  pt-12   ">
          {movies.map((movie) => {
            return (
              <Moviecart
                id={movie.id}
                image={movie.image}
                imdbRating={movie.imDbRating}
                year={movie.year}
                title={movie.title}
                rank={movie.rank}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Movies;
