import './App.css'

function HeroSection() {
  return (
    <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8">
      <div className="order-2 text-left md:order-1">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">Frontend Developer</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Designing thoughtful digital experiences.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
          I build clean, accessible, and high-performing interfaces with React and Tailwind. My focus is crafting
          practical products that look refined across every screen size.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-slate-700"
          >
            About Me
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-100"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="order-1 md:order-2">
        <img
          src="/hero-photo.svg"
          srcSet="/hero-photo.svg 1x"
          sizes="(min-width: 768px) 40vw, 100vw"
          alt="Portrait illustration"
          loading="eager"
          decoding="async"
          className="image-fade-in h-auto w-full rounded-lg border border-slate-200 object-cover transition-transform duration-300 hover:scale-[1.02]"
        />
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">About</h2>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            I am a React developer who enjoys simplifying complexity. I care about semantic markup, consistent design
            systems, and robust responsive behavior from small mobile screens to wide desktop layouts.
          </p>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            My process combines clear structure, reusable components, and performance-minded front-end decisions to
            deliver polished and dependable products.
          </p>
        </div>

        <div>
          <img
            src="/about-photo.svg"
            srcSet="/about-photo.svg 1x"
            sizes="(min-width: 768px) 40vw, 100vw"
            alt="Workspace illustration"
            loading="lazy"
            decoding="async"
            className="image-fade-in h-auto w-full rounded-lg border border-slate-200 object-cover transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <HeroSection />
      <AboutSection />
    </div>
  )
}

export default App
