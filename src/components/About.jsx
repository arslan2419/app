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
    <section id="about" className="py-10 md:py-24 px-6 relative observe-section opacity-0">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-header">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-heading">
            <span className="animate-heading-word">About</span>{' '}
            <span className="animate-heading-word">ZH</span>{' '}
            <span className="animate-heading-gradient bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Solutions</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Story */}
          <div className="space-y-6 animate-item">
            <article className="prose prose-invert max-w-none">
              <p className="text-lg text-slate-300 leading-relaxed">
                Founded by <strong className="text-indigo-400 font-semibold">Arslan Mukhtar</strong>, a seasoned Frontend Lead with 5+ years of experience delivering SaaS products and leading global development teams. ZH Solutions specializes in web development, mobile app development, and software development services.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                At ZH Solutions, we specialize in building high-performance, scalable web applications that drive real business results. Our expertise spans the complete MERN stack, with deep knowledge in React, Next.js, TypeScript, Node.js, and modern frontend architectures. We provide custom software development, UI/UX design, and enterprise solutions.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                We've successfully delivered projects for clients across <strong className="text-indigo-400 font-semibold">Dubai, Slovakia, the USA, and Pakistan</strong>, helping startups and enterprises transform their digital presence with cutting-edge web development and mobile app development solutions.
              </p>
            </article>

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
          <aside className="grid grid-cols-1 sm:grid-cols-2 gap-4" aria-label="Our Core Values">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <article key={index}>
                  <Card className="animate-item h-full bg-slate-900/50 border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600/20 to-violet-600/20 flex items-center justify-center mb-4" aria-hidden="true">
                        <Icon className="text-indigo-400" size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </article>
              );
            })}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
