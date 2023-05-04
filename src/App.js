import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Profile from "./pages/dashboard/Profile";
import Home from "./pages/dashboard/Home";
import Layout from "./components/dashboard/Layout";

function App() {
  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/" />;
  //   }
  //   return children;
  // };

  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <LandingPage />,
    // },
    // {
    //   path: "/sign-in",
    //   element: <SignIn />,
    // },
    // {
    //   path: "/get-started",
    //   element: <SignUp />,
    // },
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
