import React from "react";
import "./assets/styles/App.css";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout.jsx";
import Home from "./components/screens/home/Home.jsx";
import Single from "./components/screens/single/Single.jsx";
import Favorites from "./components/screens/favorites/Favorites.jsx";
import Success from "./components/screens/success/Success.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<Single />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="success" element={<Success />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
