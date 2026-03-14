import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Twitter, Linkedin, Github, Facebook } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      subDetails: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'contact@reallyai.com',
      subDetails: 'Online support 24/7'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 AI Innovation Way',
      subDetails: 'Tech Valley, CA 94043'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: '9:00 AM - 6:00 PM',
      subDetails: 'Monday to Friday'
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-8"
          >
            Get in <span className="text-blue-600">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Have a question or ready to start your AI journey? Our team of experts is here to help you navigate the future of technology.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
                <div className="grid grid-cols-1 gap-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-blue-50 p-3 rounded-xl">
                        <info.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{info.title}</h4>
                        <p className="text-slate-600 font-medium">{info.details}</p>
                        <p className="text-sm text-slate-400">{info.subDetails}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Follow Our Journey</h3>
                <div className="flex space-x-4">
                  {[Twitter, Linkedin, Github, Facebook].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-slate-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639290622367!2d-122.08374688469212!3d37.42199987982517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1647254321000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ReallyAI HQ Location"
        ></iframe>
        <div className="absolute top-10 left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block max-w-xs">
          <h4 className="font-bold text-slate-900 mb-2">Our Headquarters</h4>
          <p className="text-sm text-slate-600 mb-4">Visit us at our innovation hub in the heart of Silicon Valley.</p>
          <button className="text-blue-600 font-bold text-sm hover:underline">Get Directions</button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
