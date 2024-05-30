import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Pages
import Top from "./pages/Top";
import NaganoCity from "./pages/NaganoCity";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Top />} />
      <Route path="naganocity" element={<NaganoCity />} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
