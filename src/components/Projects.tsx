//
import { motion } from "framer-motion";
import { Github, Eye, Code2, Boxes } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Storage Management",
      description:
        "Built a secure cloud storage app with Google Drive-like features, using Appwrite, Next.js, TypeScript, Tailwind CSS, and Redux Toolkit.",
      tags: [
        "Appwrite",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux Toolkit",
      ],
      githubUrl: "https://github.com/RutuJadhav30/storage-management-solution",
      liveUrl: "#",
      featured: true,
      color: "from-indigo-500 to-purple-600",
    },
    {
      title: "Students Space",
      description:
        "Developed a LAMP-stack e-learning platform with course uploads, assignments, live sessions, admin dashboards, and secure authentication, boosting student engagement by 30%.",
      tags: ["Javascript", "PHP", "SCSS", "CSS"],
      githubUrl: "https://github.com/RutuJadhav30/students-space",
      liveUrl: "#",
      featured: true,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Spotify Clone",
      description:
        "Spotify Clone project! Dive into the world of music with this mini project built using the power of CSS Flexbox.",
      tags: ["HTML", "CSS"],
      githubUrl: "https://github.com/RutuJadhav30/Spotify-Clone",
      liveUrl: "#",
      featured: false,
      color: "from-pink-500 to-red-600",
    },
    {
      title: "Nova Virtual Assistant",
      description:
        "A simple browser-based virtual assistant built using HTML, CSS, and JavaScript. It uses the Web Speech API to recognize voice commands and respond using text-to-speech.",
      tags: ["HTML", "CSS", "JavaScript", "Web Speech API"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Smart Inventory",
      description:
        "Developed a comprehensive inventory management system using PHP, MySQL, HTML/CSS/JavaScript, enabling real-time tracking of 500+ products with role-based access and low-stock alerts.",
      tags: ["PHP", "MySQL", "HTML/CSS/JavaScript"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      color: "from-yellow-500 to-orange-600",
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(500px_260px_at_20%_80%,rgba(34,197,94,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(75,85,99,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(75,85,99,0.06)_1px,transparent_1px)] bg-[size:22px_22px]" />
        <motion.div
          aria-hidden
          className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-gradient-to-tr from-emerald-500/20 to-indigo-500/20 blur-2xl"
          animate={{ scale: [1, 1.06, 1], opacity: [0.1, 0.16, 0.1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute top-10 right-12 text-emerald-400/30"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Code2 size={18} />
        </motion.div>
        <motion.div
          aria-hidden
          className="absolute bottom-24 left-24 text-indigo-400/30"
          animate={{ y: [10, -10, 10] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
        >
          <Boxes size={18} />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">
            Featured Projects
          </h3>
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {/* Header (simple, professional) */}
                <div className="relative h-56 w-full flex items-center justify-center bg-gray-950 ring-1 ring-gray-800/60 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-40`}
                  />
                  <div className="absolute inset-0 bg-black/70" />
                  <h3 className="relative z-10 text-white text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Project Content */}
                <div className="p-6 max-w-[520px] mx-auto min-h-[260px]">
                  <h4 className="text-xl font-semibold text-white mb-2 tracking-tight">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs bg-gray-800/80 text-gray-300 rounded-full border border-gray-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-700 text-gray-200 text-sm font-medium rounded-lg hover:border-gray-500 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-700 text-gray-300 text-sm font-medium rounded-lg hover:border-gray-500 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Other Projects</h3>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                className="group bg-gray-900/60 rounded-2xl border border-gray-800/60 shadow-md hover:shadow-lg transition-shadow max-w-[360px] mx-auto min-h-[360px]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="relative h-44 w-full flex items-center justify-center rounded-t-2xl bg-gray-950 ring-1 ring-gray-800/60 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-40`}
                  />
                  <div className="absolute inset-0 bg-black/70" />
                  <h4 className="relative z-10 text-white text-lg font-semibold tracking-tight">
                    {project.title}
                  </h4>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs bg-gray-800/80 text-gray-300 rounded-md border border-gray-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs text-gray-400">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
