import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { ExternalLink, TrendingUp, MapPin } from 'lucide-react';
import { projectsData } from '../data/mock';

// Image Carousel Component with fade transitions
const ImageCarousel = ({ images, title, description, location }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!images || images.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [images, isPaused]);

  if (!images || images.length === 0) return null;

  return (
    <div 
      className="relative w-full h-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${title} - ${description} - Web Development Project by ZH Solutions`}
          title={`${title} - ${location} - Software Development Project`}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
        />
      ))}
    </div>
  );
};

const Projects = () => {
  // Organize projects by category
  const projectCategories = [
    {
      id: 'websites',
      label: 'Websites',
      projects: [
        projectsData[0], // Codly
        projectsData[1], // Gecora
        projectsData[3], // TUKE
        // projectsData[2], // Zhir AI
        // projectsData[4], // Gigant
        // projectsData[5], // Legro
      ]
    },
    {
      id: 'apps',
      label: 'Apps',
      projects: [
        // Add mobile app projects here when available
        projectsData[6], // Marian Go
      ]
    },
    {
      id: 'branding',
      label: 'Branding & Design',
      projects: [
        // projectsData[0], // Codly
        // projectsData[1], // Gecora
        // projectsData[3], // TUKE
        projectsData[2], // Zhir AI
        projectsData[4], // Gigant
        projectsData[5], // Legro
      ]
    }
  ];

  return (
    <section id="projects" className="py-10 md:py-24 px-6 relative observe-section opacity-0">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-header">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-heading">
            <span className="animate-heading-word">Featured</span>{' '}
            <span className="animate-heading-gradient bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Showcasing our best work with measurable results and real impact
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="websites" className="w-full">
          <TabsList className="flex flex-wrap gap-2 mb-8 justify-center h-auto p-0 bg-transparent border-0">
            {projectCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-violet-600 data-[state=active]:text-white text-slate-400 bg-slate-900/50 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 text-sm px-4 py-2 rounded-lg data-[state=active]:shadow-lg data-[state=active]:shadow-indigo-500/20 data-[state=active]:border-indigo-500/60"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {projectCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              {category.projects.length > 0 ? (
                <div className="flex flex-wrap justify-center gap-6">
                  {category.projects.map((project, index) => (
                    <article
                      key={index}
                      className="animate-item group relative w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(33.333%-1rem)]"
                    >
                      {/* Main Card Container */}
                      <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 border border-indigo-500/20 backdrop-blur-xl transition-all duration-500 hover:border-indigo-500/60 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2">
                        {/* Gradient Overlay on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 via-violet-600/0 to-purple-600/0 group-hover:from-indigo-600/10 group-hover:via-violet-600/5 group-hover:to-purple-600/10 transition-all duration-500 z-10" />

                        {/* Image Section */}
                        <div className="relative h-80 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 opacity-50 group-hover:opacity-70 transition-opacity duration-500 z-10" />
                          <ImageCarousel
                            images={project?.images}
                            title={project.title}
                            description={project.description}
                            location={project.location}
                          />

                          {/* Location Badge - Modern Design */}
                          <div className="absolute top-4 right-4 z-20">
                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-600/90 to-violet-600/90 backdrop-blur-md border border-indigo-400/30 shadow-lg">
                              <MapPin className="text-white" size={12} />
                              <span className="text-white text-xs font-medium">{project.location}</span>
                            </div>
                          </div>

                          {/* Shine Effect on Hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-10" />
                        </div>

                        {/* Content Section */}
                        <div className="relative p-6 z-10">
                          {/* Title */}
                          <div className="mb-3">
                            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-violet-400 group-hover:bg-clip-text transition-all duration-300">
                              {project.title}
                            </h3>
                            <div className="h-0.5 w-0 bg-gradient-to-r from-indigo-500 to-violet-500 group-hover:w-full transition-all duration-500" />
                          </div>

                          {/* Description */}
                          <p className="text-slate-400 text-sm mb-5 leading-relaxed line-clamp-2">
                            {project.description}
                          </p>

                          {/* Key Result - Modern Badge */}
                          <div className="mb-5 p-3.5 rounded-xl bg-gradient-to-r from-indigo-600/10 via-violet-600/10 to-purple-600/10 border border-indigo-500/20 backdrop-blur-sm group-hover:border-indigo-500/40 group-hover:shadow-lg group-hover:shadow-indigo-500/10 transition-all duration-300">
                            <div className="flex items-center gap-2.5">
                              <div className="p-1.5 rounded-lg bg-gradient-to-br from-indigo-500/20 to-violet-500/20">
                                <TrendingUp className="text-indigo-400" size={16} />
                              </div>
                              <span className="text-indigo-300 text-sm font-semibold">{project.result}</span>
                            </div>
                          </div>

                          {/* Tech Stack - Modern Pills */}
                          <div className="flex flex-wrap gap-2 mb-5">
                            {project.tech.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 rounded-lg bg-slate-800/60 backdrop-blur-sm text-slate-300 text-xs font-medium border border-slate-700/50 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/5 group-hover:text-indigo-300 transition-all duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* CTA Button - Modern Design */}
                          <Button
                            variant="outline"
                            className="w-full group/btn relative overflow-hidden border-2 border-indigo-500/50 bg-gradient-to-r from-indigo-600/10 to-violet-600/10 text-indigo-300 hover:border-indigo-500 hover:from-indigo-600/20 hover:to-violet-600/20 hover:text-white transition-all duration-300"
                          >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                              View Case Study
                              <ExternalLink className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" size={16} />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/0 to-violet-600/0 group-hover/btn:from-indigo-600/30 group-hover/btn:to-violet-600/30 transition-all duration-300" />
                          </Button>
                        </div>

                        {/* Corner Accent */}
                        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-violet-500/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-slate-400 text-lg">No projects in this category yet. Check back soon!</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
