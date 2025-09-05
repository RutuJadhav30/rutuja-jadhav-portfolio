//
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Science",
      institution: "MIT World Peace University",
      location: "Pune, Maharashtra",
      period: "2024 - 2026",
      description:
        "Computer Science stream with Java, C++, SQL, React, Python, MongoDB .",
      achievements: [
        "HackMIT’25 IDEATHON: 3rd Place (Top 3%) among 90+ teams:1st Appreciation Prize for innovative problem-solving.",
      ],
      CGPA: "8.34",
      isCompleted: true,
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "C.M.C.S College",
      location: "Nashik, Maharashtra",
      period: "2021 - 2024",
      description: "Computer Science stream with C, C++, SQL, Python .",
      achievements: ["Consistently maintained good academic performance"],
      CGPA: "7.83",
      isCompleted: true,
    },
    {
      degree: "Higher Secondary Education",
      institution: "Janata English School and Junior College, Dindori",
      location: "Nashik, India",
      period: "2019 - 2021",
      description: "Science stream with Mathematics, Physics, and Chemistry.",
      achievements: [
        "Good performance in subjects you liked (Math, Physics, CS)",
      ],
      isCompleted: true,
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(520px_280px_at_80%_30%,rgba(59,130,246,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(75,85,99,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(75,85,99,0.06)_1px,transparent_1px)] bg-[size:22px_22px]" />
        <motion.div
          aria-hidden
          className="absolute top-10 right-10 text-blue-400/30"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <BookOpen size={18} />
        </motion.div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
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
              Education
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic journey and the knowledge foundation that shapes my
            expertise
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-600 via-gray-700 to-gray-600 transform md:-translate-x-0.5"></div>

          {educationData.map((education, index) => (
            <motion.div
              key={index}
              className="relative flex items-center mb-12 last:mb-0"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {/* Timeline node */}
              <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full border-4 border-black transform md:-translate-x-4 flex items-center justify-center z-10">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>

              {/* Content */}
              <div
                className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 group">
                  {/* Period badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 font-semibold">
                      {education.period}
                    </span>
                  </div>

                  {/* Degree */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">
                    {education.degree}
                  </h3>

                  {/* Institution */}
                  <p className="text-gray-300 font-medium mb-2">
                    {education.institution}
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">{education.location}</span>
                  </div>

                  {/* Description (if exists) */}
                  {education.description && (
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {education.description}
                    </p>
                  )}

                  {/* Achievements (if exists) */}
                  {education.achievements && (
                    <div>
                      <h4 className="text-white font-semibold mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {education.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-gray-400 text-sm flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Certifications & Courses
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Software Engineer Intern",
                issuer: "HackerRank",
                year: "2025",
              },
              { name: "Problem Solving", issuer: "HackerRank", year: "2025" },
              { name: "SQL-Advanced", issuer: "HackerRank", year: "2025" },
              { name: "Java Basic", issuer: "HackerRank", year: "2025" },
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <h4 className="text-white font-semibold mb-1">{cert.name}</h4>
                <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                <span className="text-gray-400 text-sm font-medium">
                  {cert.year}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
