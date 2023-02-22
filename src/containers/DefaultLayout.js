import HeaderUser from "./HeaderUser";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import routes from "./../routes";
import FooterUser from "./FooterUser";
const DefaultLayout = () => {
  return (
    <>
      <HeaderUser />
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.component} />
        ))}
      </Routes>
      
      <FooterUser />
    </>
  );
};

export default DefaultLayout;
