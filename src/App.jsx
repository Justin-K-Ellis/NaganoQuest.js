import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Pages
import Top from "./pages/Top";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Top />} />)
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
