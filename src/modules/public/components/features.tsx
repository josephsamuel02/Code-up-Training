const Features = () => {
  return (
    <div id="features" className=" max-w-full mt-20 py-6 flex flex-row flex-wrap items-center">
      <div className=" mx-auto my-10 p-1 py-12 w-3/5  md:w-1/5 flex flex-col bg-white rounded-md shadow hover:shadow-lg">
        <img src="img/66.svg" alt="vite" className="m-auto p-4 w-40 h-40" />
        <p className="mx-auto px-10 md:px-1 lg:px-10 text-lg text-center font-bold font-roboto text-indigo-700">
          Learn the core principles of web developments.
        </p>
      </div>
      <div className=" mx-auto my-10 p-1 py-12 w-3/5  md:w-1/5 flex flex-col bg-white rounded-md shadow hover:shadow-lg">
        <img src="img/shared_goals.svg" alt="vite" className="m-auto p-4 w-40 h-40" />
        <p className="mx-auto px-10 md:px-1 lg:px-10 text-lg text-center font-bold font-roboto text-indigo-700">
          We keep it exciting and simple.
        </p>
      </div>
      <div className=" mx-auto my-10 p-1 py-12 w-3/5  md:w-1/5 flex flex-col bg-white rounded-md shadow hover:shadow-lg">
        <img src="img/adventure.svg" alt="vite" className="m-auto p-4 w-40 h-40" />
        <p className="mx-auto px-10 md:px-1 lg:px-10 text-lg text-center font-bold font-roboto text-indigo-700">
          Keep up with the latest trend and tools of software development.
        </p>
      </div>
      <div className=" mx-auto my-10 p-1 py-12 w-3/5  md:w-1/5 flex flex-col bg-white rounded-md shadow hover:shadow-lg">
        <img src="img/27.svg" alt="vite" className="m-auto p-4 w-40 h-40" />
        <p className="mx-auto px-10 md:px-1 lg:px-10 text-lg text-center font-bold font-roboto text-indigo-700">
          Start building your own projects in no time.
        </p>
      </div>
    </div>
  );
};

export default Features;
