import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect, useRef } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/Notification/Notification";
import { sendCartData, getCartData } from "./store/cart-action";
import { uiActions } from "./store/ui-slice";

function App() {
  const isCartOpen = useSelector((state) => state.uiReducer.isCartOpen);
  const data = useSelector((state) => state.cartReducer); // Cart state
  const notification = useSelector((state) => state.uiReducer.notification);
  const isInitial = useRef(0); // Tracks initial render

  const dispatch = useDispatch();

  useEffect(()=>{
    setTimeout(() => {
      dispatch(uiActions.hideNotification());
    }, 5000);
  }, [notification, dispatch]);

  // Fetch initial cart data
  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  // Send cart data only if the cart changes
  useEffect(() => {
    if (isInitial.current < 2) {
      isInitial.current += 1;
   // Initialize with fetched data
      return;
    }

    dispatch(sendCartData(data)); // Trigger send only if cart has changed

  }, [data, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isCartOpen && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
