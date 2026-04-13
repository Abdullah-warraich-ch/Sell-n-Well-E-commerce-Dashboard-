import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/components/layout/RootLayout";
import Home from "@/pages/Home";
import Orders from "@/pages/Orders";
import Products from "@/pages/Products";
import Categories from "@/pages/Categories";
import Sales from "@/pages/Sales";
import Announce from "@/pages/Announce";

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
