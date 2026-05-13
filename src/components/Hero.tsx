"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaJava, FaReact, FaAndroid, FaGithub } from "react-icons/fa";
import { SiSpringboot, SiNextdotjs, SiDocker } from "react-icons/si";

const roles = ["Full Stack", "Mobile Dev", "Microservices"];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: NodeJS.Timeout;
    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timer = setTimeout(
          () => setDisplayText(currentRole.slice(0, displayText.length + 1)),
          120,
        );
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        timer = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 60);
      }
    }
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  // Particle network canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId: number;
    const particlesArray: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particleCount = 100;
    for (let i = 0; i < particleCount; i++) {
      particlesArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2 + 1,
      });
    }

    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            ctx!.strokeStyle = `rgba(0,102,255,${1 - distance / 120})`;
            ctx!.lineWidth = 0.5;
            ctx!.beginPath();
            ctx!.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx!.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx!.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx!.fillStyle = "rgba(0, 212, 255, 0.8)";
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fill();
      });
      connectParticles();
      animationId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      {/* Floating BG icons */}
      <div className="absolute inset-0 z-0 opacity-10">
        <FaJava
          className="absolute top-1/4 left-[10%] text-7xl float-tech"
          style={{ animationDelay: "0s" }}
        />
        <FaReact
          className="absolute top-[30%] right-[15%] text-6xl float-tech"
          style={{ animationDelay: "1.5s" }}
        />
        <FaAndroid
          className="absolute bottom-[20%] left-[20%] text-5xl float-tech"
          style={{ animationDelay: "3s" }}
        />
        <SiSpringboot
          className="absolute bottom-[30%] right-[10%] text-6xl float-tech"
          style={{ animationDelay: "2s" }}
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-accent uppercase tracking-[8px] text-sm mb-6 font-medium"
        >
          Software Engineer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-black leading-tight mb-6"
        >
          Hey, I&apos;m <span className="gradient-text">PinLee</span>
        </motion.h1>
        <div className="h-20 md:h-24 flex justify-center items-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl md:text-5xl font-bold text-white border-r-4 border-accent pr-2"
          >
            {displayText}
          </motion.span>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-slate-400 text-lg max-w-2xl mx-auto mb-10"
        >
          Crafting high‑performance web & mobile apps with Java, Spring Boot,
          React Native, and modern DevOps.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="flex gap-5 justify-center flex-wrap"
        >
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-outline">
            Let&apos;s Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
}
