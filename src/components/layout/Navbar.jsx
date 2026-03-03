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
                style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0,
                    zIndex: 100,
                    padding: scrolled ? '0.75rem 0' : '1.25rem 0',
                    background: scrolled
                        ? 'rgba(7, 11, 20, 0.92)'
                        : 'transparent',
                    backdropFilter: scrolled ? 'blur(20px)' : 'none',
                    borderBottom: scrolled ? '1px solid rgba(99,120,255,0.12)' : 'none',
                    transition: 'all 0.35s ease',
                }}
            >
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* Logo */}
                    <a
                        href="#hero"
                        onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none' }}
                    >
                        <span
                            style={{
                                width: 36, height: 36,
                                borderRadius: 10,
                                background: 'linear-gradient(135deg, #6378FF, #8B5CF6)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontFamily: 'var(--font-display)',
                                fontWeight: 800, fontSize: '1.1rem',
                                color: 'white',
                                boxShadow: '0 4px 16px rgba(99,120,255,0.4)',
                            }}
                        >
                            {PROFILE.name[0]}
                        </span>
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--color-text-primary)' }}>
                            {PROFILE.name.split(' ')[0]}<span className="gradient-text"> {PROFILE.name.split(' ').slice(1).join(' ')}</span>
                        </span>
                    </a>

                    {/* Desktop nav */}
                    <ul style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', listStyle: 'none', margin: 0, padding: 0 }}
                        className="desktop-nav">
                        {navLinks.map((link) => {
                            const sectionId = link.href.replace('#', '');
                            const isActive = activeSection === sectionId;
                            return (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                        style={{
                                            display: 'inline-flex', alignItems: 'center',
                                            padding: '0.45rem 0.9rem',
                                            borderRadius: 'var(--radius-full)',
                                            fontSize: '0.88rem',
                                            fontWeight: 500,
                                            color: isActive ? 'var(--color-primary-light)' : 'var(--color-text-secondary)',
                                            background: isActive ? 'rgba(99,120,255,0.12)' : 'transparent',
                                            transition: 'all 0.2s ease',
                                            textDecoration: 'none',
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isActive) {
                                                e.currentTarget.style.color = 'var(--color-text-primary)';
                                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isActive) {
                                                e.currentTarget.style.color = 'var(--color-text-secondary)';
                                                e.currentTarget.style.background = 'transparent';
                                            }
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Social icons + CTA */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="desktop-nav">
                        {PROFILE.socials.linkedin && (
                            <a
                                href={PROFILE.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                style={{
                                    width: 36, height: 36,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    borderRadius: 'var(--radius-sm)',
                                    color: 'var(--color-text-muted)',
                                    transition: 'all 0.2s ease',
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-primary-light)'; e.currentTarget.style.background = 'rgba(99,120,255,0.1)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-muted)'; e.currentTarget.style.background = 'transparent'; }}
                            >
                                <Linkedin size={17} />
                            </a>
                        )}
                        <a href={`mailto:${PROFILE.email}`} className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>
                            <Mail size={14} style={{ marginRight: '0.4rem' }} /> Contact
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                        style={{
                            background: 'rgba(99,120,255,0.1)',
                            border: '1px solid rgba(99,120,255,0.2)',
                            borderRadius: 'var(--radius-sm)',
                            padding: '0.5rem',
                            cursor: 'pointer',
                            color: 'var(--color-text-primary)',
                            display: 'none',
                        }}
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile drawer */}
            <div style={{
                position: 'fixed',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'rgba(7,11,20,0.97)',
                backdropFilter: 'blur(20px)',
                zIndex: 99,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem',
                opacity: mobileOpen ? 1 : 0,
                pointerEvents: mobileOpen ? 'all' : 'none',
                transition: 'opacity 0.3s ease',
            }}>
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                        style={{
                            fontSize: '1.6rem',
                            fontFamily: 'var(--font-display)',
                            fontWeight: 700,
                            color: 'var(--color-text-secondary)',
                            padding: '0.75rem 2rem',
                            transition: 'color 0.2s ease',
                            textDecoration: 'none',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-light)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                    >
                        {link.label}
                    </a>
                ))}
                <a href={`mailto:${PROFILE.email}`} className="btn btn-primary" style={{ marginTop: '1rem' }}>
                    Contact Me
                </a>
            </div>

            <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
        </>
    );
}
