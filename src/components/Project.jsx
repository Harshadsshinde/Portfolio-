import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github } from "lucide-react"; // ✅ Imported Github icon

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const initialItems = 6;

  useEffect(() => {
    setProjects([
      {
        id: 1,
        Img: "/ai.png", // ✅ Ensure image paths are correct (use / instead of ./)
        Title: "AI Interview Platform",
        Description:
          "An AI-powered mock interview tool with real-time feedback.",
        Link: "https://github.com/Harshadsshinde/ai-mock-interview-",
      },
      {
        id: 2,
        Img: "/hosp.png",
        Title: "Hospital Management System",
        Description:
          "ZeeCare simplifies healthcare appointment bookings and administration.",
        Link: "https://github.com/Harshadsshinde/hospital-management-system-",
      },
      {
        id: 3,
        Img: "/flight1.png",
        Title: "Real-Time Flight Radar",
        Description: "Track flights with live data & interactive UI.",
        Link: "https://github.com/Harshadsshinde/ai-mock-interview-",
      },
      {
        id: 4,
        Img: "/fest.png",
        Title: "Feastables Clone",
        Description: "E-commerce site with 3D interactive elements.",
        Link: "https://github.com/Harshadsshinde/Feastables-3D-Models-Showcase",
      },
      {
        id: 5,
        Img: "/minutes.png",
        Title: "Minutes Of Meeting",
        Description:
          "A platform that automates Minutes of Meeting (MoM) creation and management.",
        Link: "https://github.com/Harshadsshinde/MOM-collage-project-",
      },
    ]);
  }, []);

  const displayedProjects = showAllProjects
    ? projects
    : projects.slice(0, initialItems);

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-center text-4xl font-bold text-white mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text ">
        My Projects
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        layout
      >
        <AnimatePresence>
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              className="bg-gray-800 p-6 rounded-xl cursor-pointer group relative overflow-hidden"
              whileHover={{ scale: 1.03, rotate: 0 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(project)} // ✅ Fix modal opening
            >
              <div className="relative">
                <img
                  src={project.Img}
                  alt={project.Title}
                  className="w-full h-48 object-cover rounded-lg mb-4 transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t rounded-lg opacity-100 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {project.Title}
              </h3>
              <p className="text-gray-300 text-sm line-clamp-2">
                {project.Description}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {projects.length > initialItems && (
        <div className="mt-6 flex justify-center">
          <motion.button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {showAllProjects ? "Show Less" : "Show More"}
          </motion.button>
        </div>
      )}

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* ✅ Ensure the background click closes the modal */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative bg-gray-900 rounded-2xl max-w-2xl w-full mx-4 overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors z-10"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="h-64 bg-gray-700 overflow-hidden">
                <img
                  src={selectedProject.Img}
                  alt={selectedProject.Title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {selectedProject.Title}
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  {selectedProject.Description}
                </p>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
