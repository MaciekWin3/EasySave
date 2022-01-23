import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from '../hooks/useLogout';
import logo from "../assets/logo.svg";

export default function Navbar() {

  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center space-between" href="/">
          <img src={logo} style={{maxHeight: "55px"}} alt="logo" />
          <span className="p-3 mb-2">EasySave</span>
        </a>
        <div className="d-flex">
          {!user && (
            <>
              <Link to="/about">
                <button className="btn btn-outline-success rounded-pill mx-2">About</button>
              </Link>
              <Link to="/login">
                <button className="btn btn-outline-success rounded-pill mx-2">Login</button>
              </Link>
              <Link to="/signup">
                <button className="btn btn-outline-success rounded-pill mx-2">Sign up</button>
              </Link>
            </>
          )}
          {user && (
            <>
              <p className="navbar-brand d-flex align-items-center space-between">Hello, {user.displayName}</p>
              <Link to="/signup">
                <button className="btn btn-outline-danger rounded-pill mx-2" onClick={logout}>Logout</button>
              </Link>
            </>
          )}

        </div>
      </div>
    </nav>
  )
}
