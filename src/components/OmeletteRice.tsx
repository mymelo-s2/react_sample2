import { Link } from "react-router-dom";
import "../css/main.css";
import "../css/recipe.css";
import { ReactComponent as Cooking } from "../img/cooking.svg";

export default function OmeletteRice() {
  return (
    <div className="main">
      <div className="main_header" id="header">
        React Sample
      </div>
      <div className="main_menu">
        <div className="sidebar">
          <div>
            <Link to="/recipe" className="menu">
              <Cooking
                style={{
                  width: "clamp(5px, 2.9vw, 20px)",
                  height: "clamp(5px, 2.9vw, 20px)"
                }}
                className="Home"
              />
              Back
            </Link>
          </div>
        </div>
        <div className="content">
          <div className="recipe">
            <h2>Recipe</h2>
            <div className="contentflex">
              <div className="ingredient">
                <h2>Ingredient</h2>
              </div>
              <div className="directions">
                <h2>Directions</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
