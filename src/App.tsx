import CarouselSection from "./components/CarouselSection";
import ExperienceSection from "./components/ExperienceSection";
import FooterSection from "./components/Footersection";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";

export default function App() {
  return (
    <main className="bg-black min-h-screen text-white select-none px-[10%] lg:px-c-50 font-nunito overflow-hidden">
      <div className="max-w-[1920px] mx-auto relative">
        <header className="hidden md:grid place-items-center pt-c-10">
          <Navbar />
        </header>
        <MainSection />
        <ExperienceSection />
        <ProjectSection />
        <CarouselSection />
        <FooterSection />

        <footer className="fixed bottom-[5%] left-1/2 -translate-x-1/2 md:hidden">
          <Navbar />
        </footer>
      </div>
    </main>
  );
}
