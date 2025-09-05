import React from "react";
import { motion } from "framer-motion";
import { Code2, Terminal } from "lucide-react";
import profileImg from "../images/rutu-jadhav.jpg";

const About = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_20%,rgba(99,102,241,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(75,85,99,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(75,85,99,0.06)_1px,transparent_1px)] bg-[size:22px_22px]" />
        <motion.div
          aria-hidden
          className="absolute -top-10 right-10 w-60 h-60 rounded-full bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 blur-2xl"
          animate={{ scale: [1, 1.06, 1], opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Floating subtle icons */}
        <motion.div
          aria-hidden
          className="absolute top-12 left-6 text-indigo-400/30"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Code2 size={18} />
        </motion.div>
        <motion.div
          aria-hidden
          className="absolute bottom-16 right-8 text-pink-400/30"
          animate={{ y: [10, -10, 10] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
        >
          <Terminal size={18} />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and what I'm passionate
            about
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Large circular profile image */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              {/* Gradient ring wrapper */}
              <div className="p-1 rounded-full bg-gradient-to-tr from-gray-500/40 via-gray-200/20 to-gray-500/40 group-hover:from-gray-400/50 group-hover:to-gray-400/50 transition-colors duration-300">
                <img
                  src={profileImg}
                  alt="Rutuja Jadhav"
                  className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full object-cover object-[50%_20%] shadow-2xl ring-2 ring-white/5"
                />
              </div>
              {/* Soft glow */}
              <div className="pointer-events-none absolute inset-0 rounded-full blur-2xl opacity-30 bg-gradient-to-tr from-white/5 to-transparent"></div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="prose prose-invert">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I’m Rutuja Jadhav a front‑end‑focused developer who enjoys
                turning ideas into clean, accessible, and fast interfaces. I
                care about clear structure, thoughtful details, and code that
                the next person can read. Most of my work revolves around React
                and TypeScript, with a strong eye for design and user
                experience.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                As Team Lead of{" "}
                <span className="font-semibold text-white">TECH‑MITians</span>,
                I helped our team secure{" "}
                <span className="font-semibold text-white">3rd Place</span>
                and the{" "}
                <span className="font-semibold text-white">
                  1st Appreciation Prize
                </span>
                out of 90 teams at HackMIT’25 Ideathon. That experience
                sharpened how I lead, collaborate, and solve problems under
                pressure skills I bring to every project I build.
              </p>
            </div>

            {/* Hackathon Highlight */}
            <motion.div
              className="relative rounded-2xl bg-gradient-to-br from-gray-800/60 via-gray-900/40 to-gray-800/60 p-[1px] shadow-xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="relative rounded-2xl bg-gray-900/70 border border-gray-800/60 p-6 md:p-7 overflow-hidden">
                {/* subtle decorative glow */}
                <div className="pointer-events-none absolute -top-16 -right-10 h-48 w-48 rounded-full bg-gray-500/10 blur-3xl"></div>

                {/* Header */}
                <div className="flex items-center justify-between gap-3 flex-wrap mb-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800/80 text-gray-200 text-xs sm:text-sm ring-1 ring-gray-700/60">
                    <span aria-hidden>🏆</span>
                    HackMIT'25 IDEATHON
                  </span>
                  <span className="text-xs sm:text-sm px-2.5 py-1 rounded-md bg-gray-800/60 text-gray-300 ring-1 ring-gray-700/60">
                    2025
                  </span>
                </div>

                {/* Title & summary */}
                <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tight">
                  3rd Place Winner
                </h3>
                <p className="text-gray-300 mt-2">
                  Secured 3rd Place & Won 1st Appreciation Prize out of 90 teams
                  at HackMIT'25 IDEATHON as Team Leader of
                  <span className="font-semibold text-white">
                    {" "}
                    TECH-MITians
                  </span>
                  .
                </p>

                {/* divider */}
                <div className="my-5 h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent" />

                {/* Details */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                      Team Members
                    </h4>
                    <ul className="text-gray-200/90 space-y-1 list-disc list-inside">
                      <li>Nitin Govardhane</li>
                      <li>Jitesh Borse</li>
                      <li>Viren Shende</li>
                      <li>Atharv Kulkarni</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                      Mentors & Guides
                    </h4>
                    <ul className="text-gray-200/90 space-y-1 list-disc list-inside">
                      <li>Dr. Jalindar Gandal Sir</li>
                      <li>Swapnil Goje Sir</li>
                    </ul>
                  </div>
                </div>

                {/* divider */}
                <div className="my-5 h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent" />

                {/* Highlights */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                    Key Highlights
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-gray-800/70 hover:bg-gray-800 text-gray-200 text-sm border border-gray-700/60 transition-colors">
                      Team Leadership
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gray-800/70 hover:bg-gray-800 text-gray-200 text-sm border border-gray-700/60 transition-colors">
                      Problem Solving
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gray-800/70 hover:bg-gray-800 text-gray-200 text-sm border border-gray-700/60 transition-colors">
                      Innovation
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gray-800/70 hover:bg-gray-800 text-gray-200 text-sm border border-gray-700/60 transition-colors">
                      Collaboration
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
