"use client";
import { motion } from "framer-motion";
import { FaUniversity, FaJava, FaReact, FaAndroid } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent animate-glow-pulse" />
            <div className="absolute inset-2 rounded-full bg-darker flex items-center justify-center text-7xl text-accent">
              <FaUniversity />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 glass p-10 card-3d animated-border"
        >
          <h2 className="text-4xl font-bold gradient-text mb-6">About Me</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            I&apos;m a passionate{" "}
            <span className="text-white font-semibold">
              Software Engineering student
            </span>{" "}
            at{" "}
            <span className="text-accent font-semibold">
              Ho Chi Minh City College of Industry and Trade
            </span>
            , with hands‑on experience building real‑world software. I
            specialize in{" "}
            <span className="text-accent">Java / Spring Boot</span>,{" "}
            <span className="text-accent">Microservices</span>, and modern
            mobile apps with <span className="text-accent">Android Studio</span>{" "}
            and <span className="text-accent">React Native</span>.
          </p>
          <p className="text-slate-400 mt-4">
            I&apos;ve been freelancing since 2024, delivering full‑stack web
            solutions before diving deep into mobile development. Currently
            focused on microservice architecture and cloud‑native apps.
          </p>
          <div className="mt-8 flex gap-5 text-3xl text-slate-400">
            <FaJava className="hover:text-accent transition cursor-pointer" />
            <FaReact className="hover:text-accent transition cursor-pointer" />
            <FaAndroid className="hover:text-accent transition cursor-pointer" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
