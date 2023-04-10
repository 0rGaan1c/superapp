import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/genre" element={<div>Genre</div>} />
    </Routes>
  );
}

export default App;
