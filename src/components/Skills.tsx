//
import { motion } from "framer-motion";
import { Braces, Cpu } from "lucide-react";

const Skills = () => {
  const skillsData = [
    // Frontend Skills
    { name: "React", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "HTML5", category: "Frontend" },
    { name: "CSS3", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Bootstrap", category: "Frontend" },

    // Backend Skills
    { name: "Python", category: "Backend" },
    { name: "PHP", category: "Backend" },
    { name: "Java", category: "Backend" },
    { name: "C++", category: "Backend" },

    // Database Skills
    { name: "MongoDB", category: "Database" },
    { name: "MySQL", category: "Database" },

    // Tools & Others
    { name: "Git", category: "Tools" },
    { name: "Github", category: "Tools" },
  ];

  // Split skills into two arrays
  const leftMovingSkills = skillsData.filter((_, index) => index % 2 === 0);
  const rightMovingSkills = skillsData.filter((_, index) => index % 2 === 1);

  const SkillBadge = ({ skill }: { skill: (typeof skillsData)[0] }) => (
    <div className="flex-shrink-0 mx-4">
      {" "}
      {/* spacing between badges */}
      <span className="inline-block px-4 py-2 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-full text-gray-300 text-sm font-medium hover:bg-gray-700/80 hover:border-gray-600/50 hover:text-white transition-all duration-300 cursor-default">
        {skill.name}
      </span>
    </div>
  );

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(500px_260px_at_90%_10%,rgba(236,72,153,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(75,85,99,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(75,85,99,0.06)_1px,transparent_1px)] bg-[size:22px_22px]" />
        <motion.div
          aria-hidden
          className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-gradient-to-tr from-pink-500/20 to-indigo-500/20 blur-2xl"
          animate={{ scale: [1, 1.06, 1], opacity: [0.1, 0.16, 0.1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute top-10 right-10 text-indigo-400/30"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Braces size={18} />
        </motion.div>
        <motion.div
          aria-hidden
          className="absolute bottom-24 left-16 text-pink-400/30"
          animate={{ y: [10, -10, 10] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
        >
          <Cpu size={18} />
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
            My{" "}
            <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative space-y-8">
          {/* Left moving carousel */}
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-nowrap animate-scroll-left-infinite">
              {[...leftMovingSkills, ...leftMovingSkills].map(
                (skill, index) => (
                  <SkillBadge key={`left-${index}`} skill={skill} />
                )
              )}
            </div>
          </motion.div>

          {/* Right moving carousel */}
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex flex-nowrap animate-scroll-right-infinite">
              {[...rightMovingSkills, ...rightMovingSkills].map(
                (skill, index) => (
                  <SkillBadge key={`right-${index}`} skill={skill} />
                )
              )}
            </div>
          </motion.div>

          {/* Third row - left moving */}
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-nowrap animate-scroll-left-infinite-slow">
              {[...skillsData, ...skillsData].map((skill, index) => (
                <SkillBadge key={`mixed-${index}`} skill={skill} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
