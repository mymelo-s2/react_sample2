import { Outlet } from "react-router-dom";
import "../css/homemain.css";

export default function HomeMain() {
  return (
    <div className="main">
      <div className="main_header" id="header">
        React Sample
      </div>
      <div className="main_menu">
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
