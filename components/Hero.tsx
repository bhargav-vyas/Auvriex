export default function Hero() {
  return (
    <section  id="home"
  className="bg-[#020617] text-white">
        <section
 
></section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">

        {/* Badge */}
        <div className="flex justify-center lg:justify-start">
          <div className="inline-flex items-center rounded-full border border-cyan-500/20 px-4 py-2 text-cyan-400 mb-6 sm:mb-8 text-[10px] sm:text-sm text-center">
            Auvriex Technologies • AI & Software Company
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight max-w-5xl text-center lg:text-left">
          Building Intelligent Software
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            for Modern Engineering Teams
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-slate-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto lg:mx-0 text-center lg:text-left leading-relaxed">
          Auvriex Technologies builds AI-powered software products that help
          engineering teams investigate incidents, improve reliability, and
          understand complex systems faster.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

          <button className="w-full sm:w-auto px-6 py-4 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition">
            Explore RootTracer
          </button>

          <button  
      
          className="w-full sm:w-auto px-6 py-4 rounded-xl border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition">
            Learn About Auvriex
          </button>

        </div>

        {/* Tags */}
        <div className="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start text-sm">

          <span className="px-3 py-1 rounded-full border border-slate-800 text-slate-400">
            Engineering Operations
          </span>

          <span className="px-3 py-1 rounded-full border border-slate-800 text-slate-400">
            Incident Intelligence
          </span>

          <span className="px-3 py-1 rounded-full border border-slate-800 text-slate-400">
            Observability
          </span>

          <span className="px-3 py-1 rounded-full border border-slate-800 text-slate-400">
            Reliability Engineering
          </span>

        </div>

      </div>
    </section>
  );
}