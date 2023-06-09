import { FaAws, FaCss3, FaDocker, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiFirebase,
  SiJavascript,
  SiMaterialui,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiGit,
  SiDigitalocean,
  SiGithub,
  SiNpm,
  SiOpenstack,
} from "react-icons/si";
import { BsFillTerminalFill } from "react-icons/bs";
import { TbBrandReactNative } from "react-icons/tb";

const Stack = () => {
  return (
    <div className="max-w-full mt-16 px-6 h-auto  ">
      <h1 className=" mx-1 md:mx-6  py-3 p-0 md:p-3 text-4xl md:text-5xl font-bold font-roboto text-indigo-700">
        Stack
      </h1>

      <div className="w-full mx-auto  py-12 h-auto flex flex-row flex-wrap items-center ">
        <h1 className="mx-auto  p-3 bg-transparent text-center">
          <FaHtml5 color="red" size={55} />
        </h1>
        <h1 className=" mx-auto   p-3 bg-transparent text-center">
          <FaCss3 color="blue" size={55} />
        </h1>
        <h1 className=" mx-auto   p-3 bg-transparent text-center">
          <SiJavascript color="#ffcc00" size={55} />
        </h1>
        <h1 className=" mx-auto  p-3 bg-transparent text-center">
          <SiTypescript color="royalblue" size={55} />
        </h1>
        <h1 className=" mx-auto  p-3 bg-transparent text-center">
          <FaNodeJs color="green" size={55} />
        </h1>
        <h1 className=" mx-auto  p-3 bg-transparent text-center">
          <FaReact color="dodgerblue" size={55} />
        </h1>
        <h1 className=" mx-auto  p-3 bg-transparent text-center">
          <SiVuedotjs color="#009933" size={55} />
        </h1>
        <h1 className=" mx-auto  p-3 bg-transparent text-center">
          <SiNestjs color="#c40840" size={55} />
        </h1>
        <h1 className=" mx-auto  p-3 bg-transparent text-center">
          <SiRedux color="rebeccapurple" size={55} />
        </h1>
        <h1 className=" mx-auto  p-3 bg-transparent text-center">
          <SiMaterialui color="rgb(0, 191, 255)" size={55} />
        </h1>
        <h1 className=" mx-auto  p-3 bg-transparent text-center">
          <SiTailwindcss color="#00bfff" size={55} />
        </h1>

        <h1 className=" mx-auto  p-3 bg-transparent text-center">
          <BsFillTerminalFill color="black" size={55} />
        </h1>
        <h1 className=" mx-auto  p-3 bg-transparent text-center">
          <SiNpm color="#c40840" size={55} />
        </h1>
        <h1 className=" mx-auto  p-3 bg-transparent text-center">
          <TbBrandReactNative color="blue" size={55} />
        </h1>
        <h1 className=" mx-auto  p-3 bg-transparent text-center">
          <SiMongodb color="#009933" size={55} />
        </h1>
        <h1 className=" mx-auto  p-3 bg-transparent text-center">
          <SiMysql color="#3366ff" size={55} />
        </h1>
        <h1 className=" mx-auto  p-3 bg-transparent text-center">
          <SiGit color="red" size={55} />
        </h1>
        <h1 className=" mx-auto  p-3 bg-transparent text-center">
          <SiGithub color="black" size={55} />
        </h1>
        <h1 className=" mx-auto  p-3 bg-transparent text-center">
          <FaDocker color="#3366ff" size={55} />
        </h1>
        <h1 className=" mx-auto  p-3 bg-transparent text-center">
          <SiFirebase color="#ff9900" size={55} />
        </h1>
        <h1 className=" mx-auto  p-3 bg-transparent text-center">
          <SiDigitalocean color="#3366ff" size={55} />
        </h1>
        <h1 className=" mx-auto  p-3 bg-transparent text-center">
          <SiOpenstack color="red" size={55} />
        </h1>
        <h1 className=" mx-auto  p-3 bg-transparent text-center">
          <FaAws color="#00001a" size={55} />
        </h1>
      </div>
    </div>
  );
};

export default Stack;
