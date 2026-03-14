import React from 'react';
import { motion } from 'motion/react';
import { TEAM } from '../constants';
import { CheckCircle2, Target, Eye, Users } from 'lucide-react';
import CTASection from '../components/CTASection';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-8"
            >
              Pioneering the <br />
              <span className="text-blue-500">AI Revolution</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400 leading-relaxed"
            >
              ReallyAI Solutions was founded with a simple mission: to make advanced artificial intelligence accessible, practical, and human-centric for businesses and students worldwide.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-12 rounded-3xl border border-slate-100"
            >
              <div className="bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To empower every organization and individual with intelligent AI tools that enhance productivity, foster learning, and create meaningful connections in a digital-first world.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-12 rounded-3xl border border-slate-100"
            >
              <div className="bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To be the global leader in ethical AI solutions, recognized for our commitment to innovation, user privacy, and the positive transformation of how society interacts with technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img
                src="https://picsum.photos/seed/office/800/600"
                alt="Our Office"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-10 -right-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-slate-900">50+</p>
                    <p className="text-sm text-slate-500 font-medium">Expert Developers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Story</h2>
              <h3 className="text-4xl font-bold text-slate-900">From a Small Lab to Global AI Leader</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Starting as a research project in 2018, ReallyAI has grown into a powerhouse of innovation. We've spent years perfecting our neural networks and natural language processing engines to ensure they don't just process data, but understand context and emotion.
              </p>
              <ul className="space-y-4">
                {[
                  'Built on ethical AI principles',
                  'Proprietary NLP technology',
                  'Global team of researchers and engineers',
                  'Customer-centric development approach'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">The Minds Behind ReallyAI</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Led by Visionaries, Driven by Excellence</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TEAM.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-8 inline-block">
                  <div className="absolute inset-0 bg-blue-600 rounded-full scale-0 group-hover:scale-105 transition-transform duration-500 opacity-10"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg relative z-10"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-semibold mb-4 uppercase tracking-wider text-xs">{member.role}</p>
                <p className="text-slate-500 leading-relaxed max-w-xs mx-auto">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default About;
