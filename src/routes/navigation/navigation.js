import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { ReactComponent as Logo } from "../../assets/models-ink.svg";
import { UserContext } from "../../context/user_context";
import { CartContext } from "../../context/cart_context";

import { signOutUser } from "../../utils/firebase_utils";
import CartDropdown from "../../comps/cart-dropdown/cart_dropdown";
import CartIcon from "../../comps/cart-icon/Cart_icon_component";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles.js";
const NavBar = () => {
  const { currentUser } = useContext(UserContext);

  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};
export default NavBar;
