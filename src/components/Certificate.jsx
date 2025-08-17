import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

const Certificate = () => {
  const theme = useTheme();
  const [selectedCert, setSelectedCert] = useState(null);

  // Certificates list
  const certificates = [
    {
      title: "Web Developer Internship",
      issuer: "OPRA IT Solution, Pune",
      Img: "/opra.png", // replace with actual image path
      link: "https://example.com/certificate/opra",
    },
    {
      title: "Web Development Internship",
      issuer: "Anvistar ITS Pvt. Ltd., Pune",
      Img: "/idea.jpg", // replace with actual image path
      link: "https://example.com/certificate/anvistar",
    },
  ];

  return (
    <div className="container mx-auto flex flex-col justify-center items-center py-10 px-4">
      {/* Certificates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedCert(cert)}
            className="cursor-pointer flex justify-center"
          >
            <div className="w-full max-w-sm p-4 bg-transperent shadow-lg rounded-lg hover:shadow-xl transition">
              <img
                src={cert.Img}
                alt={cert.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-3 text-lg font-semibold text-white">
                {cert.title}
              </h3>
              <p className="text-sm text-white">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Selected Certificate Modal/Details */}
      {selectedCert && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50 px-4">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-2xl relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-lg font-bold"
              onClick={() => setSelectedCert(null)}
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {selectedCert.title}
            </h2>
            <p className="text-gray-600 mb-4">{selectedCert.issuer}</p>
            <img
              src={selectedCert.Img}
              alt={selectedCert.title}
              className="w-full h-auto rounded-md border"
            />
            <div className="mt-5 flex justify-center">
              <a
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                View Full Certificate
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;
