import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Server, 
  Cloud, 
  Code2, 
  TestTube, 
  TrendingUp, 
  Briefcase, 
  Settings,
  Layout,
  ShoppingCart,
  Database,
  Zap,
  FileText,
  Layers,
  Users,
  Shield,
  BarChart3,
  MessageSquare,
  Target,
  Mail,
  Lightbulb,
  Building2,
  Package,
  Wrench,
  Monitor,
  Activity,
  Rocket
} from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      id: 'web',
      label: 'Web Development',
      services: [
        {
          icon: Code2,
          title: 'Website & Web Application Development',
          description: 'Custom websites and dynamic web applications built with modern technologies, responsive design, and exceptional user experiences.'
        },
        {
          icon: Building2,
          title: 'Enterprise Web Portals',
          description: 'Scalable enterprise solutions that streamline operations and enhance productivity for large organizations.'
        },
        {
          icon: ShoppingCart,
          title: 'E-Commerce Development',
          description: 'Full-featured online stores with secure payment processing, inventory management, and customer portals.'
        },
        {
          icon: Layout,
          title: 'CMS Development (WordPress, Shopify, etc.)',
          description: 'Custom content management systems that make it easy to manage and update your website content.'
        },
        {
          icon: Layers,
          title: 'SaaS Product Development',
          description: 'End-to-end SaaS solutions from concept to deployment, designed for scalability and growth.'
        },
        {
          icon: FileText,
          title: 'Landing Pages & Marketing Websites',
          description: 'High-converting landing pages and marketing sites optimized for lead generation and sales.'
        }
      ]
    },
    {
      id: 'mobile',
      label: 'Mobile App',
      services: [
        {
          icon: Smartphone,
          title: 'Native Mobile App Development (iOS & Android)',
          description: 'Native iOS and Android applications built with Swift, Kotlin, and modern frameworks, optimized for all devices.'
        },
        {
          icon: Layers,
          title: 'Cross-Platform & Hybrid App Development',
          description: 'Single codebase apps using React Native, Flutter, or hybrid technologies that run seamlessly on both iOS and Android.'
        },
        {
          icon: Palette,
          title: 'Mobile UI/UX Design',
          description: 'Intuitive and beautiful mobile interfaces designed with user experience and engagement in mind.'
        }
      ]
    },
    {
      id: 'uiux',
      label: 'UI/UX Design',
      services: [
        {
          icon: Palette,
          title: 'UI/UX Design for Web & Mobile',
          description: 'User-centered design solutions that create engaging and intuitive digital experiences.'
        },
        {
          icon: FileText,
          title: 'Wireframes, Mockups & Prototypes',
          description: 'Visual blueprints and interactive prototypes that bring your ideas to life before development.'
        },
        {
          icon: Layers,
          title: 'Design Systems & Component Libraries',
          description: 'Comprehensive design systems that ensure consistency and accelerate development across projects.'
        },
        {
          icon: Users,
          title: 'User Research & Usability Testing',
          description: 'Data-driven insights through user research and testing to optimize your product\'s usability.'
        },
        {
          icon: Target,
          title: 'Branding, Visual Identity & Logo Design',
          description: 'Complete brand identity packages including logos, icons, and illustrations that establish a strong visual presence.'
        }
      ]
    },
    {
      id: 'backend',
      label: 'Backend & DevOps',
      services: [
        {
          icon: Server,
          title: 'Backend Development (Node.js, PHP, Laravel)',
          description: 'Scalable backend solutions built with Node.js, Express, PHP, and Laravel for high-performance applications.'
        },
        {
          icon: Database,
          title: 'Database Architecture & Development',
          description: 'Optimized database designs and implementations that ensure data integrity and performance.'
        },
        {
          icon: Zap,
          title: 'API Development & Integration (REST, GraphQL)',
          description: 'Robust REST and GraphQL APIs with seamless third-party integrations to connect your systems and services.'
        },
        {
          icon: Layers,
          title: 'Microservices Architecture',
          description: 'Scalable microservices architectures that enable independent deployment and scaling of services.'
        },
        {
          icon: Shield,
          title: 'Secure Authentication (JWT, OAuth, SSO)',
          description: 'Enterprise-grade authentication systems with JWT, OAuth, and SSO for secure user access.'
        },
        {
          icon: Cloud,
          title: 'Cloud Deployment (AWS, GCP, Azure)',
          description: 'Seamless cloud deployments on major platforms with optimized infrastructure and cost management.'
        },
        {
          icon: Rocket,
          title: 'CI/CD Pipeline Setup',
          description: 'Automated continuous integration and deployment pipelines for faster, reliable releases.'
        },
        {
          icon: Package,
          title: 'Containerization (Docker, Kubernetes)',
          description: 'Container-based deployments using Docker and Kubernetes for scalable, portable applications.'
        },
        {
          icon: Monitor,
          title: 'Server Management & Monitoring',
          description: '24/7 server monitoring and management to ensure optimal performance, uptime, and proactive alerts.'
        },
        {
          icon: Shield,
          title: 'Cloud Security & Backup Solutions',
          description: 'Comprehensive security measures and automated backup systems to protect your data and infrastructure.'
        }
      ]
    },
    {
      id: 'software',
      label: 'Enterprise Software',
      services: [
        {
          icon: Code2,
          title: 'Custom Software Solutions',
          description: 'Bespoke software tailored to your unique business processes and requirements.'
        },
        {
          icon: Building2,
          title: 'ERP, CRM & Enterprise Management Systems',
          description: 'Enterprise resource planning, customer relationship management, HR, and payroll systems to streamline operations.'
        },
        {
          icon: ShoppingCart,
          title: 'POS & Inventory Management Systems',
          description: 'Point of sale systems with inventory tracking, warehouse management, sales reporting, and payment processing.'
        },
        {
          icon: Building2,
          title: 'Industry-Specific Management Systems',
          description: 'Specialized management systems for healthcare, education, real estate, and other industries.'
        },
        {
          icon: Zap,
          title: 'Automation Tools',
          description: 'Custom automation solutions that reduce manual work and improve operational efficiency.'
        },
        {
          icon: Lightbulb,
          title: 'AI-powered Applications',
          description: 'Intelligent applications leveraging artificial intelligence and machine learning capabilities.'
        }
      ]
    },
    {
      id: 'qa',
      label: 'QA & Maintenance',
      services: [
        {
          icon: TestTube,
          title: 'Manual & Automation Testing',
          description: 'Thorough manual testing and automated test suites to identify bugs and ensure consistent quality across all features.'
        },
        {
          icon: BarChart3,
          title: 'Performance & Security Testing',
          description: 'Load, performance, and security testing to ensure your application handles traffic, performs optimally, and is secure.'
        },
        {
          icon: Wrench,
          title: 'Bug Fixes, Optimization & Security Updates',
          description: 'Rapid bug resolution, code optimization, and security patches to improve stability, performance, and safety.'
        },
        {
          icon: FileText,
          title: 'QA Audits & System Reviews',
          description: 'Complete quality assurance audits and technical reviews to assess and improve your software development processes.'
        },
        {
          icon: Globe,
          title: 'Application Maintenance (Web & Mobile)',
          description: 'Regular updates, security patches, compatibility fixes, and content management to keep your applications running smoothly.'
        },
        {
          icon: Rocket,
          title: 'Feature Enhancements & Upgrades',
          description: 'Continuous improvement through new features, functionality, and version upgrades based on user feedback and needs.'
        }
      ]
    },
    {
      id: 'marketing',
      label: 'Digital Marketing',
      services: [
        {
          icon: TrendingUp,
          title: 'SEO (On-Page & Off-Page)',
          description: 'Search engine optimization strategies to improve your website\'s visibility and rankings.'
        },
        {
          icon: MessageSquare,
          title: 'Social Media Marketing (SMM)',
          description: 'Engaging social media campaigns that build brand awareness and drive customer engagement.'
        },
        {
          icon: Target,
          title: 'PPC & Paid Ads Management',
          description: 'Strategic paid advertising campaigns on Google, Facebook, and other platforms for maximum ROI.'
        },
        {
          icon: FileText,
          title: 'Content Creation & Copywriting',
          description: 'Compelling content and copy that resonates with your audience and drives conversions.'
        },
        {
          icon: Mail,
          title: 'Email Marketing',
          description: 'Targeted email campaigns that nurture leads and maintain customer relationships.'
        },
        {
          icon: Lightbulb,
          title: 'Brand Strategy & Digital Campaigns',
          description: 'Comprehensive digital marketing strategies and campaigns aligned with your business goals.'
        }
      ]
    },
    {
      id: 'consulting',
      label: 'Consulting',
      services: [
        {
          icon: Lightbulb,
          title: 'Product Strategy & Roadmap',
          description: 'Strategic planning and roadmaps to guide your product development and business growth.'
        },
        {
          icon: Code2,
          title: 'Software Architecture Consulting',
          description: 'Expert guidance on system architecture, technology selection, and scalable design patterns.'
        },
        {
          icon: Palette,
          title: 'UI/UX Consulting',
          description: 'Design expertise to improve user experience and interface design across your products.'
        },
        {
          icon: FileText,
          title: 'System Audit & Technical Review',
          description: 'Comprehensive technical audits to identify improvements and optimize your existing systems.'
        },
        {
          icon: Users,
          title: 'IT Team Training & Hiring Support',
          description: 'Training programs and recruitment assistance to build and strengthen your technical team.'
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-10 md:py-24 px-6 relative observe-section opacity-0">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-header">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-heading">
            <span className="animate-heading-word">Our</span>{' '}
            <span className="animate-heading-gradient bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Comprehensive software development solutions tailored to your business needs
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="web" className="w-full">
          <TabsList className="flex flex-wrap gap-2 mb-8 justify-center h-auto p-0 bg-transparent border-0">
            {serviceCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-violet-600 data-[state=active]:text-white text-slate-400 bg-slate-900/50 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 text-sm px-4 py-2 rounded-lg data-[state=active]:shadow-lg data-[state=active]:shadow-indigo-500/20 data-[state=active]:border-indigo-500/60"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {serviceCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="flex flex-wrap justify-center gap-6">
                {category.services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <article key={index} className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]">
                      <Card className="animate-item h-full bg-slate-900/50 border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 group backdrop-blur-sm">
                        <CardHeader className="pb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600/20 to-violet-600/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                              <Icon className="text-indigo-400" size={20} />
                            </div>
                            <CardTitle className="text-white text-lg leading-tight">{service.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-slate-400 leading-relaxed text-sm">
                            {service.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </article>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
