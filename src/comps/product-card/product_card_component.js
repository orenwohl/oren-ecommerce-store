import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles.js";
import { selectCartItems } from "../../store/cart/cart_selector.js";
import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../store/cart/cart_action";
import Button from "../button/button_component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

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
