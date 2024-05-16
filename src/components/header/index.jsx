import { useMemo, useState } from "react";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

import { useSelector, useDispatch } from 'react-redux';
// import actionTypes from "../../redux/user/action-types";
import { loginUser, logoutUser } from '../../redux/user/actions';



function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  const dispatch = useDispatch();

  // ESTUDAR USEMEMO
  const productsCount = useMemo(() => {
    return products.reduce((acc, curr) => acc + curr.quantity, 0);
  }, [products]);

  const handleLoginClick = () => {
    dispatch(loginUser({name: "Pedro", lastName: "Tintino"}))
  };

  const handleLogoutClick = () => {
    dispatch(logoutUser());
  }

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? ( 
          <div onClick={handleLogoutClick}>Sair</div>
         ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
