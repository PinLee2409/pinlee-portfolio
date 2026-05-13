"use client";
import { motion } from "framer-motion";
import {
  FaJava,
  FaJs,
  FaReact,
  FaAndroid,
  FaDocker,
  FaGithub,
  FaLaravel,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiSpringboot,
  SiSharp,
  SiFirebase,
  SiKubernetes,
} from "react-icons/si";

const categories = [
  {
    name: "Frontend",
    skills: [
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
    ],
  },
  {
    name: "Backend & Microservices",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Microservices", icon: <SiKubernetes /> },
      { name: "C#", icon: <SiSharp /> },
      { name: "Laravel", icon: <FaLaravel /> },
    ],
  },
  {
    name: "Mobile",
    skills: [
      { name: "React Native", icon: <FaReact /> },
      { name: "Android Studio", icon: <FaAndroid /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "CI/CD", icon: <FaGithub /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "VS Code", icon: <SiSharp /> },
      { name: "GitHub", icon: <FaGithub /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold gradient-text mb-16 text-center">
          Tech Arsenal
        </h2>
        <div className="space-y-24">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-accent mb-8 inline-block border-b-2 border-primary/40 pb-2">
                {cat.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.1, y: -8 }}
                    className="glass p-5 card-3d flex flex-col items-center gap-3 text-center animated-border cursor-default"
                  >
                    <span className="text-4xl text-accent">{skill.icon}</span>
                    <span className="font-medium text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
