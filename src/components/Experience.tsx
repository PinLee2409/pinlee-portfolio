"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full‑stack Web Freelancer",
    company: "Self‑Employed",
    period: "Jan 2024 – Present",
    desc: "Developed full‑stack websites with React, Java Spring Boot, and Node. Managed projects independently from design to deployment.",
  },
  {
    title: "Mobile Developer (Android)",
    company: "Freelance",
    period: "Jul 2024 – Present",
    desc: "Building native Android apps with Android Studio (Java), Firebase, and REST APIs. Published apps on Google Play.",
  },
  {
    title: "Full‑stack Microservices Engineer",
    company: "Remote Projects",
    period: "Jan 2025 – Present",
    desc: "Designing and implementing microservice architectures with Spring Cloud, Docker, Kubernetes. Building mobile apps with React Native.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold gradient-text mb-16 text-center">
          Experience
        </h2>
        <div className="relative border-l-2 border-primary/40 ml-3">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="mb-12 ml-8 relative pl-6"
            >
              <div className="timeline-dot" />
              <div className="glass p-6 animated-border card-3d">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-accent text-sm font-medium">{exp.company}</p>
                <p className="text-slate-400 text-sm mb-2">{exp.period}</p>
                <p className="text-slate-300">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
