import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
  <Navbar />
  <div className="flex-1">
    <Outlet />
  </div>
  <Footer />
</div>
  );
}