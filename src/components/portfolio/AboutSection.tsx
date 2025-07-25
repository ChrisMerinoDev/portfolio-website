import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    "Project-driven developer with strong hands-on experience",
    "Skilled in modern React ecosystem and TypeScript",
    "Focus on responsive, accessible web applications",
    "Experience with full-stack development and CRUD operations",
    "Passionate about clean, scalable code and modern dev practices"
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Professional Summary */}
            <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: "0.2s" }}>
              <Card className="hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Professional Summary
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Project-driven Frontend Developer skilled in React, Next.js, TypeScript, and Tailwind CSS. 
                    Passionate about building responsive, accessible, and visually engaging applications. Proven ability to build 
                    fully functional, production-ready apps — both frontend-focused and full-stack.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                    Seeking an entry-level opportunity to contribute clean, scalable code and grow with a modern dev team.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Key Highlights */}
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: "0.4s" }}>
              <Card className="hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    Key Highlights
                  </h3>
                  <div className="space-y-4">
                    {highlights.map((highlight, index) => (
                      <div 
                        key={index}
                        className={`flex items-start space-x-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}
                        style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                        <p className="text-muted-foreground text-lg">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className={`grid md:grid-cols-3 gap-6 mt-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: "0.8s" }}>
            <Card className="hover-lift text-center">
              <CardContent className="p-6">
                <div className="text-primary text-2xl mb-2">📧</div>
                <h4 className="font-semibold text-foreground mb-1">Email</h4>
                <a href="mailto:merinochrisdm@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  merinochrisdm@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="hover-lift text-center">
              <CardContent className="p-6">
                <div className="text-primary text-2xl mb-2">📞</div>
                <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                <a href="tel:(813) 475-0315" className="text-muted-foreground hover:text-primary transition-colors">
                  (813) 475-0315
                </a>
              </CardContent>
            </Card>

            <Card className="hover-lift text-center">
              <CardContent className="p-6">
                <div className="text-primary text-2xl mb-2">📍</div>
                <h4 className="font-semibold text-foreground mb-1">Location</h4>
                <p className="text-muted-foreground">Miami, FL</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;