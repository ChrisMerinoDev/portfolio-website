import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

const ContactSection = () => {
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

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "merinochrisdm@gmail.com",
      href: "mailto:merinochrisdm@gmail.com",
      description: "Send me an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "(813) 475-0315",
      href: "tel:(813) 475-0315",
      description: "Call me during business hours"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Miami, FL",
      href: null,
      description: "Available for local opportunities"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      href: "https://github.com/ChrisMerinoDev",
      description: "Check out my repositories"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/chrismerinodev/",
      description: "Let's connect professionally"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground text-xl mt-6 max-w-2xl mx-auto">
              Ready to contribute clean, scalable code and grow with a modern development team
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: "0.2s" }}>
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    I'm actively seeking entry-level frontend developer opportunities where I can contribute 
                    to meaningful projects and continue growing my skills in a collaborative environment.
                  </p>
                  
                  <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <div 
                        key={method.title}
                        className={`flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}
                        style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <method.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{method.title}</h4>
                          {method.href ? (
                            <a 
                              href={method.href} 
                              className="text-primary hover:underline font-medium"
                            >
                              {method.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground font-medium">{method.value}</p>
                          )}
                          <p className="text-sm text-muted-foreground">{method.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links & CTA */}
            <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: "0.4s" }}>
              {/* Social Links */}
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">
                    Connect Online
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={link.title}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-all duration-300 group ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}
                      style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <link.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {link.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className={`hover-lift hero-gradient transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: "0.8s" }}>
                <CardContent className="p-8 text-center text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to Work Together?
                  </h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    I'm excited about opportunities to contribute to innovative projects and grow as a developer.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 glow-effect font-semibold"
                    asChild
                  >
                    <a href="mailto:merinochrisdm@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Start a Conversation
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;