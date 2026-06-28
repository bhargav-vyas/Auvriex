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

        <div className="rounded-3xl border border-slate-800 bg-[#0B1220] p-8">
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
        </div>

      </div>
    </section>
  );
}