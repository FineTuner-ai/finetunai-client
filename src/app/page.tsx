
import HeroSection from "./components/HeroSection";
import DemoVideo from "./components/DemoVideo";
import NoCodeSection from "./components/NoCodeSection";
import Features from "./components/Features";
import TeamSection from "./components/TeamSection";
import FAQSection from "./components/FAQSection";
import Txt from "./components/Txt";
import ContactForm from "./components/Contact"

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <HeroSection />
      <DemoVideo />
      <NoCodeSection />
      <Features />
      <TeamSection />
      <ContactForm />
      <Txt />
      <FAQSection />
      
       
    </main>
  );
}