import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "Web Developer Internship",
      issuer: "OPRA IT Solution, Pune",
      Img: "/opra.png", 
      link: "https://example.com/certificate/opra",
    },
    {
      title: "Web Development Internship",
      issuer: "Anvistar ITS Pvt. Ltd., Pune",
      Img: "/idea.jpg",
      link: "https://example.com/certificate/anvistar",
    },
  ];

  return (
    <div className="container mx-auto flex flex-col justify-center items-center py-6 px-2 sm:py-10 sm:px-4 relative z-10">
      {/* Grid – responsive columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedCert(cert)}
            className="cursor-pointer flex justify-center relative z-20"
            style={{ pointerEvents: "auto" }}
          >
            <div className="w-full max-w-sm p-3 sm:p-4 bg-transparent shadow-lg rounded-lg hover:shadow-xl transition">
              <img
                src={cert.Img}
                alt={cert.title}
                className="w-full h-32 sm:h-40 object-cover rounded-md"
                onError={(e) => {
                  e.target.src = "";
                  e.target.alt = "Image not found";
                }}
              />
              <h3 className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold text-white">
                {cert.title}
              </h3>
              <p className="text-xs sm:text-sm text-white">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full‑screen Modal – mobile responsive */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative w-full max-w-6xl max-h-[90vh] flex flex-col items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button – smaller on mobile */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                aria-label="Close"
              >
                <X size={24} className="sm:w-8 sm:h-8" />
              </button>

              {/* Image – adapts to screen height */}
              <img
                src={selectedCert.Img}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[60vh] sm:max-h-[80vh] object-contain rounded-lg shadow-2xl"
                onError={(e) => {
                  e.target.style.display = "none";
                  const parent = e.target.parentNode;
                  const fallback = document.createElement("p");
                  fallback.className = "text-white text-lg sm:text-2xl font-bold";
                  fallback.textContent = "Certificate image not found";
                  parent.appendChild(fallback);
                }}
              />

              {/* Info overlay – responsive padding & font */}
              <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 text-center text-white pointer-events-none px-2">
                <h2 className="text-lg sm:text-2xl md:text-3xl font-bold drop-shadow-lg">
                  {selectedCert.title}
                </h2>
                <p className="text-sm sm:text-lg md:text-xl text-gray-300 drop-shadow-md">
                  {selectedCert.issuer}
                </p>
              
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificate;