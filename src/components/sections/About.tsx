
import { useEffect, useRef } from 'react';
import { Award, Target, Lightbulb, BarChart3 } from 'lucide-react';

const About = () => {
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

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-navy/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
          <span className="inline-block text-sm font-medium text-gold mb-3">ABOUT US</span>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-navy mb-6">
            Guiding Businesses to Excellence
          </h2>
          <p className="text-navy-light text-lg">
            Our team of expert consultants combines deep industry knowledge with innovative strategies to help businesses overcome challenges and capture new opportunities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-section">
            <div className="relative">
              <div className="absolute inset-0 translate-x-3 translate-y-3 border-2 border-gold rounded-lg"></div>
              <div className="relative bg-white rounded-lg shadow-lg p-8 z-10">
                <h3 className="heading-accent text-2xl font-bold text-navy mb-6">Our Approach</h3>
                <p className="text-navy-light mb-6">
                  At GrowthHall, we take a strategic, data-driven approach to every challenge. We don't believe in one-size-fits-all solutions—instead, we develop tailored strategies that address your specific business needs and objectives.
                </p>
                <p className="text-navy-light">
                  Our consultants bring diverse expertise across industries, allowing us to provide comprehensive guidance and implement transformative changes that drive real results.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl fade-in-section">
              <Award className="h-10 w-10 text-gold mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">Excellence</h3>
              <p className="text-navy-light">We strive for excellence in every project we undertake.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl fade-in-section" style={{ animationDelay: '100ms' }}>
              <Target className="h-10 w-10 text-gold mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">Precision</h3>
              <p className="text-navy-light">Strategic precision guides our approach to problem-solving.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl fade-in-section" style={{ animationDelay: '200ms' }}>
              <Lightbulb className="h-10 w-10 text-gold mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">Innovation</h3>
              <p className="text-navy-light">We embrace innovation to deliver cutting-edge solutions.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl fade-in-section" style={{ animationDelay: '300ms' }}>
              <BarChart3 className="h-10 w-10 text-gold mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">Results</h3>
              <p className="text-navy-light">Our focus is on delivering measurable, sustainable results.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
