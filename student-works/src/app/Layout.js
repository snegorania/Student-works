import { Outlet } from "react-router";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import "./layout.css";

function Layout() {
  return (
    <>
      <NavigationBar />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
