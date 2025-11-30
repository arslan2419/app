import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Check, Sparkles } from 'lucide-react';

const Pricing = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses starting their online presence',
      price: '$1,200',
      period: 'one-time',
      popular: false,
      features: [
        'Modern, Responsive Design',
        'Mobile-First Approach',
        'Contact Form Integration',
        'Up to 5 Pages',
        'Basic SEO Optimization',
        'Fast Loading Performance',
        'SSL Certificate Included',
        '1 Month Support & Maintenance',
        'Free Domain & Hosting (1 Year)'
      ],
      cta: 'Get Started',
      gradient: 'from-slate-800 to-slate-900'
    },
    {
      name: 'Business',
      description: 'Ideal for growing businesses with advanced features',
      price: '$2,500',
      period: 'one-time',
      popular: true,
      features: [
        'Everything in Starter',
        'Blog Section',
        'Social Media Integration',
        'Up to 10 Pages',
        'Advanced SEO & Analytics',
        'Content Management System',
        'E-Commerce Functionality',
        'Payment Gateway Integration',
        'Admin Dashboard',
        '2 Months Support & Maintenance',
        'Free Domain & Hosting (1 Year)'
      ],
      cta: 'Get Started',
      gradient: 'from-indigo-600 to-violet-600'
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for large-scale businesses',
      price: '$5,000',
      period: 'one-time',
      popular: false,
      features: [
        'Everything in Business',
        'Full E-Commerce Platform',
        'Custom Features & Integrations',
        'Unlimited Pages',
        'Advanced Security Features',
        'API Integrations',
        'Custom Admin Panel',
        'Performance Optimization',
        'Priority Support',
        '3 Months Support & Maintenance',
        'Free Domain & Hosting (1 Year)',
        'Dedicated Account Manager'
      ],
      cta: 'Contact Sales',
      gradient: 'from-slate-800 to-slate-900'
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 relative observe-section opacity-0">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-header">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-heading">
            <span className="animate-heading-word">Choose</span>{' '}
            <span className="animate-heading-word">Your</span>{' '}
            <span className="animate-heading-gradient bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Plan</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Select the perfect package for your business needs. All plans include professional development and ongoing support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`animate-item relative bg-slate-900/50 border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2 backdrop-blur-sm ${
                plan.popular ? 'md:-mt-4 md:mb-4 border-indigo-500/50' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                    <Sparkles size={14} />
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-white mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-slate-400 mb-6">{plan.description}</CardDescription>
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 text-sm">/{plan.period}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-indigo-500 to-violet-500' 
                          : 'bg-indigo-500/20'
                      }`}>
                        <Check 
                          className={`${plan.popular ? 'text-white' : 'text-indigo-400'}`} 
                          size={14} 
                        />
                      </div>
                      <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => scrollToSection('contact')}
                  className={`w-full py-6 text-lg font-semibold ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white'
                      : 'bg-slate-800/50 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-500/50'
                  } transition-all duration-300`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Quote CTA */}
        <div className="text-center animate-item">
          <Card className="bg-gradient-to-r from-indigo-600/10 to-violet-600/10 border-indigo-500/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-3">
                Need a <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Custom Solution</span>?
              </h3>
              <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
                We create tailored websites designed specifically for your business needs and goals. 
                Tell us your requirements, and we'll craft the perfect solution for you.
              </p>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-500/50 px-8 py-6 text-lg"
              >
                Get Custom Quote
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

