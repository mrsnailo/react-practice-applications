import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col gap-10">
      {/* Floating Navigation Bar */}
      <MainNavigation />

      {/* Outlet Container with Top Padding */}
      <div className="flex-grow pt-20"> {/* Adjust pt-16 based on the height of your navigation bar */}
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default RootLayout;