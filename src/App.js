import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CustomCursor from "./components/CustomCursor";
import { Toaster } from "./components/ui/toaster";
import "./App.css";

function App() {
  useEffect(() => {
    const doc = (document.getElementById("emergent-badge").style.display =
      "none");
  }, []);
  return (
    <div className="App">
      <CustomCursor />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
