import ROUTES from "../public.routes";

const Manifesto = () => {
  return (
    <>
      <div className="mx-auto mt-72 mb-32 pt-52 pb-10 md:py-28 w-full h-auto flex flex-row  my-6 px-6 bg-Codephoto bg-cover bg-no-repeat ">
        <div className="left w-full md:w-1/2 m-0 h-full flex">
          <div className="w-full h-full md:h-11/12 m-auto p-6 rounded-lg  bg-indigo-800 backdrop-blur-sm bg-opacity-40">
            <p className="text-white   text-4xl font-base leading-tight font-bold">
              Start Your journey from a beginner to a professional
              <span className="text-violet-300"> Developer</span>.
              <br />
              Don't miss out on this exciting opportunity.
            </p>
          </div>
        </div>
        <div className="right w-0 md:w-1/2 m-auto h-auto item-right "></div>
      </div>
      <a
        href={ROUTES.APPLY}
        className=" mx-6 mt-3 py-4 px-12 bg-indigo-700  transition-all hover:bg-gradient-to-r from-violet-700 rounded-md text-2xl text-white  font-md"
      >
        Register now
      </a>
    </>
  );
};

export default Manifesto;
