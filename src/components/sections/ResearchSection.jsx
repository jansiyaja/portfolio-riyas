import { RESEARCH_AREAS, PROFILE } from '../../data/portfolio';
import { MessageSquare, GitBranch, Lightbulb, Brain, ArrowRight } from 'lucide-react';

const iconMap = { MessageSquare, GitBranch, Lightbulb, Brain };

const gradients = [
    'linear-gradient(135deg, rgba(99,120,255,0.25) 0%, rgba(139,92,246,0.15) 100%)',
    'linear-gradient(135deg, rgba(34,211,238,0.2) 0%, rgba(99,120,255,0.15) 100%)',
    'linear-gradient(135deg, rgba(52,211,153,0.2) 0%, rgba(34,211,238,0.12) 100%)',
    'linear-gradient(135deg, rgba(251,146,60,0.2) 0%, rgba(248,113,113,0.12) 100%)',
];
const borderColors = [
    'rgba(99,120,255,0.25)',
    'rgba(34,211,238,0.2)',
    'rgba(52,211,153,0.2)',
    'rgba(251,146,60,0.2)',
];
const iconColors = [
    'var(--color-primary-light)',
    'var(--color-secondary)',
    'var(--color-emerald)',
    'var(--color-amber)',
];
const iconBgs = [
    'rgba(99,120,255,0.15)',
    'rgba(34,211,238,0.12)',
    'rgba(52,211,153,0.12)',
    'rgba(251,191,36,0.12)',
];

export default function ResearchSection() {
    return (
        <section id="research" className="section" style={{ position: 'relative', overflow: 'hidden', background: 'var(--color-bg)' }}>
            <div className="grid-bg" />
            <div className="glow-orb" style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(99,120,255,0.07) 0%, transparent 70%)', top: '50%', left: '-15%', transform: 'translateY(-50%)' }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ marginBottom: '3.5rem', maxWidth: 600 }}>
                    <p className="section-eyebrow">Research Focus</p>
                    <h2 className="section-title">
                        Areas of <span className="gradient-text-secondary">Investigation</span>
                    </h2>
                    <p className="section-subtitle">
                        My research sits at the crossroads of science & technology policy, disability studies, and intellectual property — seeking to make technology more accessible and equitable.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.25rem',
                }}>
                    {RESEARCH_AREAS.map((area, i) => {
                        const Icon = iconMap[area.icon] || Brain;
                        return (
                            <div
                                key={area.id}
                                className="glass-card"
                                style={{
                                    padding: '2rem',
                                    cursor: 'default',
                                    background: gradients[i % gradients.length],
                                    borderColor: borderColors[i % borderColors.length],
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                            >
                                {/* Subtle shine */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0, left: 0, right: 0,
                                    height: '1px',
                                    background: `linear-gradient(90deg, transparent, ${borderColors[i % borderColors.length]}, transparent)`,
                                }} />

                                <div style={{
                                    width: 48, height: 48,
                                    borderRadius: 12,
                                    background: iconBgs[i % iconBgs.length],
                                    border: `1px solid ${borderColors[i % borderColors.length]}`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginBottom: '1.25rem',
                                    color: iconColors[i % iconColors.length],
                                }}>
                                    <Icon size={22} />
                                </div>

                                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--color-text-primary)' }}>
                                    {area.title}
                                </h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                                    {area.description}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                    {area.tags.map((tag) => (
                                        <span key={tag} style={{
                                            padding: '0.2rem 0.65rem',
                                            borderRadius: '9999px',
                                            fontSize: '0.72rem',
                                            fontWeight: 600,
                                            background: 'rgba(0,0,0,0.25)',
                                            border: `1px solid ${borderColors[i % borderColors.length]}`,
                                            color: iconColors[i % iconColors.length],
                                            fontFamily: 'var(--font-mono)',
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Current project callout */}
                <div style={{
                    marginTop: '2.5rem',
                    padding: '2rem 2.5rem',
                    borderRadius: 'var(--radius-xl)',
                    background: 'linear-gradient(135deg, rgba(99,120,255,0.12), rgba(139,92,246,0.08))',
                    border: '1px solid rgba(99,120,255,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
                }}>
                    <div>
                        <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-primary-light)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            🔬 Current Doctoral Research
                        </div>
                        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                            Intellectual Property Rights and the Accessibility of Assistive Technologies
                        </h4>
                        <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
                            PhD Dissertation (2018–Present) · {PROFILE.institution}
                        </p>
                    </div>
                    <a href="#contact" className="btn btn-primary"
                        onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                        Collaborate <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}
