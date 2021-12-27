import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faHome } from "@fortawesome/free-solid-svg-icons";

const Banner = ({ title }) => <h1 className="display-1">{title}</h1>;

const NavBar = () => (
  <nav className="navbar fixed-bottom navbar-light bg-light">
    <NavLink to="">
      <FontAwesomeIcon size="lg" icon={faHome} color="darkgrey" />
    </NavLink>
    <NavLink to="games">
      <FontAwesomeIcon size="lg" icon={faCalendarAlt} color="darkgrey" />
    </NavLink>
  </nav>
);

function Layout() {
  return (
    <>
      <div className="container-fluid main_container min-vh-100">
        <header>
          <Banner title={"Northside Youth Soccer League NYSL"} />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <NavBar />
        </footer>
      </div>
    </>
  );
}

export default Layout;
