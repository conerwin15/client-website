import { Bot, UserCircle, Headset, GraduationCap, Shield, Zap, BarChart, Globe } from 'lucide-react';
import { Service, Testimonial, FAQItem, TeamMember } from './types';

export const SERVICES: Service[] = [
  {
    id: 'reallybot',
    title: 'ReallyBot (AI Chatbot)',
    description: 'Automated customer service chatbot that integrates seamlessly with your website and social media platforms.',
    icon: Bot,
    features: [
      '24/7 Automated Responses',
      'Natural Language Processing',
      'Multi-platform Integration',
      'Customizable Personality'
    ],
    benefits: [
      'Reduce support costs by 40%',
      'Instant response time',
      'Scalable customer handling',
      'Improved user satisfaction'
    ],
    image: 'https://picsum.photos/seed/chatbot/800/600'
  },
  {
    id: 'reallyavatar',
    title: 'ReallyAvatar (AI Avatar)',
    description: 'AI-powered virtual assistants for immersive customer interaction and professional presentations.',
    icon: UserCircle,
    features: [
      'Realistic Human-like Avatars',
      'Voice Synthesis in 50+ Languages',
      'Interactive Real-time Responses',
      'Brand-specific Customization'
    ],
    benefits: [
      'Enhanced brand engagement',
      'Memorable customer experiences',
      'Consistent presentation quality',
      'Global reach with multi-language support'
    ],
    image: 'https://picsum.photos/seed/avatar/800/600'
  },
  {
    id: 'ai-support',
    title: 'AI Customer Support',
    description: 'Automated help desk and smart response systems to streamline your support operations.',
    icon: Headset,
    features: [
      'Smart Ticket Routing',
      'Automated FAQ Resolution',
      'Sentiment Analysis',
      'Agent Assistance Tools'
    ],
    benefits: [
      'Faster resolution times',
      'Reduced agent burnout',
      'Data-driven support insights',
      'Consistent support quality'
    ],
    image: 'https://picsum.photos/seed/support/800/600'
  },
  {
    id: 'ai-learning',
    title: 'AI Learning Assistance',
    description: 'Educational AI solutions designed to support student learning and personalized education.',
    icon: GraduationCap,
    features: [
      'Personalized Study Plans',
      'AI Tutoring & Feedback',
      'Interactive Learning Content',
      'Progress Tracking & Analytics'
    ],
    benefits: [
      'Improved student outcomes',
      'Accessible 24/7 tutoring',
      'Tailored educational experiences',
      'Empowered self-paced learning'
    ],
    image: 'https://picsum.photos/seed/learning/800/600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechFlow Inc.',
    content: 'ReallyBot has transformed our customer support. We saw a 50% reduction in ticket volume within the first month.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Director of Innovation',
    company: 'EduSmart',
    content: 'The AI Learning Assistance tools have been a game-changer for our students. Personalized learning is finally a reality.',
    avatar: 'https://i.pravatar.cc/150?u=michael'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Marketing Manager',
    company: 'Global Retail',
    content: 'ReallyAvatar gave our brand a face. The engagement on our landing pages has tripled since implementation.',
    avatar: 'https://i.pravatar.cc/150?u=elena'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: '1',
    question: 'How long does it take to implement ReallyBot?',
    answer: 'Basic implementation can be done in as little as 48 hours. Custom enterprise solutions typically take 2-4 weeks depending on complexity.'
  },
  {
    id: '2',
    question: 'Can ReallyAvatar speak multiple languages?',
    answer: 'Yes, ReallyAvatar supports over 50 languages with natural-sounding voice synthesis and localized gestures.'
  },
  {
    id: '3',
    question: 'Is my data secure with your AI solutions?',
    answer: 'Security is our top priority. We use enterprise-grade encryption and comply with GDPR and other major data protection regulations.'
  },
  {
    id: '4',
    question: 'Do you offer custom AI development?',
    answer: 'Absolutely. While we have flagship products, we also provide bespoke AI solutions tailored to specific business needs.'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Aris Thorne',
    role: 'CEO & Founder',
    image: 'https://i.pravatar.cc/150?u=aris',
    bio: 'AI visionary with 15+ years of experience in machine learning and neural networks.'
  },
  {
    id: '2',
    name: 'Lila Vance',
    role: 'Head of AI Development',
    image: 'https://i.pravatar.cc/150?u=lila',
    bio: 'Expert in NLP and conversational AI, previously led teams at major tech giants.'
  },
  {
    id: '3',
    name: 'Marcus Reed',
    role: 'Chief Product Officer',
    image: 'https://i.pravatar.cc/150?u=marcus',
    bio: 'Passionate about creating intuitive user experiences through advanced technology.'
  }
];

export const BENEFITS = [
  {
    title: 'Increased Efficiency',
    description: 'Automate repetitive tasks and focus your human talent on high-value creative work.',
    icon: Zap
  },
  {
    title: 'Data-Driven Insights',
    description: 'Gain deep understanding of customer behavior and operational patterns through AI analytics.',
    icon: BarChart
  },
  {
    title: 'Global Scalability',
    description: 'Expand your reach effortlessly with multi-language support and 24/7 availability.',
    icon: Globe
  },
  {
    title: 'Enhanced Security',
    description: 'Protect your data with AI-powered threat detection and enterprise-grade encryption.',
    icon: Shield
  }
];
