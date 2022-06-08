import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import CategoryPreview from "../../comps/category-preview/category-preview";

import { CategoriesContext } from "../../context/categories_context";
import CategoriesPreview from "../categories-preview/categories_preview_components";
import Category from "../category/category_component";

import "./shop_styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
