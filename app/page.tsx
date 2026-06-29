import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CompanySection from "@/components/CompanySection";
import Mission from "@/components/Mission";
import ProductShowcase from "@/components/ProductShowcase";
import Footer from "@/components/Footer";
import Vision from "@/components/Vision";
import TechnologyStack from "../components/TechnologyStack";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617]">
      <Navbar />
      <Hero />
      <CompanySection/>
      <Mission/>
    <ProductShowcase/>
    < Vision/>
    <TechnologyStack/>
    <Footer/>
    </main>
  );
}