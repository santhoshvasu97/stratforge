import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import History from "./pages/History/History";
import Launches from "./pages/Launches/Launches";
import Rockets from "./pages/Rockets/Rockets";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/history" element={<History />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="*" element={<Navigate to="/rockets" replace />} />
      </Routes>
    </div>
  );
}

export default App;
