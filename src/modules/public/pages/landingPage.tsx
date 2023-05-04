import { Outlet } from "react-router-dom";
import LandingPageDashBoard from "../components/landing.page.dashBoard";
import Features from "../components/features";
import Stack from "../components/stack";
import Footer from "../components/footer";
import About from "../components/about";
import { SiWhatsapp } from "react-icons/si";
import URLS from "../../../url.links/urls";
import Manifesto from "../components/Manifesto";
const LandingPage = () => {
  return (
    <>
      <LandingPageDashBoard />
      <Manifesto />
      <Features />
      <About />
      <Stack />
      <Footer />

      <a
        href={URLS.WHATSAPP}
        target="_blank"
        className="mx-auto px-0  fixed right-6 bottom-12 items-center animate-bounce cursor-pointer rounded-full bg-green-500 hover:bg-green-400 "
      >
        <span className=" m-auto animate-bounce">
          <SiWhatsapp size={65} color="white" />
        </span>
      </a>
    </>
  );
};

export default LandingPage;
