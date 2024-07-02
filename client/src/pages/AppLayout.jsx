import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <>
      <Header />
      <main className="bg-gray-100 h-auto ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
