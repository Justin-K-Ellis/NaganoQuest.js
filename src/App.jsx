// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";

// // Pages
// import Top from "./pages/Top";
// import WelcomePage from "./pages/WelcomePage";
// import NaganoCity from "./pages/NaganoCity";
// import UedaCity from "./pages/UedaCity";
// import MatsumotoCity from "./pages/MatsumotoCity";
// import TheSouth from "./pages/TheSouth";
// import Zenkouji from "./pages/Zenkouji";
// import ZenKoujiTunnel from "./pages/ZenKoujiTunnel";
// import Starbucks from "./pages/Starbucks";
// import IceCream from "./pages/IceCream";
// import SpaceOut from "./pages/SpaceOut";
// import UedaCastle from "./pages/UedaCastle";
// import BarKK from "./pages/BarKK";
// import MatsumotoCastle from "./pages/MatsumotoCastle";
// import MatsumotoMuseum from "./pages/MatsumotoMuseum";
// import MatsumotoStationArea from "./pages/MatsumotoStationArea";
// import StayOutInMatsumoto from "./pages/StayOutInMatsumoto";
// import LeaveKK from "./pages/LeaveKK";
// import StayAtKK from "./pages/StayAtKK.jsx";
// import KisoValley from "./pages/KisoValley.jsx";
// import Suwa from "./pages/Suwa.jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/" element={<Top />} />
//       <Route path="welcome" element={<WelcomePage />} />
//       <Route path="naganocity" element={<NaganoCity />} />
//       <Route path="uedacity" element={<UedaCity />} />
//       <Route path="matsumotocity" element={<MatsumotoCity />} />
//       <Route path="thesouth" element={<TheSouth />} />
//       <Route path="zenkouji" element={<Zenkouji />} />
//       <Route path="zenkoujitunnel" element={<ZenKoujiTunnel />} />
//       <Route path="starbucks" element={<Starbucks />} />
//       <Route path="icecream" element={<IceCream />} />
//       <Route path="spaceout" element={<SpaceOut />} />
//       <Route path="uedacastle" element={<UedaCastle />} />
//       <Route path="barKK" element={<BarKK />} />
//       <Route path="matsumotocastle" element={<MatsumotoCastle />} />
//       <Route path="matsumotomuseum" element={<MatsumotoMuseum />} />
//       <Route path="matsumotostationarea" element={<MatsumotoStationArea />} />
//       <Route path="outinmatsumoto" element={<StayOutInMatsumoto />} />
//       <Route path="leavekk" element={<LeaveKK />} />
//       <Route path="stayatkk" element={<StayAtKK />} />
//       <Route path="kiso" element={<KisoValley />} />
//       <Route path="suwa" element={<Suwa />} />
//     </>
//   )
// );

import { RouterProvider } from "react-router-dom";
import Router from "./Router";

const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
