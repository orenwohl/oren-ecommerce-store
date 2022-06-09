import { useContext } from "react";

import { CartContext } from "../../context/cart_context";
import { useNavigate } from "react-router-dom";

import Button from "../button/button_component";
import CartItem from "../cart-item/cart_item_component";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen, isCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHanker = () => {
    navigate(`/checkout`);
    setIsCartOpen(!isCartOpen);
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
      <Button onClick={goToCheckoutHanker}>go to checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
