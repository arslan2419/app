import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Code2, Layers, Palette, Plug, Zap, Cpu, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: 'Custom Web App Development',
      description: 'Scalable, responsive web apps built using React, Next.js, and Node.js.'
    },
    {
      icon: Layers,
      title: 'SaaS Product Engineering',
      description: 'End-to-end SaaS design, development, and optimization.'
    },
    {
      icon: Palette,
      title: 'Frontend Excellence (UI/UX)',
      description: 'Pixel-perfect interfaces using Tailwind CSS, TypeScript, and modern libraries.'
    },
    {
      icon: Plug,
      title: 'API & Backend Integration',
      description: 'REST & GraphQL APIs with Node.js, Express.js, and MongoDB.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Advanced front-end optimization (lazy loading, code splitting, caching).'
    },
    {
      icon: Cpu,
      title: 'Automation & IoT Solutions',
      description: 'Integration with hardware sensors, automation dashboards, and analytics.'
    },
    {
      icon: Users,
      title: 'Consulting & Team Augmentation',
      description: 'Frontend leadership, mentorship, and code reviews for scaling teams.'
    }
  ];

  return (
    <section id="services" className="py-24 px-6 relative observe-section opacity-0">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Comprehensive software development solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="bg-slate-900/50 border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 group backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600/20 to-violet-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-indigo-400" size={24} />
                  </div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
