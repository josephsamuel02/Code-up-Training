import { Route, Routes } from "react-router-dom";
import Nav from "./modules/public/components/nav";
import LandingPage from "./modules/public/pages/landingPage";
import ROUTES from "./modules/public/public.routes";
import ApplicationForm from "./modules/public/components/applicationForm";
const Router = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route path={ROUTES.HOME} element={<LandingPage />} />
        <Route path={ROUTES.APPLY} element={<ApplicationForm />} />
        <Route
          path={"*"}
          element={
            <h1 className=" mx-auto my-40 items-center text-center text-red-600">
              NO Page Here
            </h1>
          }
        />
      </Routes>
    </>
  );
};

export default Router;
