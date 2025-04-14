
import HeroSection from "./components/HeroSection";
// import DemoVideo from "./components/DemoVideo";
import WhishList from "./components/WhishList";
import Features from "./components/Features";
import Partners from "./components/Partners";
import FAQSection from "./components/FAQSection";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/Contact"
import Finetune from "./components/Fineturne";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <HeroSection />
      {/* <DemoVideo /> */}
      <Partners />
      <Finetune />
      <WhishList />
      <Features />
      
      <ContactForm />
      <Testimonials />
      <FAQSection />
      
       
    </main>
  );
}