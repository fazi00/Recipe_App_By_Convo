import { Link } from "react-router-dom";
import { LuClock9 } from "react-icons/lu";
import { IoMdStar } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import "../styles/home.css";
import HomeNav from "../components/HomeNavbar/HomeNav";

// Interfaces for the Data that is getting from an API
interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

interface RecipesResponse {
  recipes: Recipe[];
}

const fetchRecipes = async (): Promise<RecipesResponse> => {
  const response = await fetch("https://dummyjson.com/recipes", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data: RecipesResponse = await response.json();
  return data;
};

const Home = () => {
  const { data, error, isLoading } = useQuery<RecipesResponse>({
    queryKey: ["recipes"],
    queryFn: fetchRecipes,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error while fetching the data</div>;

  const recipes = data?.recipes;
  return (
    <>
      {/* Home page Navbar */}
      <section>
        <HomeNav />
      </section>

      <section>
        <div className="container">
          {recipes?.map((recipe: Recipe) => (
            <div className="card" key={recipe.id}>
              <div className="card-image">
                <Link to={`/recipe/${recipe.id}`}>
                  <img src={recipe.image} alt="Recipe Image" width={350} />
                </Link>
              </div>
              <div className="card-content">
                <h4>{recipe.name}</h4>
                <span>Reviews: {recipe.reviewCount}</span>
              </div>
              <div className="card-end">
                <span>
                  <LuClock9 />
                  <h4>30 minutes</h4>
                </span>
                <h4>{recipe.mealType.toLocaleString()}</h4>
              </div>
              <div className="star">
                <span>
                  <IoMdStar />
                </span>
                <span>
                  <IoMdStar />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
