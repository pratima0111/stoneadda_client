import { useState } from "react";
import {
  BrowserRouter as Router,
  NavLink, Link
} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const navigate = useNavigate();

  return (
      // <Router>
        <div className="navbar">
          <div className="leftnavbar">
            <NavLink className="logo" to="/">
              Logo
            </NavLink>
          </div>

          <div className="rnavbar">
            <ul className={click ? "activenavlist" : "navlist"}>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "activelinks" : "links"
                  }
                  onClick={handleClick}
                  to="/Home"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "activelinks" : "links"
                  }
                  onClick={handleClick}
                  to="/WhySell"
                >
                  Why Stoneadda?
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "activelinks" : "links"
                  }
                  onClick={handleClick}
                  to="/HowToSell"
                >
                  How to sell?
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "activelinks" : "links"
                  }
                  onClick={handleClick}
                  to="/Testimonials"
                >
                  Testimonials
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "activelinks" : "links"
                  }
                  onClick={handleClick}
                  to="/faq"
                >
                  FAQs
                </NavLink>
              </li>
            </ul>

            <div className="rightnavbar">
              <button className="signup"  onClick={() => {navigate("/SignUp")}}>
                Sign up
              </button>
            
             <button className="signin" onClick={() => {navigate('/SignIn')}} >
                Sign in
              </button>              

              <div className="menuicon" onClick={handleClick}>
                {click ? (
                  <CloseIcon sx={{ fontSize: 40 }} />
                ) : (
                  <MenuIcon sx={{ fontSize: 40 }} />
                )}
              </div>
            </div>
          </div>
        </div>
      // </Router>
  );
};

export default Navbar;
