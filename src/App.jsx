import './index.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ResearchSection from './components/sections/ResearchSection'
import PublicationsSection from './components/sections/PublicationsSection'
import BlogSection from './components/sections/BlogSection'
import MediaSection from './components/sections/MediaSection'
import ContactSection from './components/sections/ContactSection'
import ConferencesSection from './components/sections/ConferencesSection'
import OutreachSection from './components/sections/OutreachSection'
import GallerySection from './components/sections/GallerySection'

function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      {/* Noise texture overlay for premium feel */}
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ResearchSection />
        <PublicationsSection />
        <BlogSection />
        <ConferencesSection />
        <OutreachSection />
        <GallerySection />
        <MediaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
