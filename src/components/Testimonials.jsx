import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';
import { testimonialsData } from '../data/mock';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-10 md:py-24 px-6 relative observe-section opacity-0">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-header">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-heading">
            <span className="animate-heading-word">Client</span>{' '}
            <span className="animate-heading-gradient bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <article key={index}>
              <Card className="animate-item h-full bg-slate-900/50 border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 backdrop-blur-sm">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="text-indigo-400/40" size={32} aria-hidden="true" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4" aria-label="5 star rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-500 fill-yellow-500" size={16} aria-hidden="true" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-slate-300 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Client Info */}
                  <footer className="border-t border-indigo-500/20 pt-4">
                    <cite className="not-italic">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-slate-400">{testimonial.role}</div>
                      <div className="text-xs text-indigo-400 mt-1">{testimonial.company}</div>
                    </cite>
                  </footer>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
