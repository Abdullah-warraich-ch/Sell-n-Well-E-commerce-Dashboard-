import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/components/layout/RootLayout";
import Home from "@/pages/Home";
import Orders from "@/pages/Orders";
import Products from "@/pages/Products";
import Categories from "@/pages/Categories";
import Sales from "@/pages/Sales";
import Announce from "@/pages/Announce";
import Login from "@/pages/Login";
import ProtectedRoute from "./protectedRoutes";
import PublicRoute from "./PublicRoute";
import NotFound from "@/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute><RootLayout /></ProtectedRoute>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "sales",
        element: <Sales />,
      },
      {
        path: "announcements",
        element: <Announce />,
      },
    ],
  },
  {
    path: "/login",
    element: <PublicRoute><Login /></PublicRoute>
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default router;
