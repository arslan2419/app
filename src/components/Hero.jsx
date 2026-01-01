import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Code2, Sparkles } from 'lucide-react';

// Counter component for animated numbers
const AnimatedCounter = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const animateCounter = () => {
      const startTime = Date.now();
      const startValue = 0;
      const endValue = end;

      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };

      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated, end, duration]);

  return (
    <span ref={counterRef} className="text-3xl font-bold text-white mb-1">
      {count}{suffix}
    </span>
  );
};

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      {/* 3D Animated Dashboard Visual */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full hidden lg:flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center perspective-1000">
          {/* Floating Code Cards */}
          <div className="absolute animate-3d-rotate">
            <div className="w-80 h-60 bg-gradient-to-br from-indigo-900/40 to-violet-900/40 backdrop-blur-sm rounded-xl border border-indigo-500/30 shadow-2xl shadow-indigo-500/20 p-6 transform rotate-y-12">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="text-indigo-400" size={20} />
                <div className="text-sm text-indigo-300 font-mono">component.tsx</div>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-indigo-500/30 rounded w-3/4" />
                <div className="h-2 bg-violet-500/30 rounded w-full" />
                <div className="h-2 bg-blue-500/30 rounded w-2/3" />
                <div className="h-2 bg-indigo-500/30 rounded w-5/6" />
              </div>
            </div>
          </div>

          <div className="absolute animate-3d-rotate-delayed">
            <div className="w-64 h-48 bg-gradient-to-br from-violet-900/40 to-blue-900/40 backdrop-blur-sm rounded-xl border border-violet-500/30 shadow-2xl shadow-violet-500/20 p-5 transform -rotate-y-12 translate-x-32 -translate-y-20">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="text-violet-400" size={18} />
                <div className="text-xs text-violet-300 font-mono">api.js</div>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-violet-500/30 rounded w-full" />
                <div className="h-2 bg-blue-500/30 rounded w-4/5" />
                <div className="h-2 bg-violet-500/30 rounded w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6 animate-fade-in">
            <Sparkles className="text-indigo-400" size={16} />
            <span className="text-sm text-indigo-300 font-medium">Premium Software Development</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">
            <span className="bg-gradient-to-r from-white via-indigo-200 to-violet-200 bg-clip-text text-transparent">
              Building Scalable Software,{' '}
            </span>
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              Beautifully.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-slate-300 mb-8 leading-relaxed animate-slide-up-delayed">
            ZH Solutions helps startups and enterprises turn ideas into high-performance digital products using modern web technologies. Expert web development, mobile app development, React, Next.js, and MERN stack solutions for businesses worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delayed">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-lg px-8 py-6 group"
            >
              Get a Quote
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('projects')}
              className="border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 text-lg px-8 py-6"
            >
              See Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in-delayed">
            <div>
              <AnimatedCounter end={5} suffix="+" duration={2000} />
              <div className="text-sm text-slate-400">Years Experience</div>
            </div>
            <div>
              <AnimatedCounter end={50} suffix="+" duration={2500} />
              <div className="text-sm text-slate-400">Projects Delivered</div>
            </div>
            <div>
              <AnimatedCounter end={4} suffix="" duration={1500} />
              <div className="text-sm text-slate-400">Countries Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform sm:block hidden -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-indigo-500/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-indigo-500 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
