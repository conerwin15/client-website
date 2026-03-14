import React from 'react';
import { Testimonial } from '../types';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative">
      <Quote className="absolute top-6 right-8 w-10 h-10 text-blue-50 opacity-50" />
      <p className="text-slate-600 italic mb-8 relative z-10">
        "{testimonial.content}"
      </p>
      <div className="flex items-center">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-blue-100"
          referrerPolicy="no-referrer"
        />
        <div>
          <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
          <p className="text-xs text-slate-500">{testimonial.role}, {testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
