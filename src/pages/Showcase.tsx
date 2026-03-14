import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Search, Layout, Database, Cpu } from 'lucide-react';
import CTASection from '../components/CTASection';

const Showcase = () => {
  const projects = [
    {
      title: 'ReallyBot Dashboard',
      category: 'System Interface',
      image: 'https://picsum.photos/seed/dashboard1/800/600',
      icon: Layout
    },
    {
      title: 'AI Analytics Engine',
      category: 'Data Visualization',
      image: 'https://picsum.photos/seed/analytics/800/600',
      icon: Database
    },
    {
      title: 'ReallyAvatar Studio',
      category: 'Creation Tool',
      image: 'https://picsum.photos/seed/studio/800/600',
      icon: Cpu
    },
    {
      title: 'Smart Support Portal',
      category: 'Customer Service',
      image: 'https://picsum.photos/seed/portal/800/600',
      icon: Search
    },
    {
      title: 'Learning Management AI',
      category: 'Education',
      image: 'https://picsum.photos/seed/edu-ai/800/600',
      icon: Layout
    },
    {
      title: 'Neural Network Visualizer',
      category: 'Technology Demo',
      image: 'https://picsum.photos/seed/neural/800/600',
      icon: Cpu
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-8"
          >
            Product <span className="text-blue-600">Showcase</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            A visual journey through our AI interfaces, dashboards, and technology demonstrations.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                    {project.title}
                  </h3>
                  <button className="inline-flex items-center text-white font-semibold text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-300">
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Showcase;
