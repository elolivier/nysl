import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./routes/Layout";
import { Home } from "./routes/Home";
import Games from "./routes/Games";
import Game from "./routes/GameId";
import Chat from "./routes/ChatId";
import Photos from "./routes/PhotosId";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="games" element={<Games />} />
        <Route path="game/:gameId" element={<Game />} />
        <Route path="chat/:gameId" element={<Chat />} />
        <Route path="photos/:gameId" element={<Photos />} />
      </Route>
    </Routes>
  );
}

export default App;
