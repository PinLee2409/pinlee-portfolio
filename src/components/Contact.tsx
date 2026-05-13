"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPaperPlane,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY",
      );
      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold gradient-text mb-12 text-center">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="glass p-5 flex items-center gap-4 animated-border">
            <FaEnvelope className="text-2xl text-accent" />
            <div>
              <p className="text-xs text-slate-400">Email</p>
              <p className="font-medium">pinle2409@gmail.com</p>
            </div>
          </div>
          <div className="glass p-5 flex items-center gap-4 animated-border">
            <FaPhone className="text-2xl text-accent" />
            <div>
              <p className="text-xs text-slate-400">Phone</p>
              <p className="font-medium">0816802596</p>
            </div>
          </div>
          <div className="glass p-5 flex items-center gap-4 animated-border">
            <FaMapMarkerAlt className="text-2xl text-accent" />
            <div>
              <p className="text-xs text-slate-400">Location</p>
              <p className="font-medium">Ho Chi Minh City, Vietnam</p>
            </div>
          </div>
        </div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 animated-border max-w-2xl mx-auto space-y-6"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="input-field"
          />
          <input
            type="email"
            name="reply_to"
            placeholder="Your Email"
            required
            className="input-field"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="input-field"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full btn-primary"
          >
            <FaPaperPlane />{" "}
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <p className="text-green-400 text-center">
              Message sent! I'll reply soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center">Error! Please try again.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
