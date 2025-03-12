
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote: "GrowthHall transformed our approach to digital payments, resulting in a 43% increase in transaction volume and significantly improved customer satisfaction scores.",
    author: "Michael Chen",
    position: "CEO, FinTech Innovations Inc.",
    company: "Fintech",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
  },
  {
    quote: "The strategic roadmap developed by GrowthHall helped us navigate a complex regulatory environment while accelerating our market expansion. Their expertise was invaluable.",
    author: "Sarah Johnson",
    position: "COO, TeleCorp Global",
    company: "Telecommunications",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop"
  },
  {
    quote: "Working with GrowthHall on our patient engagement platform resulted in improved healthcare outcomes and a 30% reduction in readmission rates. Their industry knowledge is unparalleled.",
    author: "Dr. Rajiv Patel",
    position: "Director, MediTech Solutions",
    company: "Healthcare",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
  },
  {
    quote: "GrowthHall's content monetization strategy revolutionized our revenue model, resulting in a 65% increase in digital subscription growth in just six months.",
    author: "Emma Rodriguez",
    position: "CRO, MediaSphere",
    company: "Media",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
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
      handleNext();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 bg-navy text-white relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
          <span className="inline-block text-sm font-medium text-gold mb-3">TESTIMONIALS</span>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6">
            Client Success Stories
          </h2>
          <p className="text-white/80 text-lg">
            Hear from our clients about how GrowthHall has helped transform their businesses and drive remarkable results.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto fade-in-section">
          <div className="bg-white/10 backdrop-blur-lg p-8 md:p-12 rounded-2xl border border-white/20">
            <div className="flex flex-col items-center text-center">
              <div className="text-6xl text-gold mb-6">"</div>
              <p className="text-xl md:text-2xl font-sans italic text-white mb-8">
                {testimonials[activeIndex].quote}
              </p>
              <div className="flex items-center flex-col">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4 ring-2 ring-gold">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-white">{testimonials[activeIndex].author}</h4>
                  <p className="text-white/70 text-sm">{testimonials[activeIndex].position}</p>
                  <span className="inline-block mt-2 text-xs font-medium text-gold uppercase tracking-wider">
                    {testimonials[activeIndex].company}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <button 
              onClick={handlePrev}
              className="bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              className="bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                index === activeIndex ? 'bg-gold w-6' : 'bg-white/30 hover:bg-white/50'
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center fade-in-section">
          <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            <p className="text-3xl font-bold text-gold mb-2">87%</p>
            <p className="text-white/70 text-sm">Average ROI</p>
          </div>
          <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            <p className="text-3xl font-bold text-gold mb-2">92%</p>
            <p className="text-white/70 text-sm">Client Retention</p>
          </div>
          <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            <p className="text-3xl font-bold text-gold mb-2">35+</p>
            <p className="text-white/70 text-sm">Industry Awards</p>
          </div>
          <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            <p className="text-3xl font-bold text-gold mb-2">4.9/5</p>
            <p className="text-white/70 text-sm">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
