import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cart />,
  },
]);

const App = () => {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
};
export default App;
