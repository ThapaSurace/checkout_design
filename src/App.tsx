import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Checkout from "./pages/Checkout";
import { Toaster } from "./components/ui/toaster";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);

const App = () => {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
};
export default App;
