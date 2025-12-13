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
    <div className="text-white flex align-middle items-center text-lg animate-fade-in">
      <img 
        src="/zh-icon.svg" 
        alt="ZH Solutions" 
        className="w-14 h-auto animate-pulse" 
      />
      <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent z-50 relative">
        Solutions
      </div>
    </div>
    <div className="absolute mt-24">
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
      </div>
    </div>
  </div>
);

function App() {
  useEffect(() => {
    // Defer hiding emergent badge to reduce blocking
    const badge = document.getElementById("emergent-badge");
    if (badge) {
      if ("requestIdleCallback" in window) {
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
