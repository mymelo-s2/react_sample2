import { Link, Outlet } from "react-router-dom";
import "../css/main.css";
import { ReactComponent as Home } from "../img/home.svg";

export default function Main() {
  return (
    <div className="main">
      <div className="main_header" id="header">
        React Sample
      </div>
      <div className="main_menu">
        <div className="sidebar">
          <div>
            <Link to="/" className="menu">
              HOME
              <Home
                style={{
                  width: "clamp(5px, 2.9vw, 20px)",
                  height: "clamp(5px, 2.9vw, 20px)"
                }}
                className="Home"
              />
            </Link>
          </div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
