"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  GraduationCap,
  Globe2,
  Mail,
  MapPin,
  Menu,
  Network,
  Server,
  Smartphone,
  X,
} from "lucide-react";

const nav = [
  ["Work", "work"],
  ["Capabilities", "capabilities"],
  ["About", "about"],
  ["Education", "education"],
  ["Contact", "contact"],
] as const;

const projects = [
  {
    number: "01",
    title: "KodeX",
    eyebrow: "BSCS Final Year Project",
    description:
      "A unified full-stack web application combining student learning, freelance opportunities, recruiter workflows, programming resources, and in-browser code execution.",
    stack: ["Next.js", "MongoDB", "Full-Stack Web"],
    icon: Code2,
  },
  {
    number: "02",
    title: "Gas Leakage Detection & Alert System",
    eyebrow: "ADP Final Year Project",
    description:
      "An IoT-based safety system connecting sensor-driven gas leakage detection to a custom web interface for remote visibility and alert workflows.",
    stack: ["IoT", "Web Interface", "Alerts"],
    icon: Network,
  },
];

const capabilities = [
  { title: "Web Applications", detail: "Full-stack and responsive web application development.", icon: Globe2 },
  { title: "Next.js", detail: "Modern JavaScript applications and integrated web experiences.", icon: Code2 },
  { title: "Flutter", detail: "Cross-platform application development with Dart.", icon: Smartphone },
  { title: "Data & APIs", detail: "MongoDB, MySQL, database integration, and REST API workflows.", icon: Database },
  { title: "Version Control", detail: "Git and GitHub for source control and project collaboration.", icon: Server },
  { title: "IoT Integration", detail: "Connecting sensor-driven systems to software interfaces and alerts.", icon: Network },
];

