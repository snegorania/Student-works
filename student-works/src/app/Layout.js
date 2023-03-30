import { Outlet } from "react-router";
import NavigationBar from "./NavigationBar";
import { ListGroup, ListGroupItem } from "reactstrap";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function Layout() {
  return (
    <>
      <NavigationBar />
      <div className="bg-info sidebar">
        <ListGroup className="list">
          <ListGroupItem color="info">Students</ListGroupItem>
          <ListGroupItem color="info">Groups</ListGroupItem>
          <ListGroupItem color="info">Topics</ListGroupItem>
        </ListGroup>
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
