import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import ProductCard from "../product-card/product_card_component";
import Spinner from "../spinner/spinner_component";
import { selectCategoriesIsLoading } from "../../store/categories/category_selector";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category_preview_styls";

const CategoryPreview = ({ title, products }) => {
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryPreviewContainer>
          <h2>
            <Title to={title}>{title.toUpperCase()}</Title>
          </h2>
          <Preview>
            {products
              .filter((_, idx) => idx < 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </Preview>
        </CategoryPreviewContainer>
      )}
    </>
  );
};

export default CategoryPreview;
