import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {


  return (
    <>
      <button onClick={props.onClickCart} className="rounded-m bg-teal-500 shadow-sm flex justify-between gap-2">
        <span className="w-6 h-6">
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className="rounded-full bg-red-400 w-9">3</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
