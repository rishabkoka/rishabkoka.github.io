import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, ExternalLink, Sun, Moon } from 'lucide-react';

const Portfolio = () => {
  const [theme, setTheme] = useState('dark');

  // Toggle theme and update document class
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  // Initialize theme on mount
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const projects = [
    {
      title: "MyTree",
      description: "A social networking platform for eco-conscious users built with React.js, Node.js, and Firebase Firestore.",
      details: [
        "Enabled users to log daily activities and calculate carbon footprint scores",
        "Implemented group features and challenges for social engagement",
        "Integrated cloud functions for real-time updates"
      ],
      tech: ["React.js", "Node.js", "Firebase", "Git"],
      github: "https://github.com/bdgillis/CS307-myTree"
    },
    {
      title: "Task Master",
      description: "A Basic Todo list website that allow users to trake their progress on all their different activities built with flask",
      details: [
        "Allows users to create tasks with due dates",
        "Endables users to update their tasks and change level of progress on a given task",
        "Sorts the task in order of due dates to make it easy for the user"
      ],
      tech: ["Flask", "SQLAlchemy", "Git"],
      github: "https://github.com/rishabkoka/Task-Master"
    },
    {
      title: "Personal Portfolio",
      description: "A Basic Todo list website that allow users to trake their progress on all their different activities built with flask",
      details: [
        "Allows users to create tasks with due dates",
        "Endables users to update their tasks and change level of progress on a given task",
        "Sorts the task in order of due dates to make it easy for the user"
      ],
      tech: ["Vite", "Node.js", "Git"],
      github: "https://github.com/rishabkoka/rishabkoka.github.io"
    }
    // {
    //   title: "Simple C Compiler",
    //   description: "A compiler for C language built using Lex and Yacc.",
    //   details: [
    //     "Created using Lex and Yacc with knowledge of X86-64 Assembly",
    //     "Supports basic C operations and loop structures",
    //     "Handles mathematical expressions and logic operations"
    //   ],
    //   tech: ["C", "Lex", "Yacc", "Assembly"],
    //   github: "https://github.com/RKOKA209/SimpleCompiler"
    // }
  ];


  const projectsNoGitHub = [
    {
      title: "Simple C Compiler",
      description: "A compiler for C language built using Lex and Yacc.",
      details: [
        "Created using Lex and Yacc with knowledge of X86-64 Assembly",
        "Supports basic C operations and loop structures",
        "Handles mathematical expressions and logic operations"
      ],
      tech: ["C", "Lex", "Yacc", "Assembly"],
    }
  ];


  const experience = [
    {
      company: "AssetMark",
      role: "Salesforce Developer Intern",
      period: "Jun 2024 - Aug 2024",
      details: [
        "Developed AI-driven automation solutions using Einstein Copilot",
        "Conducted research on Salesforce Einstein AI integration",
        "Collaborated with Solution Engineers on proof of concept"
      ]
    },
    {
      company: "Purdue University IT",
      role: "Tech Representative",
      period: "Apr 2022 - Present",
      details: [
        "Provided technical support for university digital services",
        "Assisted students, faculty, and alumni with IT infrastructure issues"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200 p-8">
      {/* Theme Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="fixed top-4 right-4"
      >
        {theme === 'light' ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
      
      {/* Header Section */}
      <header className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Rishab Koka</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          Computer Science Senior @ Purdue University
        </p>
        <div className="flex justify-center gap-4">
          <a href="mailto:koka.rishab@gmail.com" 
             className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
            <Mail size={20} /> Email
          </a>
          <a href="tel:+14085124766" 
             className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
            <Phone size={20} /> Phone
          </a>
          <a href="https://github.com/rishabkoka" 
             className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
             target="_blank"
             rel="noopener noreferrer">
            <Github size={20} /> GitHub
          </a>
          <a href="https://linkedin.com/in/rishab-koka" 
             className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
             target="_blank"
             rel="noopener noreferrer">
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto">
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          {/* Projects Tab */}
          <TabsContent value="projects">
            <div className="grid gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        title="View on GitHub"
                      >
                        <Github size={24} />
                      </a>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 mb-4">
                      {project.details.map((detail, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-400">{detail}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} 
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                      View Project on GitHub
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <br></br>

            <div className="grid gap-6">
              {projectsNoGitHub.map((project, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </div>
                      {/* <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        title="View on GitHub"
                      >
                        <Github size={24} />
                      </a> */}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 mb-4">
                      {project.details.map((detail, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-400">{detail}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} 
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  {/* <CardFooter>
                  </CardFooter> */}
                </Card>
              ))}
            </div>

          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience">
            <div className="grid gap-6">
              {experience.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{exp.company}</CardTitle>
                    <CardDescription>{exp.role} • {exp.period}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6">
                      {exp.details.map((detail, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-400">{detail}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education">
            <Card>
              <CardHeader>
                <CardTitle>Purdue University</CardTitle>
                <CardDescription>Bachelor of Science in Computer Science • Expected May 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Academic Details</h3>
                    <ul className="list-disc pl-6">
                      <li className="text-gray-600 dark:text-gray-400">Major in Computer Science</li>
                      <li className="text-gray-600 dark:text-gray-400">Minor in Computer Information Technology</li>
                      <li className="text-gray-600 dark:text-gray-400">GPA: 3.51/4.0</li>
                      <li className="text-gray-600 dark:text-gray-400">Dean's List 2021-2024</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Relevant Coursework</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Data Structures & Algorithms",
                        "Software Engineering",
                        "Operating Systems",
                        "Systems Programming",
                        "Software Testing",
                        "Competitive Programming",
                        "Object Oriented Programming"
                      ].map((course, i) => (
                        <span key={i} 
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Portfolio;
