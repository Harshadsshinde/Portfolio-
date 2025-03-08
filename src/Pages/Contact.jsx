import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send } from "lucide-react";
import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: "Sending Message...",
      html: "Please wait while we send your message",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const form = e.target;
      const formData = new FormData(form);
      await form.submit();

      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully!",
        icon: "success",
        confirmButtonColor: "#6366f1",
        timer: 2000,
        timerProgressBar: true,
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#6366f1",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ✅ Responsive Title Section */}
      <div className="text-center pt-10 px-4 sm:px-10 bg-black">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="inline-block text-2xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
          Contact Me
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base mt-2"
        >
          Got a question? Send me a message, and I'll get back to you soon.
        </p>
      </div>

      {/* ✅ Responsive Contact Form Section */}
      <div className="bg-black py-10 px-4 sm:px-10">
        <div className="container mx-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
          
          {/* ✅ Form Card */}
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="bg-white/5 ml-20 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-10 w-full max-w-lg"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                  Get in Touch
                </h2>
                <p className="text-gray-400">Have something to discuss? Let's talk.</p>
              </div>
              <Share2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#6366f1] opacity-50" />
            </div>

            {/* ✅ Contact Form */}
            <form
              action="https://formsubmit.co/harshads1433@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              {/* ✅ Name Input */}
              <div className="relative group">
                <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#6366f1]/30 disabled:opacity-50"
                  required
                />
              </div>

              {/* ✅ Email Input */}
              <div className="relative group">
                <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#6366f1]/30 disabled:opacity-50"
                  required
                />
              </div>

              {/* ✅ Message Input */}
              <div className="relative group">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#6366f1]/30 h-[9rem] disabled:opacity-50"
                  required
                />
              </div>

              {/* ✅ Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-3 rounded-xl font-semibold hover:scale-105 transition disabled:opacity-50"
              >
                <Send className="w-5 h-5 inline-block" /> {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* ✅ Social Links Section */}
          <div className="mt-6 mr-20 pl-20 flex flex-wrap w-full justify-center">
            <SocialLinks />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ContactPage;
