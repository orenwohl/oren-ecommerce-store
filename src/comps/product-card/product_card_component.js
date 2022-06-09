import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles.js";

import { useContext } from "react";
import { CartContext } from "../../context/cart_context";
import Button from "../button/button_component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={name} />

      <Footer>
        <Name>{name}</Name>
        <Price>{price}$</Price>
      </Footer>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to card
      </Button>
    </ProductCartContainer>
  );
};
export default ProductCard;
