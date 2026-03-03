import { OUTREACH_PROGRAMS } from '../../data/portfolio';
import { Users, Lightbulb, Mic, ShieldCheck, CheckCircle2 } from 'lucide-react';

const iconMap = {
    quiz: Lightbulb,
    workshop: Users,
    lecture: Mic,
    policy: ShieldCheck,
};

export default function OutreachSection() {
    return (
        <section id="outreach" className="section" style={{ background: 'var(--color-bg-secondary)' }}>
            <div className="container">
                {/* Header */}
                <div style={{ marginBottom: '3.5rem' }}>
                    <p className="section-eyebrow">Public Impact</p>
                    <h2 className="section-title">
                        Outreach & <span className="gradient-text">Social Engagement</span>
                    </h2>
                    <p className="section-subtitle">
                        Translating academic research into actionable awareness and policy advocacy.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {OUTREACH_PROGRAMS.map((prog, idx) => {
                        const Icon = iconMap[prog.icon] || Users;
                        return (
                            <div
                                key={prog.id}
                                className="glass-card"
                                style={{
                                    padding: '2.5rem',
                                    display: 'grid',
                                    gridTemplateColumns: 'auto 1fr',
                                    gap: '2.5rem',
                                    alignItems: 'start',
                                    background: idx % 2 === 0 ? 'rgba(99,120,255,0.03)' : 'rgba(34,211,238,0.03)',
                                    animation: 'fadeInLeft 0.7s ease backwards',
                                    animationDelay: `${idx * 0.15}s`
                                }}
                            >
                                {/* Left side: Icon & Meta */}
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', minWidth: '120px' }}>
                                    <div style={{
                                        width: 64, height: 64,
                                        borderRadius: 16,
                                        background: 'var(--color-bg)',
                                        border: '1px solid var(--color-border)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'var(--color-primary-light)',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                                    }}>
                                        <Icon size={32} />
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                            {prog.period}
                                        </div>
                                        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary-light)' }}>
                                            {prog.category}
                                        </div>
                                    </div>
                                </div>

                                {/* Right side: Details */}
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--color-text-primary)' }}>
                                        {prog.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '0.95rem',
                                        color: 'var(--color-text-secondary)',
                                        lineHeight: 1.7,
                                        marginBottom: '1.5rem',
                                        maxWidth: '700px'
                                    }}>
                                        {prog.description}
                                    </p>

                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                        gap: '1.5rem',
                                        padding: '1.5rem',
                                        background: 'rgba(0,0,0,0.2)',
                                        borderRadius: 'var(--radius-lg)',
                                        border: '1px solid var(--color-border)'
                                    }}>
                                        <div>
                                            <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 600 }}>
                                                Key Highlights
                                            </div>
                                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                                {prog.highlights.map((highlight, i) => (
                                                    <li key={i} style={{ display: 'flex', alignItems: 'start', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
                                                        <CheckCircle2 size={14} style={{ color: 'var(--color-emerald)', marginTop: '3px', flexShrink: 0 }} />
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div style={{ borderLeft: '1px solid var(--color-border)', paddingLeft: '1.5rem' }}>
                                            <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>
                                                Impact
                                            </div>
                                            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                                                {prog.participants}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
