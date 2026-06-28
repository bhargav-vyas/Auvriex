export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Brand */}

          <div className="lg:col-span-2">

            <h3 className="text-3xl font-bold text-white mb-5">
              Auvriex
            </h3>

            <p className="text-slate-400 text-lg leading-relaxed max-w-md mb-8">
              Building intelligent software products
              for modern engineering teams.
            </p>

            <a
              href="mailto:auvriex.technologies@gmail.com"
              className="text-cyan-400 hover:text-cyan-300 transition"
            >
              auvriex.technologies@gmail.com
            </a>

          </div>

          {/* Product */}

          <div>

            <h4 className="text-slate-500 uppercase tracking-[0.2em] text-sm mb-6">
              Product
            </h4>

            <div className="space-y-4">

              <a href="#" className="block text-slate-300 hover:text-white">
                RootTrace
              </a>

              <a href="#" className="block text-slate-300 hover:text-white">
                Features
              </a>

              <a href="#" className="block text-slate-300 hover:text-white">
                Documentation
              </a>

            </div>

          </div>

          {/* Company */}

          <div>

            <h4 className="text-slate-500 uppercase tracking-[0.2em] text-sm mb-6">
              Company
            </h4>

            <div className="space-y-4">

              <a href="#" className="block text-slate-300 hover:text-white">
                About
              </a>

              <a href="#" className="block text-slate-300 hover:text-white">
                Contact
              </a>

            </div>

          </div>

          {/* Legal */}

          <div>

            <h4 className="text-slate-500 uppercase tracking-[0.2em] text-sm mb-6">
              Legal
            </h4>

            <div className="space-y-4">

              <a href="#" className="block text-slate-300 hover:text-white">
                Privacy Policy
              </a>

              <a href="#" className="block text-slate-300 hover:text-white">
                Terms of Service
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between gap-4">

          <p className="text-slate-500">
            © 2025 Auvriex Technologies. All rights reserved.
          </p>

          <p className="text-slate-500 font-mono">
            Built in India 🇮🇳
          </p>

        </div>

      </div>

    </footer>
  );
}