const keywords = [
  "Next.js",
  "Flutter",
  "JavaScript",
  "Dart",
  "MongoDB",
  "MySQL",
  "REST APIs",
  "Git / GitHub",
  "IoT Integration",
  "Online IDE",
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    setMenuOpen(false);
  };

  return (
    <main>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8" aria-label="Primary navigation">
        <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 shadow-sm md:px-5">
          <button
            onClick={() => scrollTo("top")}
            className="display text-xl font-bold tracking-tight text-[#174a35]"
            aria-label="Go to top"
          >
            SG<span className="text-[#101612]">.</span>
          </button>
          <nav className="hidden items-center gap-6 text-sm text-[#59645d] md:flex">
            {nav.map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="transition hover:text-[#174a35]">
                {label}
              </button>
            ))}
          </nav>
          <a
            href="mailto:sulemang191@gmail.com"
            className="hidden rounded-full bg-[#174a35] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#286746] md:inline-flex"
          >
            Get in touch
          </a>
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-lg p-2 md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-3 md:hidden">
            {nav.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="block w-full rounded-xl px-4 py-3 text-left text-sm hover:bg-white/70"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </header>

      <section id="top" className="hero-grid relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-36 md:px-8">
        <div className="pointer-events-none absolute -left-24 top-28 h-72 w-72 rounded-full bg-[#286746]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#174a35]/8 blur-3xl" />
        <div className="mx-auto grid w-full max-w-6xl items-end gap-14 md:grid-cols-[1.15fr_.85fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="kicker mb-6 flex items-center gap-2"
            >
              <span className="h-2 w-2 rounded-full bg-[#286746]" />
              Computer Science graduate · Junior software developer
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="display max-w-5xl text-[clamp(4rem,10vw,8.5rem)] font-bold leading-[0.86] text-[#101612]"
            >
              Suleman
              <br />
              <span className="text-[#174a35]">Gill.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-[#59645d] md:text-xl"
            >
              A Computer Science graduate from the University of Sialkot building project-driven software with
              <strong className="text-[#101612]"> Next.js, Flutter, MongoDB, MySQL, and REST APIs.</strong>
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <button
                onClick={() => scrollTo("work")}
                className="group flex items-center gap-2 rounded-full bg-[#174a35] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#286746]"
              >
                Explore projects
                <ArrowDownRight size={16} className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>
              <a
                href="https://github.com/SulemanGill"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-[#174a35]/20 bg-white/50 px-5 py-3 text-sm font-semibold text-[#174a35] transition hover:bg-white"
              >
                View GitHub <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="hidden md:block"
            aria-label="Developer profile snapshot"
          >
            <div className="glass relative overflow-hidden rounded-[2rem] p-7 shadow-[0_20px_80px_rgba(16,22,18,.06)]">
              <div className="mb-10 flex items-center justify-between">
                <span className="kicker">Developer profile</span>
                <GraduationCap size={19} className="text-[#174a35]" />
              </div>
              <div className="space-y-7">
                {[
                  ["01", "Project-driven", "Built full-stack and IoT-connected systems as academic projects."],
                  ["02", "Web + mobile", "Focused on Next.js web applications and Flutter development."],
                  ["03", "Data-aware", "Hands-on with MongoDB, MySQL, REST APIs, and database integration."],
                ].map(([n, title, body]) => (
                  <div key={n} className="grid grid-cols-[40px_1fr] gap-4 border-t border-[#174a35]/10 pt-5 first:border-0 first:pt-0">
                    <span className="text-xs font-bold text-[#286746]">{n}</span>
                    <div>
                      <p className="font-semibold">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-[#59645d]">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-[#59645d]">
              <MapPin size={15} className="text-[#174a35]" /> Daska, Pakistan
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="border-y border-[#174a35]/10 bg-white/35 px-5 py-7 md:px-8" aria-label="Core technologies">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2">
          <span className="mr-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#59645d]">Core stack</span>
          {keywords.map((keyword) => (
            <span key={keyword} className="rounded-full border border-[#174a35]/10 bg-white/40 px-3 py-1.5 text-xs font-semibold text-[#174a35]">
              {keyword}
            </span>
          ))}
        </div>
      </section>

      <section id="work" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="kicker">Selected software projects</p>
          </Reveal>
          <Reveal delay={0.05} className="mt-4 max-w-3xl">
            <h2 className="display text-5xl font-bold leading-[0.95] md:text-7xl">
              Built to solve a
              <br />
              <span className="text-[#174a35]">real problem.</span>
            </h2>
          </Reveal>

          <div className="mt-14 space-y-5">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Reveal key={project.title} delay={index * 0.08}>
                  <article className="project-card rounded-[2rem] border border-[#174a35]/10 bg-white/65 p-6 md:p-8">
                    <div className="grid gap-8 md:grid-cols-[72px_1fr_1.1fr_auto] md:items-start">
                      <span className="display text-3xl text-[#174a35]/50">{project.number}</span>
                      <div>
                        <div className="mb-2 flex items-center gap-2 text-[#174a35]">
                          <Icon size={17} aria-hidden="true" />
                          <span className="kicker">{project.eyebrow}</span>
                        </div>
                        <h3 className="display text-4xl font-bold leading-tight md:text-5xl">{project.title}</h3>
                      </div>
                      <div>
                        <p className="leading-7 text-[#59645d]">{project.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.stack.map((item) => (
                            <span key={item} className="rounded-full border border-[#174a35]/10 px-3 py-1 text-xs font-semibold text-[#174a35]">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#174a35]/10 text-[#174a35]" aria-hidden="true">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="capabilities" className="border-y border-[#174a35]/10 bg-white/35 px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-[.72fr_1.28fr]">
            <Reveal>
              <p className="kicker">Technical capabilities</p>
              <h2 className="display mt-4 text-5xl font-bold leading-[0.95] md:text-6xl">
                The stack
                <br />
                <span className="text-[#174a35]">behind the work.</span>
              </h2>
            </Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {capabilities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={index * 0.04}>
                    <div className="glass h-full rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/80">
                      <Icon size={19} className="text-[#174a35]" aria-hidden="true" />
                      <h3 className="mt-5 font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#59645d]">{item.detail}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#174a35] px-5 py-24 text-[#f6f2e8] md:px-8 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[.7fr_1.3fr]">
          <Reveal>
            <p className="kicker text-[#b8cfbd]">About</p>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <h2 className="display max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                A graduate focused on building software, not just studying it.
              </h2>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-[#d9e3db]/80">
                My experience so far is project-based and hands-on. I built KodeX as a full-stack platform for learning,
                freelancing, recruitment, programming resources, and in-browser code execution, and developed an IoT
                gas leakage detection system connected to a custom web interface for remote visibility and alerts.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/15 px-4 py-2 text-sm">Computer Science Graduate</span>
                <span className="rounded-full border border-white/15 px-4 py-2 text-sm">Junior Software Developer</span>
                <span className="rounded-full border border-white/15 px-4 py-2 text-sm">Project-Based Experience</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="education" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="kicker">Education</p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Reveal>
              <article className="glass rounded-[2rem] p-7">
                <div className="flex items-center justify-between">
                  <GraduationCap className="text-[#174a35]" size={22} aria-hidden="true" />
                  <span className="kicker">2021–2026</span>
                </div>
                <h3 className="display mt-7 text-3xl font-bold">Bachelor of Science in Computer Science</h3>
                <p className="mt-2 font-semibold text-[#174a35]">University of Sialkot</p>
                <p className="mt-4 text-sm leading-6 text-[#59645d]">16 Years of Education · Completed</p>
              </article>
            </Reveal>
            <Reveal delay={0.06}>
              <article className="glass rounded-[2rem] p-7">
                <div className="flex items-center justify-between">
                  <GraduationCap className="text-[#174a35]" size={22} aria-hidden="true" />
                  <span className="kicker">2021–2026</span>
                </div>
                <h3 className="display mt-7 text-3xl font-bold">Associate Degree Program</h3>
                <p className="mt-2 font-semibold text-[#174a35]">University of Sialkot</p>
                <p className="mt-4 text-sm leading-6 text-[#59645d]">14 Years of Education · Completed</p>
              </article>
            </Reveal>
          </div>

          <Reveal delay={0.08} className="mt-10">
            <div className="rounded-[1.75rem] border border-[#174a35]/10 bg-[#174a35]/[0.035] p-6 md:p-7">
              <div className="flex gap-4">
                <CheckCircle2 className="mt-0.5 shrink-0 text-[#174a35]" size={20} aria-hidden="true" />
                <p className="max-w-4xl text-sm leading-7 text-[#59645d]">
                  Academic work centers on software development, web applications, databases, and connected systems,
                  with both major projects presented here as evidence of practical implementation.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="px-5 pb-10 md:px-8">
        <Reveal className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#101612] px-7 py-12 text-[#f6f2e8] md:px-12 md:py-16">
            <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#286746]/40 blur-3xl" />
            <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="kicker text-[#b8cfbd]">Contact</p>
                <h2 className="display mt-4 max-w-3xl text-5xl font-bold leading-[0.95] md:text-7xl">
                  Let’s talk about
                  <br />
                  <span className="text-[#b8cfbd]">software.</span>
                </h2>
                <p className="mt-6 max-w-xl leading-7 text-white/65">
                  For opportunities, project conversations, or technical collaboration, reach out directly.
                </p>
              </div>
              <a
                href="mailto:sulemang191@gmail.com"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-[#f6f2e8] px-6 py-3 font-semibold text-[#174a35] transition hover:scale-[1.02]"
              >
                <Mail size={17} />
                Email Suleman
              </a>
            </div>

            <div className="relative mt-12 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5 text-sm text-white/70">
              <span className="mr-auto flex items-center gap-2">
                <MapPin size={15} /> Daska, Pakistan
              </span>
              <a
                href="https://linkedin.com/in/sulemangill"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-white/10 p-2 transition hover:bg-white/10"
              >
                <h4>LinkedIn</h4>
              </a>
              <a
                href="https://github.com/SulemanGill"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-white/10 p-2 transition hover:bg-white/10"
              >
                <h4>GitHub</h4>
              </a>
              <a
                href="mailto:sulemang191@gmail.com"
                aria-label="Email"
                className="rounded-full border border-white/10 p-2 transition hover:bg-white/10"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="px-5 pb-8 pt-2 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-[#174a35]/10 pt-6 text-xs text-[#59645d] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Suleman Gill</span>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/sitemap.xml" className="inline-flex items-center gap-1 hover:text-[#174a35]">
              Sitemap <ChevronRight size={13} />
            </a>
            <span className="inline-flex items-center gap-1">
              <BriefcaseBusiness size={13} /> Portfolio
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
