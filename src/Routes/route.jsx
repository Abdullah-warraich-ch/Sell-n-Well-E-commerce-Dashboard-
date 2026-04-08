import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import Home from "@/screens/Home";
import Orders from "@/screens/Orders";
import Products from "@/screens/Products";
import Categories from "@/screens/Categories";
import Sales from "@/screens/Sales";
import Announce from "@/screens/Announce";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
]);

export default router;
