import "./App.css";

import Home from "./Pages/Home/Home";

import { Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import ContactPage from "./Pages/Contact/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
