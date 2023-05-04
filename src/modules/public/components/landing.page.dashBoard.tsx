import { useState } from "react";
import ROUTES from "../public.routes";

const LandingPageDashBoard = () => {
  return (
    <div id="home" className=" w-full">
      <div className="w-full h-screen mx-auto mt-10  flex flex-col md:flex-row">
        <div className=" left w-full md:w-3/5 h-auto mt-12  md:h-auto mx-0 py-0 items-center flex flex-row">
          <div className="mx-auto mt-8 md:mt-20 px-6 py-12 w-full my-auto">
            <h1 className=" p-0 md:p-3 text-black mx-auto md:m-0 font-bold md:text-left text-left text-5xl md:text-6xl ">
              Web Development
            </h1>
            <h1 className="p-3 pl-2 text-indigo-700 m-0 mt-6 md:mt-0 font-bold md:text-left text-left  text-5xl md:text-6xl ">
              Training Classes
            </h1>
            <p className="p-3 my-12 text-2xl md:text-3xl text-gray-900  font-base ">
              Unlock Your Potential: Enroll in Our Dynamic Web Development Training Today!
            </p>

            <a
              href={ROUTES.APPLY}
              className=" mx-3 md:mx-6 mt-16 py-4 px-12 bg-indigo-700  transition-all hover:bg-gradient-to-r from-violet-700 rounded-lg text-2xl text-white  font-md"
            >
              Apply now
            </a>
          </div>
        </div>
        <div className="right    ">
          <img className=" h-full w-full   object-cover" src="img/posterImage.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LandingPageDashBoard;
