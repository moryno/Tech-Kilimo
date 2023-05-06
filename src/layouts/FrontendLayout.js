import { Outlet } from "react-router-dom";
import Navbar from "../components/frontend/Navbar";
import Footer from "../components/frontend/Footer";

const FrontendLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default FrontendLayout;
