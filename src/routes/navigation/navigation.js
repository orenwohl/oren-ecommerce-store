import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import CartIcon from "../../comps/cart-icon/Cart_icon_component";
import CartDropdown from "../../comps/cart-dropdown/cart_dropdown";

import { selectIsCartOpen } from "../../store/cart/cart_selector";
import { selectCurrentUser } from "../../store/user/user_selector";

import { ReactComponent as CrwnLogo } from "../../assets/models-ink.svg";
import { signOutUser } from "../../utils/firebase_utils";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  console.log(currentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  console.log(isCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
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
    </Fragment>
  );
};

export default Navigation;
