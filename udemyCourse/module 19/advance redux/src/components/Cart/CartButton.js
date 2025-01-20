import classes from './CartButton.module.css';

import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';



const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartReducer)
  const totalItems = cartData.length;
  const cartToggleHandler = () => {
    console.log("Clicked")
    dispatch(uiActions.toggle());
  }
  return (
    <button onClick={cartToggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
