import { Outlet } from "react-router";
import NavigationBar from "./NavigationBar";
import { ListGroup, ListGroupItem } from "reactstrap";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function Layout() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <aside className="bg-info sidebar">
        <ListGroup className="list">
          <ListGroupItem color="info">Students</ListGroupItem>
          <ListGroupItem color="info">Groups</ListGroupItem>
          <ListGroupItem color="info">Topics</ListGroupItem>
        </ListGroup>
      </aside>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
