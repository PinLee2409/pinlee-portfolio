"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaJava, FaReact, FaAndroid } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const roles = [
  "Full Stack Developer",
  "Mobile Developer",
  "Microservices Architect",
];

export default function Intro() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: NodeJS.Timeout;
    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timer = setTimeout(
          () => setDisplayText(currentRole.slice(0, displayText.length + 1)),
          80,
        );
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        timer = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 40);
      }
    }
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="intro"
      className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-32 overflow-hidden"
    >
      {/* Các khối hình học trừu tượng */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-accent/5 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
        {/* LEFT: Nội dung */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-10"
        >
          <div>
            <p className="text-accent uppercase tracking-[8px] text-sm font-medium mb-4">
              Discover the future
            </p>
            <h1 className="text-6xl md:text-8xl font-black leading-none mb-4">
              <span className="gradient-text">PinLee</span>
            </h1>
            <div className="h-16 md:h-20 flex items-center">
              <span className="text-3xl md:text-5xl font-bold text-white border-r-4 border-accent pr-2">
                {displayText}
              </span>
            </div>
            <p className="text-slate-400 text-lg max-w-2xl mt-6">
              Building innovative web & mobile experiences with modern
              technologies. Focus on performance, scalability, and design.
            </p>
            <div className="flex gap-4 mt-10">
              <a href="#projects" className="btn-primary">
                View Work
              </a>
              <a href="#contact" className="btn-outline">
                Contact
              </a>
            </div>
          </div>

          {/* About Me card nổi bật */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 card-3d animated-border max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl text-accent font-mono font-black">
                &lt;/&gt;
              </span>
              <h3 className="text-2xl font-bold text-white">About Me</h3>
            </div>
            <p className="text-slate-300 text-base leading-7">
              I'm a{" "}
              <span className="font-semibold text-white">
                Software Engineering student
              </span>{" "}
              at{" "}
              <span className="text-accent font-medium">
                Ho Chi Minh City College of Industry and Trade
              </span>
              . Freelancing since 2024, delivering full‑stack web apps, Android
              solutions, and microservice architectures.
            </p>
            <div className="mt-6 flex gap-5 text-2xl text-slate-400">
              <FaJava
                className="hover:text-accent transition cursor-pointer"
                title="Java"
              />
              <FaReact
                className="hover:text-accent transition cursor-pointer"
                title="React"
              />
              <FaAndroid
                className="hover:text-accent transition cursor-pointer"
                title="Android"
              />
              <SiTypescript
                className="hover:text-accent transition cursor-pointer"
                title="TypeScript"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: Avatar 3D */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0 flex flex-col items-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Vòng xoay bên ngoài */}
            <div className="absolute -inset-6 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />
            <div
              className="absolute -inset-3 rounded-full border border-accent/20 animate-spin-slow"
              style={{ animationDirection: "reverse", animationDuration: "8s" }}
            />

            {/* Avatar */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/40 shadow-[0_0_60px_rgba(0,102,255,0.3)] group">
              {imgError ? (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-accent text-white text-8xl font-mono">
                  &lt;/&gt;
                </div>
              ) : (
                <img
                  src="/pinlee-portfolio/image.png"
                  alt="PinLee"
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              )}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white font-semibold text-xl">
                  Software Engineer
                </span>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-accent text-xl font-semibold tracking-widest">
              Software Engineer
            </p>
            <p className="text-slate-500 text-sm mt-1">
              Ho Chi Minh City, Vietnam
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
