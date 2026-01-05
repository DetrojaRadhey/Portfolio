import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, ArrowRight, Download, Menu, X, Trophy, GraduationCap, MapPin } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Modernized Skills grouped by type for attractive UI
  const skillsData = [
    {
      group: 'Languages',
      color: 'bg-yellow-500',
      skills: [
        'JavaScript', 'Python', 'Golang'
      ]
    },
    {
      group: 'Core CS',
      color: 'bg-pink-400',
      skills: ['Data Structures and Algorithms', 'Computer Networking']
    },
    {
      group: 'Frontend',
      color: 'bg-blue-500',
      skills: ['React.js', 'Redux', 'Tailwind CSS']
    },
    {
      group: 'Backend / Frameworks',
      color: 'bg-green-500',
      skills: ['Node.js', 'Express.js', 'Lang Chain', 'Flask', 'Gin', 'WebSockets']
    },
    {
      group: 'Databases',
      color: 'bg-indigo-500',
      skills: ['MongoDB', 'PostgreSQL', 'SQLite', 'Redis']
    },
    {
      group: 'Other Tools',
      color: 'bg-purple-500',
      skills: [
        'Git', 'GitHub', 'Docker', 'Gorm', 'Prisma', 'N8N', 'Langflow', 'Tesseract.js'
      ]
    },
  ];


  const projects = [
    {
      title: "Roadside Assistance Platform",
      description: "Location-aware web app offering real-time mechanical/medical help and peer-based assistance via Chrome extension with IoT-based emergency trigger and sub-second spatial queries using MongoDB 2dsphere.",
      image: "/roadsideassistance.png",
      tech: ["React", "Node.js", "MongoDB", "WebSocket", "IoT"],
      github: "#",
      demo: "#",
      achievement: "🥇 Finalist - Odoo x SVNIT Hackathon"
    },
    {
      title: "Social Media Analyzer Chatbot",
      description: "AI-powered chatbot for analyzing social media engagement and trends using Langflow-driven natural language insights with interactive conversational UI and data processing from multiple platforms.",
      image: "/bot.png",
      tech: ["Langflow", "React", "Node.js", "MongoDB", "AI"],
      github: "#",
      demo: "#",
      achievement: "🤖 Supermind Hackathon Project"
    },
    {
      title: "Online Multiplayer Chess Game",
      description: "Real-time chess game with friends and matchmaking featuring WebSocket-based gameplay, challenge friends functionality, and MongoDB for player data management.",
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&h=400&fit=crop",
      tech: ["TypeScript", "Node.js", "React", "MongoDB", "WebSocket"],
      github: "#",
      demo: "#"
    },
    {
      title: "Quiz Assistant Chrome Extension",
      description: "Helps users answer quiz questions from forms (Google Forms, MS Teams) using OCR with Tesseract.js and AI-generated answers via Gemini API for both text and image questions.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
      tech: ["JavaScript", "Gemini API", "Chrome Extensions", "Tesseract.js"],
      github: "#",
      demo: "#"
    },
    {
      title: "Scribbler JS Notebook",
      description: "Contributed to open-source browser-based JavaScript notebook. Added CSV loading and visualization features to enhance data analysis capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["JavaScript", "D3.js", "CSV Parsing", "Open Source"],
      github: "#",
      demo: "#",
      achievement: "🧪 Open Source Contributor"
    },
    {
      title: "Wanderlust - Airbnb clone",
      description: "Performs CRUD operations, session management, passport.js for authentication",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
      tech: ["Node.js", "MongoDB", "Express.js", "EJS"],
      github: "https://github.com/DetrojaRadhey/wanderlust"
    }
  ];

  const achievements = [
    {
      title: "Hackathon Finalist",
      description: "Top 5 Finalist at Odoo x SVNIT Hackathon for Roadside Assistance Platform",
      icon: Trophy,
      color: "text-yellow-400"
    },
    {
      title: "AI Innovation",
      description: "Built Social Media Analyzer Chatbot at Supermind Hackathon",
      icon: Code,
      color: "text-blue-400"
    },
    {
      title: "Open Source",
      description: "Contributor to Odoo & Scribbler JS Notebook project",
      icon: Github,
      color: "text-green-400"
    },
    {
      title: "Problem Solver",
      description: "Solved 200+ DSA Problems on LeetCode",
      icon: Code,
      color: "text-purple-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "achievements", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const NavLink = ({ href, children, className }) => (
    <button
      onClick={() => scrollToSection(href)}
      className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-purple-400 hover:scale-110 ${
        activeSection === href ? "text-purple-400" : "text-gray-300"
      } ${className}`}
    >
      {children}
      {activeSection === href && (
        <motion.div
          layoutId="activeSection"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
          initial={false}
        />
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              Radhey Detroja
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <NavLink href="hero">Home</NavLink>
              <NavLink href="about">About</NavLink>
              <NavLink href="skills">Skills</NavLink>
              <NavLink href="projects">Projects</NavLink>
              <NavLink href="achievements">Achievements</NavLink>
              <NavLink href="contact">Contact</NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-800 transition-all duration-300 hover:scale-110"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-800 py-4 bg-gray-900/95 backdrop-blur-sm"
            >
              <div className="flex flex-col space-y-2">
                <NavLink href="hero" className="block">Home</NavLink>
                <NavLink href="about" className="block">About</NavLink>
                <NavLink href="skills" className="block">Skills</NavLink>
                <NavLink href="projects" className="block">Projects</NavLink>
                <NavLink href="achievements" className="block">Achievements</NavLink>
                <NavLink href="contact" className="block">Contact</NavLink>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <Code size={48} className="text-purple-400" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 inline-block transition-transform duration-300">
                Radhey Detroja
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto"
            >
              Full Stack Developer | Hackathon Finalist | Open Source Contributer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Software Engineer at Odoo India Pvt. Ltd. | Computer Engineering student at CHARUSAT (CGPA: 8.08). Experienced in building full-stack real-time applications and automation tools, with a passion for problem-solving, open-source contributions, and hackathons.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
            >
              <Button
                onClick={() => scrollToSection("projects")}
                className="group"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a href="/Radhey_Detroja.pdf" download target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </a>
              <a href="https://leetcode.com/u/detrojaradhey1205/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <Code className="mr-2 h-4 w-4" />
                  LeetCode Profile
                </Button>
              </a>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-20 left-10 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-24 h-24 bg-pink-500/20 rounded-full blur-xl"
        />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-purple-400">Me</span>
            </motion.h2>
            <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group"
            >
              <img
                src="/Profile_Pic.jpg"
                alt="Radhey Detroja"
                className="rounded-lg size-[70%] shadow-2xl mx-auto transition-transform duration-300 group-hover:scale-105 group-hover:shadow-purple-500/25"
              />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="space-y-4 hover:bg-gray-700/30 p-4 rounded-lg transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <GraduationCap className="text-purple-400 hover:scale-110 transition-transform duration-300" size={24} />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <p className="text-lg text-gray-300">
                  <strong>Charotar University of Science and Technology</strong><br />
                  B.Tech in Computer Engineering<br />
                  CGPA: 8.08 (8th Semester)
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4 hover:bg-gray-700/30 p-4 rounded-lg transition-all duration-300">
                <h3 className="text-xl font-semibold flex items-center space-x-3">
                  <Code className="text-blue-400 hover:scale-110 transition-transform duration-300" size={24} />
                  <span>Experience</span>
                </h3>
                <p className="text-lg text-gray-300">
                  <strong>Odoo India Pvt. Ltd., Gandhinagar (Current)</strong><br />
                  Working on an open-source ERP system, contributing to the development and customization of business modules using a three-layered architecture (Presentation, Business Logic, Data Layer).
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 hover:bg-gray-700/30 p-3 rounded-lg transition-all duration-300 hover:scale-105">
                  <Code className="text-purple-400" size={20} />
                  <span>Full Stack Dev</span>
                </div>
                <div className="flex items-center space-x-2 hover:bg-gray-700/30 p-3 rounded-lg transition-all duration-300 hover:scale-105">
                  <Palette className="text-pink-400" size={20} />
                  <span>AI & Automation Scipts</span>
                </div>
                <div className="flex items-center space-x-2 hover:bg-gray-700/30 p-3 rounded-lg transition-all duration-300 hover:scale-105">
                  <Smartphone className="text-blue-400" size={20} />
                  <span>Real-time Apps</span>
                </div>
                <div className="flex items-center space-x-2 hover:bg-gray-700/30 p-3 rounded-lg transition-all duration-300 hover:scale-105">
                  <Trophy className="text-yellow-400" size={20} />
                  <span>Hackathons</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
              Skills & <span className="text-purple-400">Tech Stack</span>
            </motion.h2>
            <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
          </motion.div>

          {/* Modern Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {skillsData.map((group, i) => (
              <motion.div
                key={group.group}
                variants={itemVariants}
                className="bg-gray-800/60 rounded-2xl p-6 shadow-md hover:shadow-xl border border-transparent hover:border-purple-400 transition-all duration-300 group flex flex-col items-center text-center"
              >
                <span className={`mb-3 text-lg font-bold py-1 px-4 rounded-full ${group.color} text-white bg-opacity-90 shadow-lg tracking-wide`}>{group.group}</span>
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  {group.skills.map(skill => (
                    <Badge
                      key={skill}
                      className={`px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-gray-700 to-gray-800 border-2 border-purple-500/20 text-purple-200 hover:bg-purple-700/40 hover:scale-110 transition-all duration-300 group-hover:border-purple-400 cursor-pointer`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-purple-400">Projects</span>
            </motion.h2>
            <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={project.title} variants={itemVariants}>
                <Card className="bg-gray-800 border-gray-700 hover:border-purple-400 transition-all duration-300 group overflow-hidden h-full flex flex-col hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                    {project.achievement && (
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 hover:bg-yellow-500/30 transition-colors duration-300">
                          {project.achievement}
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardHeader className="flex-grow">
                    <CardTitle className="text-white group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 hover:scale-110 transition-all duration-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {index === 0 && (
                        <a href="https://github.com/DetrojaRadhey/Road_Side_Assistance" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="group">
                            <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                            Code
                          </Button>
                        </a>
                      )}
                      {index === 1 && (
                        <a href="https://github.com/DetrojaRadhey/supermind_hackathon" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="group">
                            <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                            Code
                          </Button>
                        </a>
                      )}
                      {index === 2 && (
                        <a href="https://github.com/DetrojaRadhey/chess_game" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="group">
                            <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                            Code
                          </Button>
                        </a>
                      )}
                      {index === 3 && (
                        <a href="https://github.com/DetrojaRadhey/" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="group">
                            <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                            Code
                          </Button>
                        </a>
                      )}
                      {index === 4 && (
                        <a href="https://github.com/DetrojaRadhey/scribbler" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="group">
                            <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                            Code
                          </Button>
                        </a>
                      )}
                      {index === 5 && (
                        <a href="https://github.com/DetrojaRadhey/wanderlust" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="group">
                            <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                            Code
                          </Button>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
              Achievements & <span className="text-purple-400">Highlights</span>
            </motion.h2>
            <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div key={achievement.title} variants={itemVariants}>
                <Card className="bg-gray-800 border-gray-700 hover:border-purple-400 transition-all duration-300 group text-center h-full hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                  <CardContent className="p-6">
                    <achievement.icon className={`h-12 w-12 ${achievement.color} mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`} />
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors duration-300">{achievement.title}</h3>
                    <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="text-purple-400">Touch</span>
            </motion.h2>
            <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8 rounded-full" />
            <motion.p variants={itemVariants} className="text-lg text-gray-300 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, hackathons, or just having a chat about technology and innovation.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gray-800 border-gray-700 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                  <motion.a
                    variants={itemVariants}
                    href="mailto:radheydetroja@gmail.com"
                    className="flex flex-col items-center space-y-4 p-6 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group hover:scale-110"
                  >
                    <Mail className="h-8 w-8 text-red-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                    <span className="font-medium text-gray-400 group-hover:text-red-400 transition-colors duration-300">Email</span>
                    <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">radheydetroja@gmail.com</span>
                  </motion.a>

                  <motion.a
                    variants={itemVariants}
                    href="https://www.linkedin.com/in/radheydetroja/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center space-y-4 p-6 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group hover:scale-110"
                  >
                    <Linkedin className="h-8 w-8 text-blue-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                    <span className="font-medium text-gray-400 group-hover:text-blue-400 transition-colors duration-300">LinkedIn</span>
                    <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">@radheydetroja</span>
                  </motion.a>

                  <motion.a
                    variants={itemVariants}
                    href="https://github.com/DetrojaRadhey/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center space-y-4 p-6 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group hover:scale-110"
                  >
                    <Github className="h-8 w-8 text-gray-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                    <span className="font-medium text-gray-400 group-hover:text-gray-300 transition-colors duration-300">GitHub</span>
                    <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">@detrojaradhey</span>
                  </motion.a>

                  <motion.a
                    variants={itemVariants}
                    href="https://leetcode.com/u/detrojaradhey1205/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center space-y-4 p-6 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group hover:scale-110"
                  >
                    <Code className="h-8 w-8 text-yellow-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                    <span className="font-medium text-gray-400 group-hover:text-yellow-300 transition-colors duration-300">LeetCode</span>
                    <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">@detrojaradhey1205</span>
                  </motion.a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
              © 2026 Built with 💖 by Radhey Detroja
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
