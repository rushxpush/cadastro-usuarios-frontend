import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="flex-row content-center">
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}