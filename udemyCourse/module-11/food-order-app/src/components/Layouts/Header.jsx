import cover from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className="z-10 header-items flex justify-between p-6 items-center bg-cyan-700 fixed w-full h-20 shadow-sm">
        <div className="title text-xl font-bold">React Food</div>
        <HeaderCartButton onClickCart={props.showCart}/>
      </header>
      <div className="h-72 w-full overflow-hidden z-0">
        <img
          className="w-110 object-cover h-full transform -rotate-2 -translate-y-4 -translate-x-1"
          src={cover}
          alt="Food Menu of a resturant"
        />
      </div>
    </>
  );
};

export default Header;
