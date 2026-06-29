export default function CompanySection() {
  return (
    <section id="about"
  className="bg-[#020617] text-white py-24">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16">

        <div>
          <h2 className="text-5xl font-bold text-white mb-8">
            What We Do
          </h2>

          <p className="text-slate-300 text-xl leading-10">
            Auvriex Technologies is an AI and Software company focused
            on building intelligent tools for engineering teams.
          </p>

          <p className="text-slate-400 text-xl leading-10 mt-8">
            Our products help organizations monitor systems,
            investigate incidents, analyze operational data,
            and improve software reliability at scale.
          </p>

          <div className="mt-12 space-y-5 text-slate-300">
            <p>✓ Monitor systems and infrastructure health</p>
            <p>✓ Analyze logs, metrics, traces and events</p>
            <p>✓ Investigate production incidents faster</p>
            <p>✓ Identify root causes through intelligent correlation</p>
            <p>✓ Improve reliability and operational efficiency</p>
          </div>
        </div>

        {/* <div className="rounded-3xl border border-slate-800 bg-[#0B1220] p-8">
          <h3 className="text-cyan-400 uppercase tracking-widest">
            System Overview
          </h3>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-slate-900 rounded-2xl p-6">
              <h4 className="text-4xl text-white font-bold">247</h4>
              <p className="text-slate-400">Services</p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6">
              <h4 className="text-4xl text-white font-bold">3</h4>
              <p className="text-slate-400">Incidents</p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6">
              <h4 className="text-4xl text-white font-bold">12</h4>
              <p className="text-slate-400">Deployments</p>
            </div>
          </div>
        </div> */}
        <div className="rounded-3xl border border-slate-800 bg-[#0B1220] p-8">

  {/* Header */}

  <div className="flex items-center justify-between mb-8">

    <div>
      <h3 className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
        ROOTTRACE Workflow
      </h3>

      <p className="text-slate-500 mt-2">
        AI-powered incident investigation pipeline
      </p>
    </div>

    <div className="flex items-center gap-2 text-emerald-400 text-sm">
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
      Active
    </div>

  </div>

  {/* Workflow */}

  <div className="space-y-5">

    {/* Step 1 */}

    <div className="flex items-start gap-4">

      <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 font-semibold">
        1
      </div>

      <div>
        <h4 className="text-white font-semibold">
          Runtime Exception Captured
        </h4>

        <p className="text-slate-400 text-sm mt-1">
          ROOTTRACE captures application exceptions together with request
          context and runtime information.
        </p>
      </div>

    </div>

    <div className="ml-5 border-l border-slate-700 h-6"></div>

    {/* Step 2 */}

    <div className="flex items-start gap-4">

      <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-semibold">
        2
      </div>

      <div>
        <h4 className="text-white font-semibold">
          Stack Trace Analysis
        </h4>

        <p className="text-slate-400 text-sm mt-1">
          The platform analyzes stack traces to identify the affected
          components, classes, and methods.
        </p>
      </div>

    </div>

    <div className="ml-5 border-l border-slate-700 h-6"></div>

    {/* Step 3 */}

    <div className="flex items-start gap-4">

      <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-semibold">
        3
      </div>

      <div>
        <h4 className="text-white font-semibold">
          Deployment Correlation
        </h4>

        <p className="text-slate-400 text-sm mt-1">
          Recent deployments and configuration changes are correlated
          with the detected incident.
        </p>
      </div>

    </div>

    <div className="ml-5 border-l border-slate-700 h-6"></div>

    {/* Step 4 */}

    <div className="flex items-start gap-4">

      <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-semibold">
        4
      </div>

      <div>
        <h4 className="text-white font-semibold">
          Infrastructure Analysis
        </h4>

        <p className="text-slate-400 text-sm mt-1">
          Infrastructure events, resource utilization, and service health
          are evaluated to understand operational impact.
        </p>
      </div>

    </div>

    <div className="ml-5 border-l border-slate-700 h-6"></div>

    {/* Step 5 */}

    <div className="flex items-start gap-4">

      <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-semibold">
        AI
      </div>

      <div>
        <h4 className="text-white font-semibold">
          AI Root Cause Analysis
        </h4>

        <p className="text-slate-400 text-sm mt-1">
          ROOTTRACE correlates runtime exceptions, deployments,
          infrastructure signals, and telemetry data to identify the
          most likely root cause.
        </p>
      </div>

    </div>

    <div className="ml-5 border-l border-slate-700 h-6"></div>

    {/* Step 6 */}

    <div className="flex items-start gap-4">

      <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-semibold">
        ✓
      </div>

      <div>
        <h4 className="text-white font-semibold">
          Recommended Resolution
        </h4>

        <p className="text-slate-400 text-sm mt-1">
          Engineers receive a clear explanation of the issue along with
          actionable recommendations to accelerate resolution.
        </p>
      </div>

    </div>

  </div>

</div>

      </div>
    </section>
  );
}