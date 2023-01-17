import { useNavigate } from "react-router-dom";
import "../css/homemain.css";
import { ReactComponent as User } from "../img/user.svg";
import { ReactComponent as Calendar } from "../img/calendar.svg";
import { ReactComponent as Money } from "../img/money.svg";
import { ReactComponent as Memo } from "../img/memo.svg";
import { ReactComponent as Cooking } from "../img/cooking.svg";
import { ReactComponent as Nail } from "../img/nail.svg";
import { ReactComponent as Chocolate } from "../img/chocolate.svg";
import { ReactComponent as Heart } from "../img/heart.svg";

export default function Home() {
  const navigate = useNavigate();
  const movePage = (icon: string) => {
    switch (icon) {
      case "user":
        navigate("/user");
        break;
      case "calendar":
        navigate("/schedule");
        break;
      case "money":
        navigate("/money");
        break;
      case "memo":
        navigate("/memo");
        break;
      case "cooking":
        navigate("/recipe");
        break;
      case "nail":
        navigate("/beauty");
        break;
      case "chocolate":
        navigate("/chocolate")
        break;
      default:
        navigate("memorial")
        break;
    }
  };
  return (
    <div className="home">
      <div className="flex">
        <div className="selectmenu" onClick={() => movePage("user")}>
          <User
            style={{
              width: "150%",
              height: "150%"
            }}
          />
        </div>
        <div className="selectmenu" onClick={() => movePage("calendar")}>
          <Calendar
            style={{
              width: "150%",
              height: "150%"
            }}
          />
        </div>
        <div className="selectmenu" onClick={() => movePage("money")}>
          <Money
            style={{
              width: "150%",
              height: "150%"
            }}
          />
        </div>
        <div className="selectmenu" onClick={() => movePage("memo")}>
          <Memo
            style={{
              width: "150%",
              height: "150%"
            }}
          />
        </div>
      </div>
      <div className="flex">
        <div className="selectmenuW" onClick={() => movePage("user")}>
          User
        </div>
        <div className="selectmenuW" onClick={() => movePage("calendar")}>
          Schedule
        </div>
        <div className="selectmenuW" onClick={() => movePage("money")}>
          Money
        </div>
        <div className="selectmenuW" onClick={() => movePage("memo")}>
          Memo
        </div>
      </div>
      <div className="flex">
        <div className="selectmenu" onClick={() => movePage("cooking")}>
          <Cooking
            style={{
              width: "150%",
              height: "150%"
            }}
          />
        </div>
        <div className="selectmenu" onClick={() => movePage("nail")}>
          <Nail
            style={{
              width: "150%",
              height: "150%"
            }}
          />
        </div>
        <div className="selectmenu" onClick={() => movePage("chocolate")}>
          <Chocolate
            style={{
              width: "150%",
              height: "150%"
            }}
          />
        </div>
        <div className="selectmenu" onClick={() => movePage("heart")}>
          <Heart
            style={{
              width: "150%",
              height: "150%"
            }}
          />
        </div>
      </div>
      <div className="flex">
        <div className="selectmenuW" onClick={() => movePage("cooking")}>
          Resipe
        </div>
        <div className="selectmenuW" onClick={() => movePage("nail")}>
          Beauty
        </div>
        <div className="selectmenuW" onClick={() => movePage("chocolate")}>
          Chocolate
        </div>
        <div className="selectmenuW" onClick={() => movePage("heart")}>
          Memorial
        </div>
      </div>
    </div>
  );
}