import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
           <nav style={{height:"8vh" ,backgroundColor: "#e3f2fd" }}
        className="navbar navbar-expand-lg navbar-light"       
      >
        <div className="container-fluid">
          <img
            src="https://www.ilpnet.org/wp-content/uploads/2019/06/logo_small.png"
            data-src="https://www.ilpnet.org/wp-content/uploads/2019/06/logo_small.png"
            width="239"
            height="31"
            style={{ maxHeight: "31px", height: "31px", paddingTop:"2vh" }}
            alt="India Literacy Project Logo"
            data-retina_logo_url="https://www.ilpnet.org/wp-content/uploads/2019/06/logo.png"
            className="fusion-sticky-logo ls-is-cached lazyloaded pt-2"
            data-logo-height="31"
            data-logo-width="239"
          />
          <Link to="/login" className="btn btn-outline-primary me-2" style={{borderLeft:"0",borderRight:"0",borderTop:"0"}}>Login</Link>
        </div>
      </nav>
    </>
  );
}
