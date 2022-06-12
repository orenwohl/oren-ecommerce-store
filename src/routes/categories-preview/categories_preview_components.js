import { Fragment } from "react";
import { useSelector } from "react-redux";

import CategoryPreview from "../../comps/category-preview/category-preview";
import { selectCategoriesMap } from "../../store/categories/category_selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </>
  );
};

export default CategoriesPreview;
