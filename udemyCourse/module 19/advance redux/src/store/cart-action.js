import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";
import axios from "axios";

export const getCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            console.log("will fetch now")
            const response = await axios.get("https://react-http-655f1-default-rtdb.firebaseio.com/cart.json")

            if (response.status !== 200) {
                throw new Error("Failed to get data");
            }

            return response.data;
        }
        try {
            const cartData = await fetchData();

            dispatch(cartActions.replaceByFirebase(cartData));


        } catch (error) {
            console.log("Eroor ,... .")
            dispatch(
                uiActions.showNotification({
                    status: "Error",
                    title: "Error",
                    message: "Fetching data from database failed!",
                })
            );

        }
    }
}


export const sendCartData = (cart) => {
    return async (dispatch) => {
        // Notify that the process has started
        dispatch(
            uiActions.showNotification({
                status: "pending",
                title: "Sending",
                message: "Sending cart data...",
            })
        );

        try {
            // Send the request
            const response = await axios.put(
                "https://react-http-655f1-default-rtdb.firebaseio.com/cart.json",
                cart
            );

            // Check for successful status code (if needed)

            if (response.status !== 200) {
                throw new Error("Failed to send cart data");
            }

            // Notify success
            dispatch(
                uiActions.showNotification({
                    status: "success",
                    title: "Success",
                    message: "Cart data sent successfully!",
                })
            );
        } catch (error) {
            // Notify error
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "Error",
                    message: error.message || "Sending cart data failed!",
                })
            );
        }
    };
};
