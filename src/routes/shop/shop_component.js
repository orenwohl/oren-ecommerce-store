import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import CategoriesPreview from "../categories-preview/categories_preview_components";
import Category from "../category/category_component";
import { fetchCategoriesStart } from "../../store/categories/category_action";
import "./shop.style.scss";
const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);
  return (
    <div className="shop-container">
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </div>
  );
};

export default Shop;
