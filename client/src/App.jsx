import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Games from "./components/Games";
import GameOverview from "./components/GameOverview";
import Gameplay from "./components/gameplay/Gameplay";

function App() {
  return (
    <>
      {/* <Router>
          <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/games" element={<Games />} />
           <Route path="/games/:slug" element={<GameOverview />} />
          //  /games/:slug/gameplay
           <Route path="/gameplay/:slug" element={<Gameplay />} />
         </Routes>
       </Router> */}
    </>
  );
}

export default App;
