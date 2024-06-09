import AboutSection from './components/AboutSection';
import Achievement from './components/Achievement';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212] container mx-auto px-12 py-4'>
      <Navbar />
      <div className='container mx-auto px-12 mt-24 py-4'>
        <HeroSection />
        <Achievement />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
