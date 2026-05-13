"use client";
import { motion } from "framer-motion";
import { FaRobot, FaMotorcycle, FaMobileAlt } from "react-icons/fa";

const projects = [
  {
    title: "E‑Commerce Java Spring Boot + ReactJS",
    desc: "Full‑stack e‑commerce platform with RESTful API, React frontend, MySQL. Integrated AI Chatbot that automatically processes payments and manages orders.",
    icon: <FaRobot />,
    tags: ["Java", "Spring Boot", "React", "MySQL", "AI Chatbot"],
  },
  {
    title: "Motorcycle Shop Management (C#)",
    desc: "C# .NET desktop app with face recognition login for employees, large file import, and invoice generation.",
    icon: <FaMotorcycle />,
    tags: ["C#", ".NET", "Face Recognition", "SQL Server"],
  },
  {
    title: "Mobile Booking App",
    desc: "Android booking app (Java, Firebase) with real‑time booking, push notifications, and in‑app payments.",
    icon: <FaMobileAlt />,
    tags: ["Android", "Java", "Firebase", "Notifications"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold gradient-text mb-16 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass card-3d p-0 overflow-hidden group animated-border flex flex-col"
            >
              <div className="h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center text-7xl">
                {project.icon}
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 flex-1">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-primary/20 text-primary-light px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
