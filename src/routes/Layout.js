import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faHome } from "@fortawesome/free-solid-svg-icons";
import logo from "../logo76.png";
import {
  signInWithGoogle,
  signOut,
  useUserState,
} from "../utilities/firebase.js";

const SignInButton = () => (
  <button
    className="btn btn-secondary btn-sm"
    onClick={() => signInWithGoogle()}
  >
    Sign In
  </button>
);

const SignOuButton = () => (
  <button className="btn btn-secondary btn-sm" onClick={() => signOut()}>
    Sign Out
  </button>
);

const Banner = ({ title }) => {
  const [user] = useUserState();
  return(
    <div className="d-flex mt-2">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <p className="display-4 text-center">{title}</p>
      </div>
      <div>
        {user ? <SignOuButton /> : <SignInButton />} 
      </div>
    </div>
  );
}

const NavBar = () => (
  <nav className="navbar navbar-light bg-light">
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
          <Banner title={"Northside Youth Soccer League"} />
        </header>
        <main className="pb-4">
          <Outlet />
        </main>
        <footer className="fixed-bottom">
          <NavBar />
        </footer>
      </div>
    </>
  );
}

export default Layout;
