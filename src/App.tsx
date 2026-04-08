import React, { useState, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro/Intro.tsx";
import Location from "./components/Location/Location.tsx";
import Program from "./components/Program/Program.tsx";
import Animation from "./components/Animation/Animation.tsx";
import DressCode from "./components/DressCode/DressCode.tsx";
import "./App.css";
import Important from "./components/Important/Important.tsx";
import FullScreenLoader from "./components/FullScreenLoader/FullScreenLoader.tsx";

function App() {
  const [loaded, setLoaded] = useState(false);
  setTimeout(() => {
    setLoaded(true);
  }, 5);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <FullScreenLoader isLoaded={loaded} />
              <div
                id="main-container"
                onLoad={() => {
                  setLoaded(true);
                }}
              >
                <Intro />
                <Location />
                <Program />
                <Animation />
                <DressCode />
                <Important />
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
