import { CONFERENCES } from '../../data/portfolio';
import { Presentation, Quote, MapPin, Calendar, Award } from 'lucide-react';

export default function ConferencesSection() {
    return (
        <section id="conferences" className="section" style={{ background: 'var(--color-bg)' }}>
            <div className="container">
                {/* Header */}
                <div style={{ marginBottom: '3.5rem' }}>
                    <p className="section-eyebrow">Academic Engagement</p>
                    <h2 className="section-title">
                        Conferences & <span className="gradient-text-secondary">Presentations</span>
                    </h2>
                    <p className="section-subtitle">
                        Disseminating research findings at national and international forums.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '1.5rem',
                }}>
                    {CONFERENCES.map((conf, idx) => (
                        <div
                            key={conf.id}
                            className="glass-card"
                            style={{
                                padding: '2rem',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                borderLeft: '4px solid var(--color-primary)',
                                animation: 'fadeInUp 0.6s ease backwards',
                                animationDelay: `${idx * 0.1}s`
                            }}
                        >
                            <div style={{
                                width: 40, height: 40,
                                borderRadius: 8,
                                background: 'rgba(99,120,255,0.1)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'var(--color-primary-light)',
                                marginBottom: '1.25rem'
                            }}>
                                {conf.type === 'Invited Talk' ? <Award size={20} /> : <Presentation size={20} />}
                            </div>

                            <div style={{
                                fontSize: '0.7rem',
                                fontFamily: 'var(--font-mono)',
                                color: 'var(--color-primary-light)',
                                marginBottom: '0.5rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em'
                            }}>
                                {conf.type}
                            </div>

                            <h3 style={{
                                fontSize: '1.1rem',
                                fontWeight: 700,
                                marginBottom: '1rem',
                                color: 'var(--color-text-primary)',
                                lineHeight: 1.4
                            }}>
                                "{conf.title}"
                            </h3>

                            <div style={{ marginTop: 'auto' }}>
                                <p style={{
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    color: 'var(--color-text-secondary)',
                                    marginBottom: '0.75rem'
                                }}>
                                    {conf.event}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
                                        <MapPin size={14} />
                                        <span>{conf.location}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
                                        <Calendar size={14} />
                                        <span>{conf.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Perspective Quote */}
                <div style={{
                    marginTop: '4rem',
                    padding: '3rem',
                    borderRadius: 'var(--radius-2xl)',
                    background: 'linear-gradient(135deg, rgba(99,120,255,0.05), rgba(34,211,238,0.05))',
                    border: '1px solid rgba(99,120,255,0.1)',
                    position: 'relative',
                    textAlign: 'center'
                }}>
                    <Quote size={40} style={{ position: 'absolute', top: '2rem', left: '2rem', opacity: 0.1, color: 'var(--color-primary)' }} />
                    <p style={{
                        fontSize: '1.1rem',
                        fontStyle: 'italic',
                        color: 'var(--color-text-secondary)',
                        lineHeight: 1.8,
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}>
                        "The value of academic research is amplified when it engages with broader publics and policymakers. Conferences are not just about presenting data, but about building the networks required for meaningful policy change."
                    </p>
                    <div style={{ marginTop: '1.5rem', fontWeight: 600, color: 'var(--color-primary-light)' }}>
                        — Riyas K K
                    </div>
                </div>
            </div>
        </section>
    );
}
