import {
  BrainCircuit,
  Server,
  Monitor,
  Cloud,
  Database,
  BarChart3,
} from "lucide-react";

const technologies = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    items: [
      "Large Language Models",
      "AI Agents",
      "Prompt Engineering",
      "AI Root Cause Analysis",
    ],
  },
  {
    icon: Server,
    title: "Backend Engineering",
    items: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    icon: Monitor,
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    items: [
      "Docker",
      "Kubernetes",
      "CI/CD",
      "GitHub",
    ],
  },
  {
    icon: BarChart3,
    title: "Observability",
    items: [
      "Logs",
      "Metrics",
      "Tracing",
      "Monitoring",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
    ],
  },
];

export default function TechnologyStack() {
  return (
    <section
      id="technology"
      className="bg-[#020617] py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
            Engineering
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Built With Modern Technologies
          </h2>

          <p className="max-w-3xl mx-auto text-slate-400 text-lg leading-relaxed">
            At Auvriex Technologies, we build AI-powered software using
            modern development frameworks, cloud-native architecture,
            and intelligent engineering systems designed for reliability,
            scalability, and performance.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.title}
                className="rounded-3xl border border-slate-800 bg-[#071224] p-8 hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">

                  <Icon className="text-cyan-400" size={28} />

                </div>

                <h3 className="text-2xl font-semibold mb-6">
                  {tech.title}
                </h3>

                <div className="space-y-3">

                  {tech.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />

                      <span className="text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

              </div>
            );
          })}

        </div>

        <div className="mt-20 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-10">

          <h3 className="text-3xl font-bold mb-5">
            Why This Matters
          </h3>

          <p className="text-slate-300 text-lg leading-relaxed">
            ROOTTRACE is built on modern engineering practices and AI technologies
            to help teams understand software failures faster. By combining runtime
            monitoring, deployment intelligence, infrastructure signals, and
            AI-powered analysis, we aim to reduce investigation time and enable
            engineers to focus on building reliable software.
          </p>

        </div>

      </div>
    </section>
  );
}