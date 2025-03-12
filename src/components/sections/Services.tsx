
import { useEffect, useRef, useState } from 'react';
import { Briefcase, Building, Coins, Zap, Shield, Activity } from 'lucide-react';
import { AnimatedButton } from '../ui/AnimatedButton';

const services = [
  {
    icon: Briefcase,
    title: "Strategic Consulting",
    description: "Develop comprehensive strategies aligned with your business goals to drive sustainable growth and competitive advantage.",
    color: "text-gold",
    bg: "bg-gold/10"
  },
  {
    icon: Building,
    title: "Organizational Transformation",
    description: "Redesign organizational structures and processes to enhance efficiency, agility, and innovation capabilities.",
    color: "text-navy",
    bg: "bg-navy/10"
  },
  {
    icon: Coins,
    title: "Financial Advisory",
    description: "Optimize financial performance through detailed analysis, cost optimization, and revenue enhancement strategies.",
    color: "text-gold",
    bg: "bg-gold/10"
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Implement cutting-edge technologies and digital strategies to modernize operations and create new value propositions.",
    color: "text-navy",
    bg: "bg-navy/10"
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Identify, assess, and mitigate business risks through comprehensive risk management frameworks and protocols.",
    color: "text-gold",
    bg: "bg-gold/10"
  },
  {
    icon: Activity,
    title: "Performance Optimization",
    description: "Enhance operational performance through data-driven insights, process improvements, and best practice implementation.",
    color: "text-navy",
    bg: "bg-navy/10"
  }
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-navy/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
          <span className="inline-block text-sm font-medium text-gold mb-3">OUR SERVICES</span>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-navy mb-6">
            Comprehensive Solutions for Complex Challenges
          </h2>
          <p className="text-navy-light text-lg">
            We offer specialized consulting services tailored to the unique needs of fintech, telecommunications, healthcare, and media companies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group bg-white rounded-lg p-8 shadow-md transition-all duration-500 hover:shadow-xl border border-transparent hover:border-gold/20 fade-in-section ${
                index === activeIndex ? 'ring-1 ring-gold' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className={`${service.bg} ${service.color} p-3 rounded-lg inline-block mb-4 transition-all duration-300 group-hover:scale-110`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3 transition-all duration-300 group-hover:text-gold">
                {service.title}
              </h3>
              <p className="text-navy-light mb-6">
                {service.description}
              </p>
              <div className="h-0.5 w-0 bg-gold transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center fade-in-section">
          <AnimatedButton>
            Explore All Services
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default Services;
