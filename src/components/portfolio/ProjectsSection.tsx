import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import plumtechScreenshot from "@/assets/plumtech-screenshot.png";
import fittrakrScreenshot from "@/assets/fittrakr-screenshot.png";
import devlinkvaultScreenshot from "@/assets/devlinkvault-screenshot.png";

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: "PlumTech – E-commerce Store",
      description: "Designed and built a high-fidelity, Apple-style ecommerce site to demonstrate advanced frontend capabilities. Built dynamic routing for product categories (Phones, Laptops, Audio). Created a global cart system using Zustand, with item quantity controls and total calculation. Focused on polished UI, smooth user interactions, and responsive design across all devices.",
      technologies: ["React", "Next.js", "TypeScript", "Zustand", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/ChrisMerinoDev/PlumTech",
      live: "https://plum-tech.vercel.app/",
      featured: true,
      screenshot: plumtechScreenshot
    },
    {
      title: "FitTrakr – Fitness Tracker App",
      description: "Full-stack workout tracker with full CRUD for workouts and exercises. Implemented JWT authentication, protected routes, and session handling. Used Zod for robust server-side and client-side validation. Responsive dashboard with mobile-first UI and stateful user experience.",
      technologies: ["React", "Next.js", "TypeScript", "MongoDB", "Zustand", "Zod", "Tailwind CSS"],
      github: "https://github.com/ChrisMerinoDev/fit-trakr",
      live: "https://fit-trakr.vercel.app/",
      featured: true,
      screenshot: fittrakrScreenshot
    },
    {
      title: "DevLinkVault",
      description: "A Linktree-style full-stack app for storing developer links. Integrated user registration/login, protected pages, and persistent storage. Used Zod for schema validation on both the frontend and API routes. Focused on clean UX, accessible forms, and responsive layout.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Zod", "Tailwind CSS"],
      github: "https://github.com/ChrisMerinoDev/DevLinkVault",
      live: "https://dev-link-vault.vercel.app/",
      featured: false,
      screenshot: devlinkvaultScreenshot
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="transition-all duration-1000 opacity-100 translate-y-0">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground text-xl mt-6 max-w-2xl mx-auto">
              A showcase of my latest work demonstrating expertise in modern web development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="transition-all duration-700 opacity-100 translate-y-0"
              >
                <Card className={`hover-lift ${project.featured ? 'ring-2 ring-primary/20' : ''}`}>
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Project Info */}
                    <div className="p-8 lg:p-12">
                      <CardHeader className="p-0 mb-6">
                        <div className="flex items-center space-x-3 mb-3">
                          {project.featured && (
                            <Badge className="bg-primary text-primary-foreground">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-2xl lg:text-3xl text-foreground">
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="p-0">
                        <CardDescription className="text-muted-foreground text-lg leading-relaxed mb-6">
                          {project.description}
                        </CardDescription>

                        {/* Technologies */}
                        <div className="mb-8">
                          <h4 className="text-foreground font-semibold mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-sm">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-4">
                          <Button asChild className="flex-1 sm:flex-none">
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                          <Button variant="outline" asChild className="flex-1 sm:flex-none">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              GitHub
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </div>

                    {/* Project Screenshot */}
                    <div className="p-4 lg:p-8 flex items-center justify-center bg-muted/30">
                      <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg border bg-background">
                        <img 
                          src={project.screenshot} 
                          alt={`${project.title} screenshot`}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-16 transition-all duration-700 opacity-100 translate-y-0">
            <p className="text-muted-foreground text-lg mb-6">
              Want to see more of my work?
            </p>
            <Button size="lg" variant="outline" asChild className="glow-effect">
              <a href="https://github.com/ChrisMerinoDev" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                Visit My GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;