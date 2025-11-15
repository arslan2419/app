import React from 'react';
import { Card, CardContent } from './ui/card';
import { Award, Target, Lightbulb, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality',
      description: 'Exceptional standards in every line of code'
    },
    {
      icon: Target,
      title: 'Transparency',
      description: 'Clear communication and honest timelines'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Cutting-edge solutions for modern challenges'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Consistent delivery you can depend on'
    }
  ];

  return (
    <section id="about" className="py-24 px-6 relative observe-section opacity-0">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">ZH Solutions</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Story */}
          <div className="space-y-6">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-slate-300 leading-relaxed">
                Founded by <span className="text-indigo-400 font-semibold">Arslan Mukhtar</span>, a seasoned Frontend Lead with 5+ years of experience delivering SaaS products and leading global development teams.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                At ZH Solutions, we specialize in building high-performance, scalable web applications that drive real business results. Our expertise spans the complete MERN stack, with deep knowledge in React, Next.js, TypeScript, and modern frontend architectures.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                We've successfully delivered projects for clients across <span className="text-indigo-400 font-semibold">Dubai, Slovakia, the USA, and Pakistan</span>, helping startups and enterprises transform their digital presence.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://github.com/arslan2419"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-slate-800/50 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all duration-300 font-medium"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/arslan-mukhtar"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-slate-800/50 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all duration-300 font-medium"
              >
                LinkedIn
              </a>
              <a
                href="mailto:arslanmukhtar.dev@gmail.com"
                className="px-6 py-3 rounded-lg bg-slate-800/50 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all duration-300 font-medium"
              >
                Email
              </a>
            </div>
          </div>

          {/* Right: Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="bg-slate-900/50 border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600/20 to-violet-600/20 flex items-center justify-center mb-4">
                      <Icon className="text-indigo-400" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
