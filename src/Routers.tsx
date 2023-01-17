import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeMain from "./components/HomeMain";
import Home from "./components/Home";
import Main from "./components/Main";
import User from "./components/User";
import Schedule from "./components/Schedule";
import Money from "./components/Money";
import Memo from "./components/Memo";
import Recipe from "./components/Recipe";
import OmeletteRice from "./components/OmeletteRice";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeMain />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<Main />}>
          <Route path="/user" element={<User />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/money" element={<Money />} />
          <Route path="/memo" element={<Memo />} />
          <Route path="/recipe" element={<Recipe />} />
        </Route>
        <Route path="/omeletterice" element={<OmeletteRice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
