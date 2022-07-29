import { Link, useLocation } from "react-router-dom";
import image from "../assets/logo/new_log.png";
export default function Navbar(props) {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <nav
        style={{ height: "8vh", backgroundColor: "#11a7f3" }}
        className="navbar navbar-expand-lg navbar-light"
      >
        <div className="container-fluid">
          <b style={{ color: "white" }}>
            <img src={image} alt="logo" className="logoNav" />
          </b>
          <div>
            {location.pathname !== "/login" && (
              <Link
                to="/login"
                className="btn me-2"
                style={{
                  //borderLeft:"0",borderRight:"0",borderTop:"0",
                  background: "#ffbc53",
                  color: "white",
                }}
              >
                <b>Login</b>
              </Link>
            )}
            {location.pathname !== "/register" && (
              <Link
                to="/register"
                className="btn me-2"
                style={{
                  //borderLeft:"0",borderRight:"0",borderTop:"0"
                  background: "#ffbc53",
                  color: "white",
                }}
              >
                <b>Register</b>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
