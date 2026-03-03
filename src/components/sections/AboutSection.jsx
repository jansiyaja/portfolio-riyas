import { PROFILE, EDUCATION } from '../../data/portfolio';
import { GraduationCap, MapPin, Mail, Globe } from 'lucide-react';

export default function AboutSection() {
    return (
        <section id="about" className="section" style={{ position: 'relative', overflow: 'hidden', background: 'var(--color-bg-secondary)' }}>
            <div className="glow-orb" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)', top: '10%', right: '-10%' }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                {/* Header */}
                <div style={{ marginBottom: '3.5rem' }}>
                    <p className="section-eyebrow">About</p>
                    <h2 className="section-title">
                        The Researcher <span className="gradient-text">Behind the Work</span>
                    </h2>
                </div>

                {/* Two-column layout */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>

                    {/* Bio */}
                    <div className="glass-card" style={{ padding: '2rem' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--color-text-primary)' }}>Biography</h3>
                        {PROFILE.bio.split('\n\n').map((para, i) => (
                            <p key={i} style={{
                                fontSize: '0.9rem',
                                color: 'var(--color-text-secondary)',
                                lineHeight: 1.85,
                                marginBottom: i < PROFILE.bio.split('\n\n').length - 1 ? '1rem' : 0,
                            }}>
                                {para.trim()}
                            </p>
                        ))}

                        {/* Contact info */}
                        <div style={{ marginTop: '1.75rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                                <Mail size={14} style={{ color: 'var(--color-primary-light)', flexShrink: 0, marginTop: 2 }} />
                                <a href={`mailto:${PROFILE.email}`} style={{ fontSize: '0.85rem', color: 'var(--color-primary-light)' }}>{PROFILE.email}</a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                                <MapPin size={14} style={{ color: 'var(--color-text-muted)', flexShrink: 0, marginTop: 2 }} />
                                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{PROFILE.office}</span>
                            </div>
                            {PROFILE.socials.scholar && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                    <Globe size={14} style={{ color: 'var(--color-text-muted)', flexShrink: 0 }} />
                                    <a href={PROFILE.socials.scholar} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', color: 'var(--color-primary-light)' }}>
                                        Google Scholar Profile
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Education */}
                    <div className="glass-card" style={{ padding: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
                            <span style={{
                                width: 38, height: 38, borderRadius: 10,
                                background: 'linear-gradient(135deg, rgba(99,120,255,0.2), rgba(139,92,246,0.15))',
                                border: '1px solid rgba(99,120,255,0.25)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'var(--color-primary-light)',
                            }}>
                                <GraduationCap size={18} />
                            </span>
                            <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>Education</h3>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                            {EDUCATION.map((edu, i) => (
                                <div key={i} style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                                    {i < EDUCATION.length - 1 && (
                                        <div style={{
                                            position: 'absolute',
                                            left: '0.35rem', top: '1.5rem', bottom: '-1.75rem',
                                            width: 1,
                                            background: 'linear-gradient(to bottom, rgba(99,120,255,0.4), rgba(99,120,255,0.05))',
                                        }} />
                                    )}
                                    <div style={{
                                        position: 'absolute', left: 0, top: '0.35rem',
                                        width: 10, height: 10, borderRadius: '50%',
                                        background: i === 0 ? 'var(--color-emerald)' : 'var(--color-primary)',
                                        boxShadow: i === 0 ? '0 0 8px var(--color-emerald)' : 'none',
                                    }} />
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                                        <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.35 }}>
                                            {edu.degree}
                                        </h4>
                                        {i === 0 && (
                                            <span style={{
                                                fontSize: '0.62rem', fontWeight: 600, padding: '0.15rem 0.5rem',
                                                borderRadius: '9999px',
                                                background: 'rgba(52,211,153,0.12)',
                                                color: 'var(--color-emerald)',
                                                border: '1px solid rgba(52,211,153,0.3)',
                                                flexShrink: 0,
                                            }}>Ongoing</span>
                                        )}
                                    </div>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--color-primary-light)', fontWeight: 500, marginBottom: '0.2rem' }}>
                                        {edu.institution}
                                    </p>
                                    <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', marginBottom: edu.note ? '0.35rem' : 0 }}>
                                        {edu.year}
                                    </p>
                                    {edu.note && (
                                        <p style={{ fontSize: '0.83rem', color: 'var(--color-text-secondary)' }}>{edu.note}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Research Interests */}
                <div className="glass-card" style={{ padding: '2rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>Research Interests</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                        {PROFILE.interests.map(interest => (
                            <span key={interest} style={{
                                padding: '0.4rem 1rem',
                                borderRadius: '9999px',
                                fontSize: '0.85rem',
                                fontWeight: 500,
                                background: 'rgba(99,120,255,0.1)',
                                border: '1px solid rgba(99,120,255,0.25)',
                                color: 'var(--color-primary-light)',
                                transition: 'all 0.2s ease',
                                cursor: 'default',
                            }}
                                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(99,120,255,0.2)'; e.currentTarget.style.borderColor = 'rgba(99,120,255,0.5)'; }}
                                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(99,120,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(99,120,255,0.25)'; }}
                            >
                                {interest}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
