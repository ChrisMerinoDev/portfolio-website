import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedProgress, setAnimatedProgress] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = {
    "Languages": [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 }
    ],
    "Frameworks & Libraries": [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 }
    ],
    "Styling & State Management": [
      { name: "Tailwind CSS", level: 95 },
      { name: "ShadCN", level: 85 },
      { name: "Zustand", level: 80 },
      { name: "React Context API", level: 75 }
    ],
    "Tools & Database": [
      { name: "Git & GitHub", level: 85 },
      { name: "Vercel", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "MongoDB", level: 70 }
    ]
  };

  const additionalSkills = [
    "Zod", "Custom Form Validation", "REST APIs", "Framer Motion", 
    "Responsive Design", "Cloudinary", "CRUD Operations", "JWT Authentication"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate progress bars
          Object.entries(skillCategories).forEach(([category, skills]) => {
            skills.forEach((skill, index) => {
              setTimeout(() => {
                setAnimatedProgress(prev => ({
                  ...prev,
                  [skill.name]: skill.level
                }));
              }, index * 100);
            });
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground text-xl mt-6 max-w-2xl mx-auto">
              A comprehensive set of modern technologies and tools for building exceptional web applications
            </p>
          </div>

          {/* Skill Categories with Progress Bars */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
              <div 
                key={category}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${categoryIndex * 0.2}s` }}
              >
                <Card className="hover-lift h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground flex items-center space-x-2">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                      <span>{category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {skills.map((skill, index) => (
                      <div 
                        key={skill.name}
                        className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                        style={{ transitionDelay: `${categoryIndex * 0.2 + index * 0.1}s` }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-foreground font-medium">{skill.name}</span>
                          <span className="text-primary font-semibold">{animatedProgress[skill.name] || 0}%</span>
                        </div>
                        <Progress 
                          value={animatedProgress[skill.name] || 0} 
                          className="h-2"
                        />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: "0.8s" }}>
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-xl text-foreground text-center">
                  Additional Technologies & Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3 justify-center">
                  {additionalSkills.map((skill, index) => (
                    <Badge 
                      key={skill}
                      variant="secondary" 
                      className={`text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                      style={{ animationDelay: `${1 + index * 0.05}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;