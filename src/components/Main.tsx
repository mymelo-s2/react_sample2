import { Link, Outlet } from "react-router-dom";
import "../css/main.css";
import { ReactComponent as Home } from "../img/home.svg";
import { ReactComponent as User } from "../img/user.svg";
import { ReactComponent as Calendar } from "../img/calendar.svg";
import { ReactComponent as Money } from "../img/money.svg";
import { ReactComponent as Memo } from "../img/memo.svg";
import { ReactComponent as Cooking } from "../img/cooking.svg";
import { ReactComponent as Nail } from "../img/nail.svg";
import { ReactComponent as Chocolate } from "../img/chocolate.svg";
import { ReactComponent as Heart } from "../img/heart.svg";

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
              <Home
                style={{
                  width: "clamp(5px, 2.9vw, 20px)",
                  height: "clamp(5px, 2.9vw, 20px)"
                }}
                className="Home"
              />
              HOME
            </Link>
          </div>
          <div>
            <Link to="/user" className="menu">
              <User
                style={{
                  width: "clamp(5px, 2.9vw, 20px)",
                  height: "clamp(5px, 2.9vw, 20px)"
                }}
                className="Home"
              />
              UserInfo
            </Link>
          </div>
          <div>
            <Link to="/schedule" className="menu">
              <Calendar
                style={{
                  width: "clamp(5px, 2.9vw, 20px)",
                  height: "clamp(5px, 2.9vw, 20px)"
                }}
                className="Home"
              />
              Schedule
            </Link>
          </div>
          <div>
            <Link to="/moneymanage" className="menu">
              <Money
                style={{
                  width: "clamp(5px, 2.9vw, 20px)",
                  height: "clamp(5px, 2.9vw, 20px)"
                }}
                className="Home"
              />
              Money
            </Link>
          </div>
          <div>
            <Link to="/memo" className="menu">
              <Memo
                style={{
                  width: "clamp(5px, 2.9vw, 20px)",
                  height: "clamp(5px, 2.9vw, 20px)"
                }}
                className="Home"
              />
              Memo
            </Link>
          </div>
          <div>
            <Link to="/recipe" className="menu">
              <Cooking
                style={{
                  width: "clamp(5px, 2.9vw, 20px)",
                  height: "clamp(5px, 2.9vw, 20px)"
                }}
                className="Home"
              />
              Recipe
            </Link>
          </div>
          <div>
            <Link to="/beauty" className="menu">
              <Nail
                style={{
                  width: "clamp(5px, 2.9vw, 20px)",
                  height: "clamp(5px, 2.9vw, 20px)"
                }}
                className="Home"
              />
              Beauty
            </Link>
          </div>
          <div>
            <Link to="/chocolate" className="menu">
              <Chocolate
                style={{
                  width: "clamp(5px, 2.9vw, 20px)",
                  height: "clamp(5px, 2.9vw, 20px)"
                }}
                className="Home"
              />
              Chocolate
            </Link>
          </div>
          <div>
            <Link to="/memorial" className="menu">
              <Heart
                style={{
                  width: "clamp(5px, 2.9vw, 20px)",
                  height: "clamp(5px, 2.9vw, 20px)"
                }}
                className="Home"
              />
              Memorial
            </Link>
          </div>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
