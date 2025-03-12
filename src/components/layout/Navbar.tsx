import { useState, useEffect } from "react";
import { AnimatedButton } from "../ui/AnimatedButton";
import { Menu, X } from "lucide-react";
import Logo from "../ui/Logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <Logo />
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            <a href="#about" className="text-navy-light hover:text-navy font-medium transition-colors">
              About
            </a>
            <a href="#services" className="text-navy-light hover:text-navy font-medium transition-colors">
              Services
            </a>
            <a href="#testimonials" className="text-navy-light hover:text-navy font-medium transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-navy-light hover:text-navy font-medium transition-colors">
              Contact
            </a>
          </div>
          
          <div className="hidden md:block">
            <AnimatedButton variant="default" size="sm">
              Get Started
            </AnimatedButton>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-navy p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
        
        {/* Mobile menu */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#about" 
              className="block py-3 px-4 text-navy font-medium hover:bg-navy-light/10 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="block py-3 px-4 text-navy font-medium hover:bg-navy-light/10 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#testimonials" 
              className="block py-3 px-4 text-navy font-medium hover:bg-navy-light/10 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="block py-3 px-4 text-navy font-medium hover:bg-navy-light/10 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="py-3 px-4">
              <AnimatedButton className="w-full">
                Get Started
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
