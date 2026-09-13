"use client";

import type { ReactNode } from "react";
import {
  FaAndroid,
  FaAws,
  FaBootstrap,
  FaDocker,
  FaJava,
  FaJs,
  FaLaravel,
  FaReact,
} from "react-icons/fa";
import {
  SiApachekafka,
  SiDotnet,
  SiExpo,
  SiFirebase,
  SiGit,
  SiGithubactions,
  SiJson,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNeo4J,
  SiNextdotjs,
  SiNginx,
  SiRedis,
  SiSocketdotio,
  SiSpring,
  SiSharp,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiWebrtc,
} from "react-icons/si";
import type { Dictionary } from "@/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const marks: Record<string, ReactNode> = {
  JavaScript: <FaJs />,
  TypeScript: <SiTypescript />,
  React: <FaReact />,
  "Next.js": <SiNextdotjs />,
  "Tailwind CSS": <SiTailwindcss />,
  Bootstrap: <FaBootstrap />,
  Java: <FaJava />,
  "Spring Boot": <SiSpringboot />,
  "Spring Cloud": <SiSpring />,
  "C#": <SiSharp />,
  ".NET": <SiDotnet />,
  Laravel: <FaLaravel />,
  "REST APIs": <SiJson />,
  Android: <FaAndroid />,
  "React Native": <FaReact />,
  Expo: <SiExpo />,
  Firebase: <SiFirebase />,
  Kafka: <SiApachekafka />,
  "Socket.IO": <SiSocketdotio />,
  WebRTC: <SiWebrtc />,
  "Server-Sent Events": <SiJson />,
  Neo4j: <SiNeo4J />,
  Redis: <SiRedis />,
  Nginx: <SiNginx />,
  "AWS EC2": <FaAws />,
  MySQL: <SiMysql />,
  MongoDB: <SiMongodb />,
  Docker: <FaDocker />,
  Kubernetes: <SiKubernetes />,
  "GitHub Actions": <SiGithubactions />,
  Git: <SiGit />,
};

export default function Stack({ dict }: { dict: Dictionary }) {
  const t = dict.stack;
  const total = t.groups.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <section id="stack" className="section">
      <div className="wrap">
        <SectionHead
          label={t.label}
          title={t.title}
          meta={`${total} ${t.metaUnit}`}
        />

        <div className="stack-rows">
          {t.groups.map((group, i) => (
            <Reveal key={group.name} delay={i * 60}>
              <div className="stack-row">
                <div>
                  <h3 className="mono text-gold">{group.name}</h3>
                  <p className="mt-1.5 text-[0.8125rem] text-muted">
                    {group.note}
                  </p>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {marks[item] && <span aria-hidden="true">{marks[item]}</span>}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
