import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">

      {/* Hero */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
          About ROOTTRACE
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Engineering Intelligence
          <br />
          Powered by AI
        </h1>

        <p className="text-slate-400 text-xl leading-relaxed max-w-4xl">
          ROOTTRACE is an AI-powered root cause analysis platform built
          for modern engineering teams. The platform automatically
          investigates application failures, deployment issues,
          infrastructure incidents, and runtime exceptions to identify
          the most likely root cause and recommend fixes.
        </p>

      </section>

      {/* Problem */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-8">
          The Problem
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed">
          Engineering teams spend hours investigating failures across
          logs, dashboards, monitoring tools, deployment systems,
          infrastructure platforms, and alerting systems.
        </p>

        <p className="text-slate-400 text-lg leading-relaxed mt-6">
          When an incident occurs, teams often know that something
          failed, but not why it failed. Valuable time is spent manually
          correlating stack traces, deployment events, service logs,
          infrastructure metrics, and runtime exceptions.
        </p>

      </section>

      {/* Solution */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-8">
          How ROOTTRACE Solves It
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <Card
            title="Runtime Error Monitoring"
            text="Capture exceptions and failures from applications in real time."
          />

          <Card
            title="AI Root Cause Analysis"
            text="AI identifies the most likely source of failures automatically."
          />

          <Card
            title="Stack Trace Analysis"
            text="Analyze stack traces and pinpoint exact classes, methods, and lines."
          />

          <Card
            title="Error Classification"
            text="Group and prioritize incidents based on severity and impact."
          />

        </div>

      </section>

      {/* AI Analysis */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-8">
          AI-Powered Investigation
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed">
  ROOTTRACE transforms raw operational data into actionable
  engineering intelligence. By analyzing errors, deployments,
  logs, and infrastructure events together, it helps teams
  identify root causes and resolve incidents significantly faster.
</p>

        <p className="text-slate-400 text-lg leading-relaxed mt-6">
          The platform analyzes stack traces, deployment history,
          infrastructure events, application logs, runtime failures,
          and telemetry signals to generate a human-readable explanation
          of what happened.
        </p>

        <p className="text-slate-400 text-lg leading-relaxed mt-6">
          Engineers receive a root cause summary, confidence score,
          affected components, and recommended remediation steps.
        </p>

      </section>

      {/* Deployment Intelligence */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-8">
          Deployment Intelligence
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed">
          ROOTTRACE continuously correlates incidents with deployments.
        </p>

        <p className="text-slate-400 text-lg leading-relaxed mt-6">
          If a deployment introduces memory pressure, latency spikes,
          dependency failures, configuration issues, or service
          instability, ROOTTRACE automatically highlights the
          relationship.
        </p>

      </section>

     

      {/* Vision */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-8">
          Product Vision
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed">
          Today, ROOTTRACE helps engineering teams understand why
          systems fail.
        </p>

        <p className="text-slate-400 text-lg leading-relaxed mt-6">
          Tomorrow, ROOTTRACE will evolve into a complete AI
          Engineering Intelligence Platform capable of analyzing
          application failures, CI/CD failures, production incidents,
          cloud infrastructure issues, distributed systems, and
          operational workflows.
        </p>

        <p className="text-slate-400 text-lg leading-relaxed mt-6">
          Our vision is to become the intelligence layer between
          software systems and engineering teams.
        </p>

      </section>

      {/* CTA */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-12 text-center">

          <h2 className="text-4xl font-bold mb-6">
            See ROOTTRACE in Action
          </h2>

          <p className="text-slate-400 text-lg mb-10">
            Discover how AI-powered root cause analysis can reduce
            investigation time and improve engineering productivity.
          </p>

          <button className="px-8 py-4 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition">
            Request Demo
          </button>

        </div>

      </section>

      {/* Contact */}

      <section className="max-w-6xl mx-auto px-6 pb-24">

        <h2 className="text-4xl font-bold mb-8">
          Contact Us
        </h2>

        <div className="rounded-3xl border border-slate-800 bg-[#071224] p-10">

          <p className="text-slate-400 text-lg mb-4">
            Interested in ROOTTRACE?
          </p>

          <p className="text-cyan-400 text-xl font-medium">
            auvriex.technologies@gmail.com
          </p>

        </div>

      </section>

    </main>
  );
}

function Card({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-[#071224] p-8">
      <h3 className="text-2xl font-semibold mb-4">
        {title}
      </h3>

      <p className="text-slate-400">
        {text}
      </p>
    </div>
  );
}