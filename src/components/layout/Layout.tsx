import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export function Layout() {
  return (
    <div className="flex-row content-center">
      <Navbar />
      <Outlet />
    </div>
  );
}