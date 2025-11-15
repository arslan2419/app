import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { EMAILJS_CONFIG } from '../config/emailjs';

// WhatsApp Icon Component
const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
      fill="currentColor"
    />
  </svg>
);

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      // Prepare template parameters
      const templateParams = {
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not provided',
        message: formData.message,
        reply_to: formData.email,
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      // Show success message
      toast({
        title: 'Message Sent!',
        description: 'Thank you for reaching out. We\'ll get back to you soon.'
      });

      // Reset form
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again or contact us directly.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'arslanmukhtar.dev@gmail.com',
      link: 'mailto:arslanmukhtar.dev@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Global Services',
      link: null
    },
    {
      icon: Phone,
      label: 'Call',
      value: '+923340042304',
      link: 'tel:+923340042304'
    },
    {
      icon: WhatsAppIcon,
      label: 'WhatsApp',
      value: '+923340042304',
      link: 'https://wa.me/923340042304'
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 relative observe-section opacity-0">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Something Great</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Have a project in mind? Get in touch and let's discuss how ZH Solutions can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <Card className="bg-slate-900/50 border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-start">
                      <div className="w-14 h-14 rounded-xl bg-slate-800/60 flex items-center justify-center flex-shrink-0 mb-4">
                        <Icon className="text-white" size={24} />
                      </div>
                      <div className="w-full">
                        <div className="text-sm text-slate-400 mb-2">{info.label}</div>
                        <div className="text-white font-bold text-lg">{info.value}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );

              return info.link ? (
                <a key={index} href={info.link} target={info.link.startsWith('http') ? '_blank' : '_self'} rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''} className="block">
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 bg-slate-900/50 border-indigo-500/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send us a message</CardTitle>
              <CardDescription className="text-slate-400">
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-300">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-slate-800/50 border-indigo-500/30 text-white placeholder:text-slate-500 focus:border-indigo-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-300">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-slate-800/50 border-indigo-500/30 text-white placeholder:text-slate-500 focus:border-indigo-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-slate-300">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-slate-800/50 border-indigo-500/30 text-white placeholder:text-slate-500 focus:border-indigo-500"
                    placeholder="Your company name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-300">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-slate-800/50 border-indigo-500/30 text-white placeholder:text-slate-500 focus:border-indigo-500 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white py-6 text-lg group"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
