import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  useEffect(() => {
    // Pupil movement based on cursor
    document.addEventListener("mousemove", (e) => {
      const pupils = document.querySelectorAll(".pupil");
      pupils.forEach((pupil) => {
        const { left, top, width, height } = pupil.parentElement.getBoundingClientRect();
        const pupilX = left + width / 2;
        const pupilY = top + height / 2;
        const angle = Math.atan2(e.clientY - pupilY, e.clientX - pupilX);
        const moveX = Math.cos(angle) * 8;
        const moveY = Math.sin(angle) * 8;
        pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    });

    // Scroll animations
    gsap.from(".hero-text", { y: 50, opacity: 0, duration: 1 });

    gsap.utils.toArray(".section").forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white font-sans">
      {/* Hero Section */}
      <section className="hero-section flex flex-col items-center justify-center h-screen text-center">
        <h1 className="hero-text text-6xl font-bold tracking-tight">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg opacity-80">Front-End Developer | Creative Coder</p>
        <div className="eye-container flex space-x-10 mt-6">
          <div className="eye w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden">
            <div className="pupil w-6 h-6 bg-black rounded-full transition-transform"></div>
          </div>
          <div className="eye w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden">
            <div className="pupil w-6 h-6 bg-black rounded-full transition-transform"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section p-20 text-center">
        <h2 className="text-4xl font-semibold">About Me</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto opacity-80">I'm a passionate developer focusing on front-end technologies, animations, and interactive web experiences.</p>
      </section>

      {/* Projects Section */}
      <section className="section p-20 text-center">
        <h2 className="text-4xl font-semibold">Projects</h2>
        <p className="mt-4 text-lg opacity-80">Here are some of my works.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-gray-800 rounded-lg">Project 1</div>
          <div className="p-6 bg-gray-800 rounded-lg">Project 2</div>
          <div className="p-6 bg-gray-800 rounded-lg">Project 3</div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section p-20 text-center">
        <h2 className="text-4xl font-semibold">Contact Me</h2>
        <p className="mt-4 text-lg opacity-80">Let's collaborate on something amazing.</p>
        <button className="mt-6 px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition">Say Hello</button>
      </section>
    </div>
  );
}
