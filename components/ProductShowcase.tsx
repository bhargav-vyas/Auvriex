import {
  Search,
  AlertCircle,
  Layers3,
  GitBranch,
  Activity,
  BarChart3,
  Bot,
  Target,
} from "lucide-react";

export default function ProductShowcase() {
  return (
   <section
  id="ProductShowcase"
  className="bg-[#020617] text-white py-24"
>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
          Products
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our Products
        </h2>

        <p className="text-slate-400 text-lg mb-16">
          Intelligent tools built for modern engineering teams.
        </p>

        {/* Product Card */}

        <div className="rounded-3xl overflow-hidden border border-slate-800 bg-[#071224]">

          {/* Top Header */}

          <div className="p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            <div className="flex items-start gap-5">

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                <Search className="text-cyan-400" size={30} />
              </div>

              <div>

                <div className="flex flex-wrap items-center gap-3 mb-2">

                  <h3 className="text-4xl font-bold">
                    RootTrace
                  </h3>

                  <span className="px-4 py-1 rounded-full border border-cyan-500/30 text-cyan-400 text-sm">
                    Flagship Product
                  </span>

                </div>

                <p className="text-slate-400 text-lg">
                  AI-powered incident investigation and root cause analysis platform
                </p>

              </div>

            </div>

            <button className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition">
              Explore RootTrace →
            </button>

          </div>

          {/* Main Content */}

          <div className="border-t border-slate-800 grid lg:grid-cols-2">

            {/* LEFT SIDE */}

           {/* LEFT SIDE */}

<div className="p-8 border-b lg:border-b-0 lg:border-r border-slate-800">

  <div className="grid grid-cols-2 gap-4 mb-8">

    <div className="rounded-2xl bg-[#050b1d] border border-slate-800 p-5">
      <p className="text-4xl font-bold text-cyan-400">91%</p>
      <p className="text-slate-400 text-sm mt-2">
        Confidence Score
      </p>
    </div>

    <div className="rounded-2xl bg-[#050b1d] border border-slate-800 p-5">
      <p className="text-4xl font-bold text-cyan-400">18m</p>
      <p className="text-slate-400 text-sm mt-2">
        Root Cause Time
      </p>
    </div>

    <div className="rounded-2xl bg-[#050b1d] border border-slate-800 p-5">
      <p className="text-4xl font-bold text-cyan-400">2.4M</p>
      <p className="text-slate-400 text-sm mt-2">
        Logs Analyzed
      </p>
    </div>

    <div className="rounded-2xl bg-[#050b1d] border border-slate-800 p-5">
      <p className="text-4xl font-bold text-cyan-400">7</p>
      <p className="text-slate-400 text-sm mt-2">
        Deployments Checked
      </p>
    </div>

  </div>

  <div className="rounded-2xl border border-slate-800 bg-[#050b1d] p-6 mb-8">

    <h4 className="text-white text-xl font-semibold mb-6">
      Investigation Timeline
    </h4>

    <div className="space-y-6">

      <div className="flex gap-4">
        <div className="w-3 h-3 rounded-full bg-red-500 mt-2" />
        <div>
          <p className="text-white font-medium">
            Incident Triggered
          </p>
          <p className="text-slate-400 text-sm">
            Error rate increased by 340%
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-3 h-3 rounded-full bg-cyan-400 mt-2" />
        <div>
          <p className="text-white font-medium">
            Logs Collected
          </p>
          <p className="text-slate-400 text-sm">
            2.4M events processed
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-3 h-3 rounded-full bg-purple-400 mt-2" />
        <div>
          <p className="text-white font-medium">
            Deployment Correlated
          </p>
          <p className="text-slate-400 text-sm">
            Deployment 3f7a9c2 identified
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-3 h-3 rounded-full bg-emerald-400 mt-2" />
        <div>
          <p className="text-white font-medium">
            Root Cause Found
          </p>
          <p className="text-slate-400 text-sm">
            Memory pressure after rollout
          </p>
        </div>
      </div>

    </div>

  </div>

  <div className="grid sm:grid-cols-2 gap-4">

    <Feature
      icon={<AlertCircle size={18} />}
      text="Incident Investigation"
    />

    <Feature
      icon={<BarChart3 size={18} />}
      text="Error Analytics"
    />

    <Feature
      icon={<Layers3 size={18} />}
      text="Log Correlation"
    />

    <Feature
      icon={<GitBranch size={18} />}
      text="Event Correlation"
    />

    <Feature
      icon={<Activity size={18} />}
      text="Deployment Tracking"
    />

    <Feature
      icon={<Target size={18} />}
      text="Root Cause Analysis"
    />

  </div>

</div>

            {/* RIGHT SIDE */}

           {/* Right Side */}

<div className="p-8 bg-[#050b1d]">

  <div className="mb-6">
    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm">
      AI Root Cause Analysis
    </span>
  </div>

  <h3 className="text-3xl font-bold text-white mb-4">
    Spring Boot Production Failure
  </h3>

  <p className="text-slate-400 text-lg leading-relaxed mb-8">
    ROOTTRACE analyzed runtime exceptions, deployment activity,
    stack traces, and infrastructure signals to identify the
    most probable root cause within seconds.
  </p>

  {/* Root Cause Card */}

  <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6 mb-5">

    <p className="text-cyan-400 text-sm uppercase tracking-wider mb-2">
      Root Cause
    </p>

    <h4 className="text-white text-xl font-semibold mb-3">
      Database Connection Pool Exhaustion
    </h4>

    <p className="text-slate-300">
      Connection pool reached maximum capacity after deployment,
      causing request timeouts and elevated API failures.
    </p>

  </div>

  {/* Severity */}

  <div className="grid md:grid-cols-2 gap-5 mb-5">

    <div className="rounded-xl border border-slate-800 bg-[#071224] p-5">
      <p className="text-slate-500 text-sm mb-2">
        Severity
      </p>

      <p className="text-red-400 text-xl font-semibold">
        Critical
      </p>
    </div>

    <div className="rounded-xl border border-slate-800 bg-[#071224] p-5">
      <p className="text-slate-500 text-sm mb-2">
        AI Confidence
      </p>

      <p className="text-emerald-400 text-xl font-semibold">
        96%
      </p>
    </div>

  </div>

  {/* AI Explanation */}

  <div className="rounded-xl border border-slate-800 bg-[#071224] p-5 mb-5">

    <h4 className="text-white font-semibold mb-3">
      AI Explanation
    </h4>

    <p className="text-slate-400">
      A deployment introduced increased database traffic.
      Existing pool limits were insufficient for the new load,
      causing connection starvation and cascading request failures.
    </p>

  </div>

  {/* Suggested Fix */}

  <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">

    <h4 className="text-emerald-400 font-semibold mb-3">
      Recommended Fix
    </h4>

    <ul className="space-y-2 text-slate-300">
      <li>• Increase connection pool size</li>
      <li>• Review recent deployment changes</li>
      <li>• Enable connection monitoring</li>
      <li>• Restart affected service instances</li>
    </ul>

  </div>

</div>

          </div>

        </div>

        {/* Coming Soon */}

        <div className="mt-10 rounded-3xl border border-slate-800 bg-[#071224] p-8 flex flex-col lg:flex-row justify-between gap-6">

          <div>

            <p className="text-slate-500 uppercase tracking-[0.25em] text-sm mb-3">
              Coming Soon
            </p>

            <h3 className="text-2xl font-semibold mb-2">
              More products from Auvriex Technologies
            </h3>

            <p className="text-slate-400">
              We are actively building additional intelligent tools
              for engineering teams.
            </p>

          </div>

          <div className="flex items-center">

            <span className="px-6 py-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400">
              In Development
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

function Feature({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 text-slate-300">
      <div className="text-cyan-400">
        {icon}
      </div>

      <span>{text}</span>
    </div>
  );
}