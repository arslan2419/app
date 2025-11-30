import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [trail, setTrail] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if device is desktop (has mouse)
    const checkDesktop = () => {
      setIsDesktop(window.matchMedia('(min-width: 768px) and (pointer: fine)').matches);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    let timeoutId = null;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      // Add trail particles
      setTrail((prev) => {
        const newTrail = [
          ...prev,
          { 
            x: e.clientX, 
            y: e.clientY, 
            id: Date.now() + Math.random(), 
            opacity: 1,
            size: Math.random() * 4 + 2
          }
        ];
        // Keep only last 15 particles
        return newTrail.slice(-15);
      });

      // Add sparkles occasionally
      if (Math.random() > 0.7) {
        setSparkles((prev) => {
          const newSparkles = [
            ...prev,
            {
              x: e.clientX + (Math.random() - 0.5) * 40,
              y: e.clientY + (Math.random() - 0.5) * 40,
              id: Date.now() + Math.random(),
              opacity: 1,
              scale: Math.random() * 0.5 + 0.5
            }
          ];
          return newSparkles.slice(-20);
        });
      }

      // Clear timeout and set new one
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        setIsMoving(false);
      }, 150);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animate trail particles
    const trailInterval = setInterval(() => {
      setTrail((prev) =>
        prev
          .map((particle) => ({
            ...particle,
            opacity: Math.max(0, particle.opacity - 0.08)
          }))
          .filter((particle) => particle.opacity > 0)
      );
    }, 30);

    // Animate sparkles
    const sparkleInterval = setInterval(() => {
      setSparkles((prev) =>
        prev
          .map((sparkle) => ({
            ...sparkle,
            opacity: Math.max(0, sparkle.opacity - 0.05)
          }))
          .filter((sparkle) => sparkle.opacity > 0)
      );
    }, 30);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      clearInterval(trailInterval);
      clearInterval(sparkleInterval);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Main cursor glow */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-opacity duration-200 ${
          isMoving ? 'opacity-100' : 'opacity-30'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.2s ease-out',
        }}
      >
        <div className="relative w-10 h-10">
          {/* Outer glow ring - animated */}
          <div 
            className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 opacity-70 blur-2xl"
            style={{
              animation: isMoving ? 'pulse 1.5s ease-in-out infinite' : 'none',
            }}
          />
          
          {/* Middle glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500 opacity-80 blur-lg" />
          
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-300 to-violet-300 opacity-90 blur-md" />
          
          {/* Center dot with glow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-lg shadow-indigo-400/50" />
          
          {/* Rotating sparkle ring */}
          {isMoving && (
            <div 
              className="absolute inset-0 rounded-full border border-indigo-400/30 animate-spin"
              style={{
                animationDuration: '3s',
              }}
            />
          )}
        </div>
      </div>

      {/* Trail particles */}
      {trail.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            transform: 'translate(-50%, -50%)',
            opacity: particle.opacity,
          }}
        >
          <div 
            className="rounded-full bg-gradient-to-r from-indigo-400 to-violet-400 blur-sm"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        </div>
      ))}

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="fixed pointer-events-none z-[9997]"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            transform: `translate(-50%, -50%) scale(${sparkle.scale})`,
            opacity: sparkle.opacity,
          }}
        >
          <div className="relative w-1 h-1">
            <div className="absolute inset-0 rounded-full bg-indigo-400 blur-sm" />
            <div className="absolute inset-0 rounded-full bg-violet-400" />
          </div>
        </div>
      ))}
    </>
  );
};

export default CustomCursor;

