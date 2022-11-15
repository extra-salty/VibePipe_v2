import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/home";
import { Settings } from "./routes/settings";
import "./App.css";


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
