import { useState } from "react";
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
  }, 3000);

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
                  setTimeout(() => {
                    setLoaded(true);
                  }, 1000);
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
