import Counter from "./components/Counter";
import { Fragment, use } from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";
function App() {
  const isLoggedin = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {!isLoggedin && <Auth />}
      {isLoggedin && <UserProfile></UserProfile>}
      <Counter />
    </Fragment>
  );
}

export default App;
