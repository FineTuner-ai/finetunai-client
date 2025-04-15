
import HeroSection from "./components/HeroSection";
import WhishList from "./components/WhishList";
import Features from "./components/Features";
import Partners from "./components/Partners";
import Finetune from "./components/Fineturne";
export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <HeroSection />
      <Partners />
      <Finetune />
      <WhishList />
      <Features />
    </main>
  );
}