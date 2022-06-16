import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import {
  selectCartItems,
  selectIsCartOpen,
} from "../../store/cart/cart_selector";
import { isCartOpen } from "../../store/cart/cart_selector";
import { setIsCartOpen } from "../../store/cart/cart_action";

import Button from "../button/button_component";
import CartItem from "../cart-item/cart_item_component";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate(`/checkout`);
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>go to checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
