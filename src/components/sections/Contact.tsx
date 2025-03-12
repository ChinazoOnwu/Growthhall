
import { useEffect, useRef, useState } from 'react';
import { AnimatedButton } from '../ui/AnimatedButton';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
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

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-navy/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
          <span className="inline-block text-sm font-medium text-gold mb-3">CONTACT US</span>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-navy mb-6">
            Let's Start a Conversation
          </h2>
          <p className="text-navy-light text-lg">
            Ready to transform your business? Reach out to discuss how GrowthHall can help you achieve your strategic objectives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-white rounded-lg shadow-xl p-8 fade-in-section">
            <h3 className="heading-accent text-2xl font-bold text-navy mb-8">Get in Touch</h3>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
                <p className="text-lg font-medium mb-2">Thank you for reaching out!</p>
                <p>Your message has been received. Our team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy-light mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy-light mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-navy-light mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-transparent transition-all duration-300"
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy-light mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-transparent transition-all duration-300"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <AnimatedButton 
                      type="submit" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </AnimatedButton>
                  </div>
                </div>
              </form>
            )}
          </div>
          
          <div className="flex flex-col space-y-6 fade-in-section">
            <div className="bg-navy text-white rounded-lg shadow-xl p-8 flex-1">
              <h3 className="text-2xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-gold">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Our Location</h4>
                    <p className="text-white/80">One Financial Center, Boston, MA 02111</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Phone Number</h4>
                    <p className="text-white/80">+1 (617) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Email Address</h4>
                    <p className="text-white/80">contact@growthhall.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Working Hours</h4>
                    <p className="text-white/80">Monday - Friday: 9am - 6pm EST</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gold/90 text-navy rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-3">Ready to Transform Your Business?</h3>
              <p className="mb-6">Schedule a free 30-minute strategy session with our senior consultants.</p>
              <AnimatedButton variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                Book a Consultation
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
