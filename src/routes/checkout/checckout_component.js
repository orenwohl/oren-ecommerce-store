import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart_selector";
import CheckOutItem from "../../comps/checkout-item/checkout_Item_component";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <h1>I am the checkout page</h1>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          . <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => {
        return <CheckOutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <Total>total :{cartTotal}$</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
