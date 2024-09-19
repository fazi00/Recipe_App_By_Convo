import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import RecipeDetailPage from "../pages/RecipeDetailPage";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
      </Routes>
    </>
  );
};

export default Router;
