import { useSelector, useDispatch } from "react-redux";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart_selector";
import { setIsCartOpen } from "../../store/cart/cart_action";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartIconContainer, ItemCount } from "./cart-icon.style";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
