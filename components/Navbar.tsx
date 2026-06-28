import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-slate-800 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Auvriex Technologies"
            width={130}
            height={35}
            priority
            className="object-contain"
          />
        </div>

       <div className="hidden md:flex gap-8 text-slate-300">

  <a href="#home" className="hover:text-cyan-400 transition">
    Home
  </a>
 <a href="#about" className="hover:text-cyan-400 transition">
    About
  </a>
  <a href="#ProductShowcase" className="hover:text-cyan-400 transition">
    Products
  </a>
  <a href="#mission" className="hover:text-cyan-400 transition">
    Mission
  </a>

  <a href="#vision" className="hover:text-cyan-400 transition">
    Vision
  </a>

  <a href="#contact" className="hover:text-cyan-400 transition">
    Contact
  </a>

</div>

        {/* Desktop CTA */}
        <button className="hidden md:block px-5 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl">
          ☰
        </button>

      </div>
    </nav>
  );
}