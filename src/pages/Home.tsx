import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, CheckCircle2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, BENEFITS } from '../constants';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-0 w-1/2 h-1/2 bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full">
                <Star className="w-4 h-4 text-blue-600 fill-blue-600" />
                <span className="text-sm font-bold text-blue-700 uppercase tracking-wider">Next-Gen AI Solutions</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1]">
                Transform Your <br />
                <span className="text-blue-600">Business with AI</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                Empower your team and delight your customers with ReallyAI's suite of intelligent chatbots, avatars, and support tools.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="w-full sm:w-auto flex items-center justify-center space-x-3 px-8 py-4 text-slate-700 font-bold hover:text-blue-600 transition-colors group">
                  <div className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:border-blue-600 transition-colors">
                    <Play className="w-5 h-5 fill-slate-700 group-hover:fill-blue-600 transition-colors" />
                  </div>
                  <span>Watch Demo</span>
                </button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?u=${i}`}
                      alt="User"
                      className="w-10 h-10 rounded-full border-2 border-white"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-500">
                  <span className="font-bold text-slate-900">500+</span> companies trust us
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-white p-4 rounded-[2.5rem] shadow-2xl border border-slate-100">
                <img
                  src="https://picsum.photos/seed/tech-hero/800/800"
                  alt="AI Technology"
                  className="rounded-[2rem] w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Floating UI elements */}
                <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 hidden md:block animate-bounce-slow">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">AI Accuracy</p>
                      <p className="text-lg font-bold text-slate-900">99.8%</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Background circles */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-blue-100 rounded-full"></div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-blue-50 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Advanced AI Solutions for Every Need</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              From customer engagement to educational tools, our AI products are designed to solve real-world challenges with precision and empathy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Why Choose Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900">Experience the Power of Intelligent Automation</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                We don't just build AI; we build solutions that integrate seamlessly into your existing workflows, providing immediate value and long-term growth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {BENEFITS.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                      <benefit.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{benefit.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/seed/benefits/800/600"
                alt="AI Benefits"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-blue-600 p-10 rounded-3xl shadow-xl text-white hidden md:block">
                <p className="text-5xl font-bold mb-2">10x</p>
                <p className="text-blue-100 font-medium">Faster Response Times</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Success Stories</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Trusted by Industry Leaders</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Home;
