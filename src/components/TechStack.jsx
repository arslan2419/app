import React from 'react';
import { techStackData } from '../data/mock';

const TechStack = () => {
  return (
    <section className="py-24 px-6 relative observe-section opacity-0">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-header">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-heading">
            <span className="animate-heading-word">Tech</span>{' '}
            <span className="animate-heading-gradient bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We build with proven modern technologies to ensure performance, scalability, and maintainability
          </p>
        </div>

        {/* Tech Categories */}
        <div className="space-y-12">
          {Object.entries(techStackData).map(([category, technologies]) => (
            <div key={category} className="animate-item">
              <h3 className="text-xl font-semibold text-indigo-300 mb-6 capitalize">{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="group flex flex-col items-center justify-center p-6 rounded-xl bg-slate-900/50 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1 backdrop-blur-sm"
                  >
                    <div className="w-12 h-12 mb-3 flex items-center justify-center">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-sm text-slate-300 font-medium text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
