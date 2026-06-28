export default function Vision() {
  return (
    <section  id="vision"
  className="bg-[#020617] text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Label */}
        <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm mb-6">
          Vision
        </p>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-10">
          Engineering Intelligence for Modern Teams
        </h2>

        {/* Description */}
        <p className="max-w-4xl mx-auto text-slate-400 text-lg sm:text-xl lg:text-2xl leading-relaxed">
          ROOTTRACE is building the future of AI-powered engineering
          intelligence. From application failures and deployment
          breakdowns to infrastructure incidents and distributed system
          outages, our mission is to help engineering teams understand,
          diagnose, and resolve issues faster — before customers are
          affected.
        </p>

        {/* Buttons */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5">

          <button className="px-10 py-5 rounded-2xl bg-cyan-400 text-black font-semibold text-lg hover:bg-cyan-300 transition-all">
            Request Demo →
          </button>

          <a
            href="/about"
            className="text-slate-400 text-lg hover:text-white transition underline underline-offset-4"
          >
            Learn more about Auvriex Technologies
          </a>

        </div>

      </div>
    </section>
  );
}