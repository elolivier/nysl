import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./routes/Layout";
import { Home } from "./routes/Home";
import Games from "./routes/Games";
import Game from "./routes/GameId";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="games" element={<Games />} />
        <Route path="game/:gameId" element={<Game />} />
      </Route>
    </Routes>
  );
}

export default App;
