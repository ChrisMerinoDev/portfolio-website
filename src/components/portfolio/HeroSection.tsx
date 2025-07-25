import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/10 animate-float" />
        <div className="absolute -bottom-40 -left-40 w-60 h-60 rounded-full bg-white/5 animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center space-y-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white animate-fade-in-up">
              Chris Merino
            </h1>
            <div className="relative">
              <h2 className="text-2xl md:text-4xl font-light text-white/90 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Frontend Developer
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white/60 rounded-full animate-scale-in" style={{ animationDelay: "0.4s" }} />
            </div>
          </div>

          {/* Location */}
          <div className={`flex items-center justify-center space-x-2 text-white/80 transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: "0.6s" }}>
            <MapPin className="w-5 h-5" />
            <span className="text-lg">Miami, FL</span>
          </div>

          {/* Description */}
          <p className={`text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: "0.8s" }}>
            Frontend Developer passionate about building responsive, accessible, and visually engaging applications with modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8 transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: "1s" }}>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 glow-effect font-semibold px-8 py-3 text-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                asChild
              >
                <a href="https://github.com/ChrisMerinoDev" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                asChild
              >
                <a href="https://www.linkedin.com/in/chrismerinodev/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                asChild
              >
                <a href="mailto:merinochrisdm@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact
                </a>
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: "1.2s" }}>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white/60 hover:text-white transition-colors animate-bounce"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;