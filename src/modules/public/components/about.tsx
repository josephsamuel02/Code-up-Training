import { SiGithub, SiLinkedin } from "react-icons/si";
import ROUTES from "../public.routes";

const About = (param: { setShowForm: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { setShowForm } = param;
  return (
    <>
      <div id="about" className=" max-w-full mx-0 my-6 px-3 py-3 items-center">
        <h2 className=" mx-6 py-8 text-3xl md:text-4xl   text-indigo-700 font-courgette font-bold">
          About this program
        </h2>

        <div className="mx-auto md:mx-auto px-6 py-12 w-full h-auto flex flex-col md:flex-row rounded border items-center border-slate-300 border-lg">
          <img
            src="img/planet.png"
            alt="image"
            className="m-3 px-0 w-52 h-52 md:w-64 md:h-64 object-cover rounded-full"
          />

          <div className="mx-auto md:mx-12 px-2 md:px-6 py-12 w-full flex flex-col items-center ">
            <p className=" px-0 md:px-6  pt-6 md:py-auto text-center md:text-left text-xl text-black ">
              This is a web development training program that will take your coding abilities
              to the next level. This program is packed with practical knowledge and expert
              insights that will help you build cutting-edge websites and web applications.
              Don't miss out on this exciting opportunity to boost your career in the dynamic
              field of web development!
            </p>
          </div>
        </div>
      </div>
      <a
        onClick={() => setShowForm(true)}
        className="mx-auto ml-10 mt-72 w-auto md:w-56 text-center py-3 px-8 bg-indigo-700 transition-all hover:bg-gradient-to-r from-blue-600 rounded text-xl text-white  font-md cursor-pointer"
      >
        Get Started
      </a>
    </>
  );
};

export default About;
