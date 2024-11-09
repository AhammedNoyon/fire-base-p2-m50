import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = () => {
  return (
    <div className="w-11/12 md:w-3/4 mx-auto">
      {/* Navbar */}
      <Navbar></Navbar>
      {/* dynamic */}
      <Outlet></Outlet>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
