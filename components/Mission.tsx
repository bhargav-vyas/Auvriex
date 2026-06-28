import {
  Brain,
  Database,
  Shield,
  Eye,
  AlertCircle,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description:
      "Machine learning models that understand engineering context and surface root causes automatically.",
    color: "cyan",
  },
  {
    icon: Database,
    title: "Operational Intelligence",
    description:
      "Transform logs, metrics, traces, and events into actionable engineering insights.",
    color: "purple",
  },
  {
    icon: Shield,
    title: "Reliability Engineering",
    description:
      "Built around SRE principles to improve uptime and reduce operational complexity.",
    color: "green",
  },
  {
    icon: Eye,
    title: "Observability Insights",
    description:
      "Unified visibility across services, infrastructure, deployments, and incidents.",
    color: "cyan",
  },
  {
    icon: AlertCircle,
    title: "Incident Intelligence",
    description:
      "Correlate signals automatically and identify issues before they escalate.",
    color: "purple",
  },
  {
    icon: Zap,
    title: "Engineering Productivity",
    description:
      "Reduce investigation time and help teams focus on building instead of firefighting.",
    color: "green",
  },
];

export default function Mission() {
  return (
    <section id="mission"
  className="bg-[#020617] text-white py-24" >
        <section
//   id="features"
//   className="bg-[#020617] text-white py-24"
></section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
          Mission
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Why We Exist
        </h2>

        <div className="max-w-4xl text-slate-400 text-lg leading-relaxed mb-16">
          <p className="mb-6">
            Modern engineering teams are overwhelmed by logs,
            alerts, metrics, dashboards, incidents, and fragmented
            tooling.
          </p>

          <p>
            Auvriex exists to transform operational complexity into
            actionable intelligence, helping teams understand systems
            faster and make better decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-slate-800 bg-[#071224] p-8 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div
                  className={`
                    w-14 h-14 rounded-2xl flex items-center justify-center mb-6
                    ${
                      item.color === "cyan"
                        ? "bg-cyan-500/10 text-cyan-400"
                        : item.color === "purple"
                        ? "bg-purple-500/10 text-purple-400"
                        : "bg-emerald-500/10 text-emerald-400"
                    }
                  `}
                >
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}