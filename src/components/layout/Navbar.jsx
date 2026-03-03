import { useState, useEffect } from 'react';
import { PROFILE } from '../../data/portfolio';
import { Menu, X, Linkedin, Mail } from 'lucide-react';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Research', href: '#research' },
    { label: 'Publications', href: '#publications' },
    { label: 'Blog', href: '#blog' },
    { label: 'Outreach', href: '#outreach' },
    { label: 'Media', href: '#media' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: '-40% 0px -55% 0px' }
        );
        document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    const handleNavClick = (href) => {
        setMobileOpen(false);
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <nav
                className={`
                    fixed top-0 left-0 right-0 z-[100] transition-all duration-350
                    ${scrolled
                        ? 'py-3 bg-[#070B14]/92 backdrop-blur-xl border-b border-primary/12'
                        : 'py-5 bg-transparent border-none'}
                `}
            >
                <div className="container-custom flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#hero"
                        onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
                        className="flex items-center gap-2.5 group"
                    >
                        <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-display font-black text-lg text-white shadow-lg transition-transform group-hover:scale-110">
                            {PROFILE.name[0]}
                        </span>
                        <span className="font-display font-bold text-[1.05rem] text-text-primary">
                            {PROFILE.name.split(' ')[0]}<span className="gradient-text"> {PROFILE.name.split(' ').slice(1).join(' ')}</span>
                        </span>
                    </a>

                    {/* Desktop nav */}
                    <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
                        {navLinks.map((link) => {
                            const sectionId = link.href.replace('#', '');
                            const isActive = activeSection === sectionId;
                            return (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                        className={`
                                            inline-flex items-center px-4 py-2 rounded-full text-[0.88rem] font-semibold transition-all duration-200
                                            ${isActive
                                                ? 'text-primary-light bg-primary/12 shadow-[0_4px_12px_rgba(99,120,255,0.1)]'
                                                : 'text-text-secondary hover:text-text-primary hover:bg-white/5'}
                                        `}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Social icons + CTA */}
                    <div className="hidden lg:flex items-center gap-4">
                        {PROFILE.socials.linkedin && (
                            <a
                                href={PROFILE.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-10 h-10 flex items-center justify-center rounded-xl text-text-muted hover:text-primary-light hover:bg-primary/10 transition-all"
                            >
                                <Linkedin size={18} />
                            </a>
                        )}
                        <a
                            href={`mailto:${PROFILE.email}`}
                            className="btn btn-primary !px-5 !py-2.5 !text-[0.85rem] font-bold"
                        >
                            <Mail size={14} className="mr-1.5" /> Contact
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="lg:hidden p-2 rounded-xl bg-primary/10 border border-primary/20 text-text-primary cursor-pointer hover:bg-primary/20 transition-all"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile drawer */}
            <div
                className={`
                    fixed inset-0 z-[99] bg-[#070B14]/97 backdrop-blur-2xl transition-all duration-300 flex flex-col items-center justify-center gap-2
                    ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                `}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                        className="text-2xl font-display font-black text-text-secondary px-8 py-3 hover:text-primary-light transition-colors tracking-tight"
                    >
                        {link.label}
                    </a>
                ))}
                <a
                    href={`mailto:${PROFILE.email}`}
                    className="btn btn-primary mt-6 text-lg px-10 py-4 font-black"
                    onClick={() => setMobileOpen(false)}
                >
                    Contact Me
                </a>
            </div>
        </>
    );
}
