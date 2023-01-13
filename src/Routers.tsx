import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeMain from "./components/HomeMain";
import Home from "./components/Home";
import Main from "./components/Main";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeMain />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<Main />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
