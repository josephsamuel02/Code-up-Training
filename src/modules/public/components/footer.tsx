import { useState } from "react";
import { MdCopyright } from "react-icons/md";
const Footer = () => {
  return (
    <div
      id="footer"
      className="max-w-full px-2  md:px-10 py-14 flex flex-col md:flex-row bg-indigo-400 "
    >
      <ul className=" w-auto  md:w-2/6 mx-4 md:mx-auto flex  flex-col px-6">
        <h3 className="text-lg font-bold py-3 text-black">Services</h3>
        <span>website Development</span>
        <span>Mobile Application Development</span>
        <span>website hosting and Management</span>
        <span>Graphic Design</span>
        <span>UI Design</span>
      </ul>

      <ul className=" w-auto  md:w-2/6 mx-4 md:mx-auto flex  flex-col px-6">
        <h3 className=" text-lg font-bold py-3 black">Contact</h3>
        <span> Email: mrsamd02@gmail.com</span>
        <span> Phone: +2349073077717</span>
        <h3 className=" text-lg font-bold py-3 black">Links</h3>
        <a href="#home">Home</a>
        <a href="#footer">Services</a>
        <a href="#about">About us</a>
        <br /> <br /> <br />
        <span className="mx-1 text-base flex flex-row items-center ">
          <MdCopyright size={22} />
          <span className="mx-1 ">
            2023
            {/* Joseph Samuel */}
          </span>
        </span>
      </ul>
    </div>
  );
};

export default Footer;
