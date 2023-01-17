import { Link } from "react-router-dom";
import { ReactComponent as Cooking } from "../img/cooking.svg";
import "../css/recipe.css";

export default function Recipe() {
  return (
    <div className="recipe">
      <h2>Recipe</h2>
      <Link to="/omeletterice" className="menu">
        <Cooking
          style={{
            width: "clamp(5px, 2.9vw, 20px)",
            height: "clamp(5px, 2.9vw, 20px)"
          }}
          className="svg"
        />
        OmeletteRice
      </Link>
    </div>
  );
}
