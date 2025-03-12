import { useEffect, useRef } from "react";
import { AnimatedButton } from "../ui/AnimatedButton";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!bgRef.current) return;

      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const moveX = (clientX - centerX) / 50;
      const moveY = (clientY - centerY) / 50;

      bgRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          ref={bgRef}
          className="absolute inset-0 transition-transform duration-300 ease-out"
        >
          <div className="absolute top-20 right-1/3 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-navy/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-20 w-96 h-96 bg-navy/10 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 rounded-full bg-navy/5 px-3 py-1 text-sm font-medium text-navy ring-1 ring-inset ring-navy/20 backdrop-blur-sm animate-fade-in">
            Business Consulting for Industry Leaders
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold leading-tight text-navy mb-6 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            Catalyzing <span className="text-gold">Growth</span> & Driving{" "}
            <span className="text-gold">Innovation</span>
          </h1>

          <p
            className="text-lg md:text-xl text-navy-light mb-10 max-w-3xl mx-auto animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            GrowthHall provides strategic consulting services to transform
            businesses in fintech, telecommunications, healthcare, and media
            sectors, delivering measurable results and sustainable growth.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "600ms" }}
          >
            {/* <AnimatedButton size="lg">
              Schedule Consultation
            </AnimatedButton>
            <a href="#services" className="group inline-flex items-center px-4 py-2 text-navy hover:text-gold transition-colors duration-300">
              Explore Our Services <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a> */}
            <AnimatedButton
              size="lg"
              onClick={() => {
                window.location.href =
                  "mailto:chinazo@uxndesign.com?subject=Schedule%20Consultation&body=Hi%20team,%20I%20would%20like%20to%20schedule%20a%20consultation.";
              }}
            >
              Schedule Consultation
            </AnimatedButton>
          </div>

          <div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up"
            style={{ animationDelay: "800ms" }}
          >
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-navy">250+</span>
              <span className="text-navy-light text-sm">Clients Worldwide</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-navy">95%</span>
              <span className="text-navy-light text-sm">Success Rate</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-navy">$2B+</span>
              <span className="text-navy-light text-sm">Revenue Generated</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-navy">15+</span>
              <span className="text-navy-light text-sm">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
