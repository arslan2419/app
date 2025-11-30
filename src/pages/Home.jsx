import React, { useEffect, lazy, Suspense } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';

// Lazy load below-the-fold components for better initial load performance
const Services = lazy(() => import('../components/Services'));
const Projects = lazy(() => import('../components/Projects'));
const Pricing = lazy(() => import('../components/Pricing'));
const About = lazy(() => import('../components/About'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const Contact = lazy(() => import('../components/Contact'));
const Footer = lazy(() => import('../components/Footer'));

// Minimal loading placeholder
const SectionPlaceholder = () => <div className="min-h-[400px]" />;

const Home = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Defer Intersection Observer setup to reduce initial blocking
    const setupObserver = () => {
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

      // Observe all sections
      const observeSections = () => {
        const sections = document.querySelectorAll('.observe-section');
        sections.forEach((section) => {
          observer.observe(section);
        });
      };

      // Use requestIdleCallback for better performance
      if ('requestIdleCallback' in window) {
        requestIdleCallback(observeSections, { timeout: 2000 });
      } else {
        setTimeout(observeSections, 200);
      }

      return () => {
        observer.disconnect();
      };
    };

    // Defer observer setup
    if ('requestIdleCallback' in window) {
      requestIdleCallback(setupObserver, { timeout: 1000 });
    } else {
      setTimeout(setupObserver, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      <Header />
      <Hero />
      <Suspense fallback={<SectionPlaceholder />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <Pricing />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<SectionPlaceholder />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
