import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {

  const cartItems = useSelector((state) => state.cartReducer);

  console.log(cartItems)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <CartItem
              key={item.id+Math.random()}
              item={{
                title: item.item,
                quantity: item.quantity,
                total: item.quantity * item.price,
                price: item.price,
              }}
            />
          ))
        )}
      </ul>
    </Card>
  );
};

export default Cart;
