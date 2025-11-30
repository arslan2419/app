import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import { Toaster } from "./components/ui/toaster";
import "./App.css";

// Lazy load Home component for code splitting
const Home = lazy(() => import("./pages/Home"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 flex items-center justify-center">
    <div className="text-white text-lg">Loading...</div>
  </div>
);

function App() {
  useEffect(() => {
    // Defer hiding emergent badge to reduce blocking
    const badge = document.getElementById("emergent-badge");
    if (badge) {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          badge.style.display = "none";
        });
      } else {
        setTimeout(() => {
          badge.style.display = "none";
        }, 100);
      }
    }
  }, []);
  
  return (
    <div className="App">
      <CustomCursor />
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
