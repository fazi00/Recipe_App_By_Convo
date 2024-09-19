import { TiTick } from "react-icons/ti";
import recipeImage from "../assets/recipe-image.png";

import "../styles/recipedetail.css";
const RecipeDetailPage = () => {
  return (
    <section className="recipe-section">
      <div className="recipe-detail-container">
        <div className="recipe-details">
          <h2>Recipe Title</h2>
          <span>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus ac
            turpis blandit ipsum, diam, nisl feugiat ipsum. Et aliquam tempor
            suspendisse morbi quis. Nascetur etiam donec tellus purus amet, amet
            dis posuere orci. Quam fermentum integer enim arcu gravida feugiat.
            Orci, neque, purus dolor risus leo. Ut vel, velit morbi mollis.
            Amet, leo, vitae bibendum sed pellentesque.
          </span>
        </div>

        <div className="recipe-list">
          <h2>Ingredients</h2>
          <ul>
            <li>
              <span>
                <TiTick />
              </span>
              2 Petites aubergines
            </li>
            <li>
              <span>
                <TiTick />
              </span>
              2 Petites aubergines
            </li>
            <li>
              <span>
                <TiTick />
              </span>
              2 Petites aubergines
            </li>
            <li>
              <span>
                <TiTick />
              </span>
              2 Petites aubergines
            </li>
            <li>
              <span>
                <TiTick />
              </span>
              2 Petites aubergines
            </li>
            <li>
              <span>
                <TiTick />
              </span>
              2 Petites aubergines
            </li>
          </ul>
        </div>
      </div>
      <div className="image-container">
        <div className="image-with-shadow">
          <img src={recipeImage} alt="Image with shadow" />
        </div>
        <div className="image-opacity">
          <img src={recipeImage} alt="Image with opacity" />
        </div>
      </div>
    </section>
  );
};

export default RecipeDetailPage;
