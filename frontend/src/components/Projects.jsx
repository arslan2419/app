import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, TrendingUp } from 'lucide-react';
import { projectsData } from '../data/mock';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 relative observe-section opacity-0">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Showcasing our best work with measurable results and real impact
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-indigo-500/20 hover:border-indigo-500/40 overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 backdrop-blur-sm"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                {/* Location Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-indigo-600/80 backdrop-blur-sm text-xs text-white font-medium">
                  {project.location}
                </div>
              </div>

              <CardContent className="p-6">
                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                {/* Key Result */}
                <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-indigo-600/10 border border-indigo-500/20">
                  <TrendingUp className="text-indigo-400" size={18} />
                  <span className="text-indigo-300 text-sm font-medium">{project.result}</span>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-md bg-slate-800/50 text-slate-300 text-xs border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Case Study Button */}
                <Button
                  variant="outline"
                  className="w-full border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 group/btn"
                >
                  View Case Study
                  <ExternalLink className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
