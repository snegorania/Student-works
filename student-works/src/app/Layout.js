import { Outlet } from "react-router";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import "./layout.css";

function Layout() {
  return (
    <>
      <NavigationBar />
      {/*<aside className="bg-info sidebar">
        <ListGroup className="list">
          <ListGroupItem color="info">Students</ListGroupItem>
          <ListGroupItem color="info">Groups</ListGroupItem>
          <ListGroupItem color="info">Topics</ListGroupItem>
        </ListGroup>
  </aside>*/}
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
