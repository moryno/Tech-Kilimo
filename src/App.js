import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Profile from "./pages/dashboard/Profile";
import Home from "./pages/dashboard/Home";
import LandingPage from "./pages/landing-page/LandingPage";
import Platform from "./pages/landing-page/Platform";
import Layout from "./layouts/Layout";
import FrontendLayout from "./layouts/FrontendLayout";

function App() {
  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/" />;
  //   }
  //   return children;
  // };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <FrontendLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/platform",
          element: <Platform />,
        },
      ],
    },
    {
      path: "/",
      element: (
        // <ProtectedRoute>
        <Layout />
        // </ProtectedRoute>
      ),
      children: [
        {
          path: "/dashboard",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
