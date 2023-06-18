import type { FC } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Agents from "../Agents/Agents";
import CreateAgent from "../CreateAgent/CreateAgent";

const App: FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Agents />} />
          <Route path="join" element={<CreateAgent />} />
          <Route path="*" element={<Agents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
