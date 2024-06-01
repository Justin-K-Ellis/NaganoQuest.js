import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Pages
import Top from "./pages/Top";
import WelcomePage from "./pages/WelcomePage";
import NaganoCity from "./pages/NaganoCity";
import Zenkouji from "./pages/Zenkouji";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Top />} />
      <Route path="welcome" element={<WelcomePage />} />
      <Route path="naganocity" element={<NaganoCity />} />
      <Route path="zenkouji" element={<Zenkouji />} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
