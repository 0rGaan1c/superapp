import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import SelectCategory from "./pages/SelectCategory";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/select-category" element={<SelectCategory />} />
    </Routes>
  );
}

export default App;
