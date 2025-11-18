import { Routes, Route } from "react-router";
import { Home } from "./Pages/Home";
import { Lms } from "./Pages/Lms";
import { Facilities } from "./Pages/Facilities";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lms" element={<Lms />} />
      <Route path="/facilities" element={<Facilities />} />
    </Routes>
  );
}

export default App;
