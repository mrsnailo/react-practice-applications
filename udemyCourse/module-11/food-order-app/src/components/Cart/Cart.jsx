import Modal from "../UI/Modal";
import classes from './Cart.module.css';


const Cart = () => {
  const cartItems = (
    <ul>
      {[{ id: "1", name: "sushi", amount: 2, price: 120 }].map((item) => (
        <li key={Math.random}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
