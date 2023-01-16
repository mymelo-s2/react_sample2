import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeMain from "./components/HomeMain";
import Home from "./components/Home";
import Main from "./components/Main";
import User from "./components/User";
import Schedule from "./components/Schedule";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
