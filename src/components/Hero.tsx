import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Code,
  Zap,
  Star,
} from "lucide-react";

// Resolve the resume PDF path via Vite's asset handling
const resumePdfUrl = new URL(
  "../resume/Rutuja-Jadhav-Resume.pdf",
  import.meta.url
).href;

// Static texts used for the typewriter effect
const TEXTS = ["Developer", "Coder", "Designer"];

// Floating particle with gentle motion (decorative)
const FloatingParticle = ({ index }: { index: number }) => {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      const handleResize = () =>
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <motion.div
      className="absolute w-1 h-1 bg-white/20 rounded-full"
      initial={{
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
      }}
      animate={{
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        scale: [1, 1.2, 1],
        opacity: [0.15, 0.35, 0.15],
      }}
      transition={{
        duration: 25 + Math.random() * 15,
        repeat: Infinity,
        ease: "linear",
        delay: index * 2.5,
      }}
    />
  );
};

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // texts moved to module-level constant TEXTS to avoid recreating on each render

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = TEXTS[currentIndex];

        if (!isDeleting) {
          setCurrentText(current.substring(0, currentText.length + 1));

          if (currentText === current) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setCurrentText(current.substring(0, currentText.length - 1));

          if (currentText === "") {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % TEXTS.length);
          }
        }
      },
      isDeleting ? 50 : 150
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-16 md:pt-20 flex items-center justify-center px-4 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.10),transparent_60%)]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(75,85,99,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(75,85,99,0.08)_1px,transparent_1px)] bg-[size:20px_20px]" />
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.08, 0.16, 0.08],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/5 w-[220px] h-[220px] sm:w-[380px] sm:h-[380px] rounded-full bg-gradient-to-r from-indigo-500/20 to-pink-500/20 blur-[60px]"
        />
        <motion.div
          animate={{
            scale: [1.05, 1, 1.05],
            opacity: [0.08, 0.14, 0.08],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/5 w-[260px] h-[260px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-l from-pink-500/20 to-indigo-500/20 blur-[70px]"
        />
        {/* Floating particles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <FloatingParticle key={i} index={i} />
        ))}
      </div>

      {/* Floating decorative icons */}
      <motion.div
        animate={{ y: [-14, 14, -14], rotate: [0, 4, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-6 md:left-16 text-indigo-400/40"
        aria-hidden
      >
        <Code size={22} />
      </motion.div>
      <motion.div
        animate={{ y: [14, -14, 14], rotate: [0, -4, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
        className="absolute top-1/3 right-6 md:right-16 text-pink-400/40"
        aria-hidden
      >
        <Zap size={20} />
      </motion.div>
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.6,
        }}
        className="absolute bottom-1/3 left-10 md:left-24 text-indigo-300/40"
        aria-hidden
      >
        <Star size={18} />
      </motion.div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Animated greeting */}
        <div className="animate-fade-in-up">
          <p className="text-gray-400 text-lg md:text-xl mb-4 font-light tracking-wide">
            Hello, I'm
          </p>
        </div>

        {/* Main name with gradient */}
        <div className="animate-fade-in-up delay-200">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent leading-tight">
            Rutuja Jadhav
          </h1>
        </div>

        {/* Animated role text */}
        <div className="animate-fade-in-up delay-400">
          <div className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 h-12 flex items-center justify-center">
            <span className="pr-2 text-indigo-400">{"<"}</span>
            <span className="border-r-2 border-gray-400 pr-2 animate-pulse">
              {currentText}
            </span>
            <span className="pl-2 text-indigo-400">{"/>"}</span>
          </div>
        </div>

        {/* Description */}
        <div className="animate-fade-in-up delay-600">
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            I'm a Web Developer building responsive, accessible front-ends with{" "}
            <span className="text-white">HTML</span>,{" "}
            <span className="text-white">CSS</span> and{" "}
            <span className="text-white">JavaScript</span>, and working with{" "}
            <span className="text-white">MySQL</span>.
          </p>
        </div>

        {/* Skills/Languages chips */}
        <div className="animate-fade-in-up delay-800 flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
          {["Java", "Python", "HTML", "CSS", "MySQL"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 text-xs md:text-sm bg-white/5 border border-white/10 rounded-full text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Quick highlights */}
        <div className="animate-fade-in-up delay-800 flex flex-wrap justify-center gap-4 text-xs md:text-sm text-gray-400 mb-8">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Java & Python
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            HTML & CSS
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
            MySQL & MongoDB
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up delay-800 flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href={resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Rutuja Jadhav's resume (opens in a new tab)"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/90 text-gray-900 font-semibold shadow-sm ring-1 ring-white/10 transition-all duration-300 hover:bg-white hover:shadow-md hover:scale-[1.02]"
          >
            <span>Resume</span>
            <FileText className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
          </a>
          {/* Removed View Projects button as requested */}
        </div>

        {/* Social Links */}
        <div className="animate-fade-in-up delay-1000 flex gap-6 justify-center">
          <a
            href="https://github.com/RutuJadhav30"
            className="p-3 border border-gray-700 rounded-full text-gray-400 hover:text-white hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/rutuja-jadhav30"
            className="p-3 border border-gray-700 rounded-full text-gray-400 hover:text-white hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:rutujadhav0401@gmail.com"
            className="p-3 border border-gray-700 rounded-full text-gray-400 hover:text-white hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
