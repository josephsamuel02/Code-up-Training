import { MdArrowBack, MdKeyboardBackspace } from "react-icons/md";

const ApplicationForm = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-row items-center scrollbar-hide bg-violet-500 bg-opacity-5 backdrop-blur-sm">
        <div
          className="py-3 fixed top-20 left-6 md:left-72 flex flx-row cursor-pointer"
          onClick={() => window.location.reload()}
        >
          <MdKeyboardBackspace size={30} color="black" />
          <h2 className=" mx-auto px-3 text-lg font-bold">Go back</h2>
        </div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScf29eWs_4-Vaj27QCVwlpEG6MbV8hhi5x1J7K_UNNgvIkpLg/viewform?embedded=true"
          width="640"
          height="2113"
          // frameborder="0"
          // marginheight="0"
          // marginwidth="0"
          className=" mx-auto p-1 pt-10 md:p-6 mt-32 bg-white scrollbar-hide rounded-lg border border-gray-200"
        >
          Loading…
        </iframe>
      </div>
      <div
        className="py-3 ml-6 md:ml-20   flex flx-row cursor-pointer"
        onClick={() => window.location.reload()}
      >
        <MdKeyboardBackspace size={30} color="black" />
        <h2 className=" mx-1 px-3 text-lg font-bold">Go back</h2>
      </div>
    </>
  );
};

export default ApplicationForm;
