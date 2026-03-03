import { MEDIA_COVERAGE } from '../../data/portfolio';
import { Mic, Headphones, Newspaper, BookOpen, Award, Globe, ExternalLink, User } from 'lucide-react';

const iconMap = { Mic, Headphones, Newspaper, BookOpen, Award, Globe, Profile: User };

const typeStyles = {
    'Article': { color: 'var(--color-primary-light)', bg: 'rgba(99,120,255,0.12)', border: 'rgba(99,120,255,0.25)', icon: Newspaper },
    'Interview': { color: 'var(--color-secondary)', bg: 'rgba(34,211,238,0.08)', border: 'rgba(34,211,238,0.2)', icon: Mic },
    'Op-Ed': { color: 'var(--color-accent)', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.25)', icon: BookOpen },
    'Feature': { color: 'var(--color-emerald)', bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.2)', icon: Award },
    'Profile': { color: 'var(--color-amber)', bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.2)', icon: User },
};

export default function MediaSection() {
    return (
        <section id="media" className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative', overflow: 'hidden' }}>
            <div className="glow-orb" style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(99,120,255,0.06) 0%, transparent 70%)', bottom: '-10%', left: '-10%' }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ marginBottom: '3.5rem' }}>
                    <p className="section-eyebrow">Public Presence</p>
                    <h2 className="section-title">
                        Press <span className="gradient-text-secondary">& Media Coverage</span>
                    </h2>
                    <p className="section-subtitle">
                        Selected media highlights, interviews, and features covering my research on disability and technology policy.
                    </p>
                </div>

                {/* Bento grid layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '1.25rem',
                }}>
                    {MEDIA_COVERAGE.map((item, i) => {
                        const style = typeStyles[item.type] || typeStyles.Article;
                        const Icon = style.icon;
                        const isBig = i === 0 || i === 3;
                        return (
                            <div
                                key={item.id}
                                className="glass-card"
                                style={{
                                    padding: '1.75rem',
                                    gridColumn: isBig ? 'span 1' : undefined,
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                {/* Top shine line */}
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, right: 0,
                                    height: '2px',
                                    background: `linear-gradient(90deg, transparent, ${style.color}, transparent)`,
                                    opacity: 0.5,
                                }} />

                                {/* Header */}
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
                                    <div style={{
                                        width: 46, height: 46, borderRadius: 12, flexShrink: 0,
                                        background: style.bg, border: `1px solid ${style.border}`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: style.color,
                                    }}>
                                        <Icon size={20} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                                            <span style={{
                                                padding: '0.15rem 0.6rem', borderRadius: '9999px',
                                                fontSize: '0.68rem', fontWeight: 700, fontFamily: 'var(--font-mono)',
                                                background: style.bg, border: `1px solid ${style.border}`, color: style.color,
                                            }}>{item.type}</span>
                                            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
                                                {item.date}
                                            </span>
                                        </div>
                                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, lineHeight: 1.35 }}>
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Publication */}
                                <p style={{ fontSize: '0.85rem', color: style.color, fontWeight: 700, marginBottom: '0.75rem', opacity: 0.9 }}>
                                    {item.publication}
                                </p>

                                {/* Description */}
                                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem', flex: 1 }}>
                                    {item.description}
                                </p>

                                {/* Link */}
                                {item.url && (
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                            fontSize: '0.82rem', fontWeight: 700,
                                            color: style.color, opacity: 0.85,
                                            transition: 'opacity 0.2s ease',
                                            textDecoration: 'none',
                                            marginTop: 'auto'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                                        onMouseLeave={(e) => e.currentTarget.style.opacity = '0.85'}
                                    >
                                        Read Full Content <ExternalLink size={13} />
                                    </a>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
