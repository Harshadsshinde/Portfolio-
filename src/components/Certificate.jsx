import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

const Certificate = () => {
  const theme = useTheme();
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "React Developer Certificate",
      issuer: "Meta",
      Img: "./certificate.jpg",
      link: "https://example.com/certificate/react"
    },
    {
      title: "JavaScript Mastery Certificate",
      issuer: "Google",
      Img: "./certificate.jpg",
      link: "https://example.com/certificate/javascript"
    },
    {
      title: "Full-Stack Web Development",
      issuer: "Udemy",
      Img: "./certificate.jpg",
      link: "https://example.com/certificate/fullstack"
    },
    {
      title: "Backend Engineering",
      issuer: "Coursera",
      Img: "./certificate.jpg",
      link: "https://example.com/certificate/backend"
    },
    {
      title: "Advanced React",
      issuer: "Frontend Masters",
      Img: "./certificate.jpg",
      link: "https://example.com/certificate/advanced-react"
    }
  ];

  return (
    <div className="container mx-auto flex flex-col justify-center items-center overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {certificates.map((cert, index) => (
          <div
            key={index}
            data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
            data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
            onClick={() => setSelectedCert(cert)}
            className="cursor-pointer"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="flex justify-center">
              <div className="w-full max-w-sm p-4 bg-white h-70 shadow-lg rounded-lg">
                <img
                  src={cert.Img}
                  alt={cert.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="mt-2 text-lg font-semibold text-gray-800">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600">{cert.issuer}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      {selectedCert && (
        <div className="mt-10 p-6 bg-white shadow-lg rounded-lg w-3/4">
          <h2 className="text-2xl font-semibold text-gray-800">{selectedCert.title}</h2>
          <p className="text-gray-600 mb-4">{selectedCert.issuer}</p>
          <img src={selectedCert.Img} alt={selectedCert.title} className="w-full h-auto rounded-md" />
          <div className="mt-4 flex justify-center">
            <a
              href={selectedCert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              View Full Certificate
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;