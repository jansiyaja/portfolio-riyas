import { PROFILE } from '../../data/portfolio';
import { ArrowDown, Linkedin, Mail, ExternalLink, BookOpen } from 'lucide-react';

export default function HeroSection() {
    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: 'var(--gradient-hero)',
                paddingTop: '5rem',
            }}
        >
            {/* Grid bg */}
            <div className="grid-bg" />

            {/* Glow blobs */}
            <div className="glow-orb animate-pulse-glow" style={{
                width: 500, height: 500,
                background: 'radial-gradient(circle, rgba(99,120,255,0.15) 0%, transparent 70%)',
                top: '-10%', left: '-15%',
            }} />
            <div className="glow-orb" style={{
                width: 350, height: 350,
                background: 'radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)',
                bottom: '5%', right: '5%',
                animation: 'pulse-glow 4s ease-in-out infinite 1.5s',
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1, padding: '4rem 1.5rem 5rem' }}>

                {/* Institute badge */}
                <div style={{ marginBottom: '2rem', animation: 'fadeInUp 0.5s ease forwards' }}>
                    <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.4rem 1.1rem',
                        borderRadius: '9999px',
                        border: '1px solid rgba(99,120,255,0.3)',
                        background: 'rgba(99,120,255,0.08)',
                        fontSize: '0.8rem', fontWeight: 500,
                        color: 'var(--color-primary-light)',
                        fontFamily: 'var(--font-mono)',
                    }}>
                        <span style={{
                            width: 7, height: 7, borderRadius: '50%',
                            background: 'var(--color-emerald)',
                            boxShadow: '0 0 8px var(--color-emerald)',
                            animation: 'pulse-glow 2s infinite',
                            display: 'inline-block',
                        }} />
                        {PROFILE.institutionShort} — {PROFILE.department}
                    </span>
                </div>

                {/* Name */}
                <h1 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
                    fontWeight: 900,
                    lineHeight: 1.05,
                    marginBottom: '1rem',
                    animation: 'fadeInUp 0.6s ease 0.1s both',
                    color: 'var(--color-text-primary)',
                }}>
                    {PROFILE.name.split(' ')[0]}{' '}
                    <span className="gradient-text">{PROFILE.name.split(' ').slice(1).join(' ')}</span>
                </h1>

                {/* Title */}
                <p style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
                    color: 'var(--color-text-secondary)',
                    marginBottom: '0.5rem',
                    fontWeight: 400,
                    animation: 'fadeInUp 0.6s ease 0.2s both',
                }}>
                    {PROFILE.title} · {PROFILE.institution}
                </p>

                {/* Short bio — first sentence */}
                <p style={{
                    fontSize: '1rem',
                    color: 'var(--color-text-secondary)',
                    maxWidth: 620,
                    lineHeight: 1.8,
                    marginBottom: '2rem',
                    animation: 'fadeInUp 0.6s ease 0.3s both',
                }}>
                    {PROFILE.bio.split('\n')[0].trim()}
                </p>

                {/* Research interests pills */}
                <div style={{
                    display: 'flex', flexWrap: 'wrap', gap: '0.5rem',
                    marginBottom: '2.5rem',
                    animation: 'fadeInUp 0.6s ease 0.35s both',
                }}>
                    {PROFILE.interests.map(interest => (
                        <span key={interest} style={{
                            padding: '0.25rem 0.85rem',
                            borderRadius: '9999px',
                            fontSize: '0.78rem',
                            fontWeight: 500,
                            background: 'rgba(99,120,255,0.1)',
                            border: '1px solid rgba(99,120,255,0.25)',
                            color: 'var(--color-primary-light)',
                        }}>
                            {interest}
                        </span>
                    ))}
                </div>

                {/* CTAs */}
                <div style={{
                    display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap',
                    marginBottom: '3rem',
                    animation: 'fadeInUp 0.6s ease 0.4s both',
                }}>
                    <a
                        href={`mailto:${PROFILE.email}`}
                        className="btn btn-primary"
                    >
                        <Mail size={16} /> Get in Touch
                    </a>
                    <a
                        href={PROFILE.socials.scholar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                    >
                        <BookOpen size={16} /> Google Scholar
                    </a>
                    {PROFILE.socials.linkedin && (
                        <a
                            href={PROFILE.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost"
                        >
                            <Linkedin size={16} />
                        </a>
                    )}
                </div>

                {/* Divider info row */}
                <div style={{
                    display: 'flex', flexWrap: 'wrap', gap: '2rem',
                    animation: 'fadeInUp 0.6s ease 0.5s both',
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(99,120,255,0.12)',
                }}>
                    {[
                        { label: 'Publications', val: PROFILE.publications || String(PROFILE.stats?.length || '4') },
                        { label: 'Institution', val: PROFILE.institutionShort },
                        { label: 'Location', val: PROFILE.office.split(',').slice(-2).join(',').trim() },
                    ].map(({ label, val }) => (
                        <div key={label}>
                            <p style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>
                                {label}
                            </p>
                            <p style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                                {val}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll cue */}
            <button
                onClick={scrollToAbout}
                style={{
                    position: 'absolute', bottom: '2.5rem', left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: 'var(--color-text-muted)',
                    animation: 'float 3s ease-in-out infinite',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem',
                }}
            >
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>SCROLL</span>
                <ArrowDown size={16} />
            </button>

        </section>
    );
}
