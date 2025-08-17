import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, ArrowUpRight, Filter } from "lucide-react";

// Import all project images
import foodshareImg from "../images/food.png";
import chatappImg from "../images/chat.png";
import aiImg from "../images/ai.png";
import festImg from "../images/fest.png";
import flightImg from "../images/hosp.png";
import minutesImg from "../images/minutes.png";
import portfolioImg from "../images/port.png";

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      Img: foodshareImg,
      Title: "Food Share – Food Wastage Management System",
      Description:
        "A platform connecting food donors, NGOs, and volunteers with secure authentication, real-time updates, and dashboard management.",
      LongDescription:
        "Food Share revolutionizes food distribution by connecting donors with NGOs and volunteers. The platform features real-time inventory tracking, route optimization for food delivery, and analytics to track impact. Built with React, Node.js, and MongoDB.",
      Link: "https://github.com/Harshadsshinde/food-share",
      Tags: ["Full-stack", "React", "Node.js"],
      Technologies: ["React", "Node.js", "MongoDB", "Express", "JWT Auth"],
      Year: 2025,
    },
    {
      id: 2,
      Img: chatappImg,
      Title: "Real-Time Chat Application",
      Description:
        "Private and group messaging app built with Socket.IO, JWT authentication, and responsive UI.",
      LongDescription:
        "A feature-rich chat application supporting both private and group conversations. Includes message history, online status indicators, typing indicators, and file sharing capabilities. Secured with JWT authentication and end-to-end encryption.",
      Link: "https://github.com/Harshadsshinde/chat-app-",
      Tags: ["Real-time", "Websockets", "React"],
      Technologies: ["React", "Socket.IO", "Node.js", "JWT"],
      Year: 2025,
    },
    {
      id: 3,
      Img: aiImg,
      Title: "AI Mock Interview Platform",
      Description:
        "Full-stack AI-powered mock interview system with real-time interaction simulation.",
      LongDescription:
        "This platform uses natural language processing to simulate technical interviews. Features include speech-to-text conversion, sentiment analysis, and personalized feedback reports. The AI evaluates responses based on content relevance, clarity, and technical accuracy.",
      Link: "https://github.com/Harshadsshinde/ai-mock-interview-",
      Tags: ["AI", "Full-stack"],
      Technologies: [ "React", "Node.js", "MongoDB", ],
      Year: 2025,
    },
    {
      id: 4,
      Img: festImg,
      Title: "Feastables 3D Models Showcase",
      Description:
        "Interactive 3D product showcase built with React, Vite, and Framer Motion.",
      LongDescription:
        "An immersive e-commerce experience featuring 3D product visualizations. Users can rotate, zoom, and customize products in real-time. The application includes a virtual try-on feature and seamless integration with e-commerce APIs.",
      Link: "https://github.com/Harshadsshinde/Feastables-3D-Models-Showcase",
      Tags: ["3D", "Interactive", "React"],
      Technologies: ["React", "Three.js", "Vite", "Framer Motion"],
      Year: 2025,
    },
    {
      id: 5,
      Img: flightImg,
      Title: "ZeeCare – Web-based Healthcare Appointment System",
      Description:
        "Platform for booking appointments with responsive forms and user-friendly UI.",
      LongDescription:
        "A comprehensive healthcare management system allowing patients to book appointments, access medical records, and consult with doctors via video. Includes features like prescription management, appointment reminders, and a patient portal.",
      Link: "https://github.com/Harshadsshinde/hospital-management-system-",
      Tags: ["Healthcare", "Full-stack", "UI/UX"],
      Technologies: ["React", "Node.js", "MongoDB", "Express", "JWT Auth"],
      Year: 2025,
    },
    {
      id: 6,
      Img: minutesImg,
      Title: "MOM Automate System",
      Description:
        "AI-powered platform for automated meeting minutes generation and email notifications.",
      LongDescription:
        "This system uses speech recognition to transcribe meetings and AI to generate concise minutes. It identifies action items, assigns tasks, and sends follow-up emails automatically. Integrates with calendar systems for seamless scheduling.",
      Link: "https://github.com/Harshadsshinde/MOM-collage-project-",
      Tags: ["AI", "Full-stack"],
      Technologies: ["React", "Node.js", "MongoDB", "Express", "JWT Auth"],
      Year: 2025,
    },
    {
      id: 7,
      Img: portfolioImg,
      Title: "Personal Portfolio Website",
      Description:
        "Responsive portfolio site with smooth scrolling, dark/light mode, and modern UI.",
      LongDescription:
        "A showcase of my work featuring interactive project displays, animated transitions, and a clean design system. The site includes a blog section, contact form with validation, and a dark/light mode toggle with system preference detection.",
      Link: "https://github.com/Harshadsshinde/Portfolio-",
      Tags: ["UI/UX", "React", "Animation"],
      Technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      Year: 2025,
    },
  ]);

  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const initialItems = 6;

  const allTags = ["All", ...new Set(projects.flatMap(project => project.Tags))];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === "All" || project.Tags.includes(activeFilter);
    const matchesSearch = 
      project.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.Description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.Tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  const displayedProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, initialItems);

  return (
    <div className="min-h-screen  py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Project Portfolio
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Explore my collection of full-stack applications, AI solutions, and interactive experiences.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-col md:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-xl py-3 px-4 pl-12 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg 
                className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {allTags.map(tag => (
              <button
                key={tag}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === tag
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800/60 text-gray-300 hover:bg-gray-700/80"
                }`}
                onClick={() => setActiveFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </motion.div>
        </div>

        {filteredProjects.length === 0 ? (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-md p-10 rounded-2xl inline-block">
              <h3 className="text-2xl font-bold text-white mb-4">No projects found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 mx-auto transition-colors"
                onClick={() => {
                  setSearchTerm("");
                  setActiveFilter("All");
                }}
              >
                <Filter className="w-4 h-4" />
                Reset filters
              </button>
            </div>
          </motion.div>
        ) : (
          <>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatePresence>
                {displayedProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700/50 shadow-xl cursor-pointer group relative"
                    whileHover={{ y: -10 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, type: "spring" }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.Img} 
                        alt={project.Title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                      <div className="absolute top-4 right-4 flex gap-2">
                        {project.Tags.map((tag, index) => (
                          <span 
                            key={index}
                            className="px-2.5 py-1 bg-blue-900/40 backdrop-blur text-xs rounded-full text-blue-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-white">{project.Title}</h3>
                        <div className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-full">
                          {project.Year}
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {project.Description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.Technologies.slice(0, 3).map((tech, index) => (
                          <span 
                            key={index} 
                            className="px-2 py-1 bg-gray-800/60 text-xs rounded text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.Technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-800/60 text-xs rounded text-gray-300">
                            +{project.Technologies.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      <div className="mt-6 flex justify-between items-center">
                        <div className="text-xs text-gray-400 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                          Click for details
                        </div>
                        <div className="group-hover:translate-x-1 transition-transform">
                          <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredProjects.length > initialItems && (
              <div className="mt-12 flex justify-center">
                <motion.button
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {showAllProjects ? (
                    <>
                      <svg className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                      Show Less Projects
                    </>
                  ) : (
                    <>
                      View All Projects
                      <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </motion.button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 rounded-2xl max-w-4xl w-full mx-4 overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-gray-700/80 hover:bg-gray-600 transition-colors z-10 backdrop-blur"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="h-64 relative overflow-hidden">
                <img 
                  src={selectedProject.Img} 
                  alt={selectedProject.Title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  {selectedProject.Tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 bg-blue-900/40 backdrop-blur text-sm rounded-full text-blue-200 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-3xl font-bold text-white">
                    {selectedProject.Title}
                  </h2>
                  <div className="text-gray-400 bg-gray-800 px-3 py-1 rounded-full text-sm">
                    {selectedProject.Year}
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg mb-8">
                  {selectedProject.LongDescription}
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.Technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-4 py-2 bg-gray-800/60 rounded-lg text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={selectedProject.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg text-white font-medium transition-all shadow-lg shadow-blue-500/20"
                  >
                    <Github className="w-5 h-5" />
                    View Source Code
                  </a>
                  
                  <button className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-white font-medium transition-colors">
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Floating Particles Background */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
            }}
            animate={{
              y: [0, Math.random() * 50 - 25],
              x: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;