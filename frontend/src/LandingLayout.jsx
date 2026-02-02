import { Outlet } from "react-router";
import Navber from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export default function Dashboard() {
  return (
    <>
      <Navber></Navber>
      <Outlet></Outlet>
      <div className="mt-5">
        <hr />
        <Footer></Footer>
      </div>
    </>
  );
}