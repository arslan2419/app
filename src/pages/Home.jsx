import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Pricing from '../components/Pricing';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Enhanced Intersection Observer for sophisticated scroll animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation class to section
          entry.target.classList.add('animate-in');
          
          // Once animated, stop observing to prevent re-triggering
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all sections with a slight delay to ensure DOM is ready
    const observeSections = () => {
      const sections = document.querySelectorAll('.observe-section');
      sections.forEach((section, index) => {
        // Add a small delay for initial load to create a cascade effect
        setTimeout(() => {
          observer.observe(section);
        }, index * 50);
      });
    };

    // Observe sections after a brief delay
    const timeoutId = setTimeout(observeSections, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Pricing />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
