import MainNavigation from "../components/MainNavigation";

import { useRouteError } from "react-router-dom";

export default function ErrPage() {
  const err = useRouteError();
  console.log(err);

  let title = "An error occured";

  let message = "Something went wrong";

  if (err.status === 500) {
    message = JSON.parse(err.data).message;
  }
  if (err.status === 404) {
    message = "Page Not found";
  }
  return (
    <>
      <MainNavigation />
      <div className="errr-container pt-28 text-center">
        <h2 className="err font-bold text-red-500 text-2xl">{title}</h2>
        <p className="errMsg font-bold text-emerald-600 text-lg">{message}</p>
      </div>
    </>
  );
}
