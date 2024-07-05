import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage/FirstPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tanisha" element={<FirstPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
