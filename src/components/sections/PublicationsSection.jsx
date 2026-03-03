import { useState } from 'react';
import { PUBLICATIONS } from '../../data/portfolio';
import { ExternalLink, FileText, Quote, BookOpen, BookMarked } from 'lucide-react';

const typeConfig = {
    'Working Paper': { icon: FileText, color: 'var(--color-primary-light)', bg: 'rgba(99,120,255,0.1)', border: 'rgba(99,120,255,0.25)' },
    'Conference Paper': { icon: BookOpen, color: 'var(--color-secondary)', bg: 'rgba(34,211,238,0.08)', border: 'rgba(34,211,238,0.2)' },
    'Manuscript': { icon: BookMarked, color: 'var(--color-emerald)', bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.2)' },
};

export default function PublicationsSection() {
    const [expanded, setExpanded] = useState(null);
    const years = [...new Set(PUBLICATIONS.map((p) => p.year))].sort((a, b) => b - a);

    return (
        <section id="publications" className="section" style={{ background: 'var(--color-bg-secondary)', position: 'relative', overflow: 'hidden' }}>
            <div className="glow-orb" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)', bottom: '0%', right: '5%' }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '3.5rem' }}>
                    <div>
                        <p className="section-eyebrow">Academic Output</p>
                        <h2 className="section-title">
                            Selected <span className="gradient-text">Publications</span>
                        </h2>
                        <p className="section-subtitle">Research on patent thickets, STS, and policy interventions for assistive technology access.</p>
                    </div>
                    <a href="https://scholar.google.com/citations?user=lcCrhuwAAAAJ" target="_blank" rel="noopener noreferrer" className="btn btn-outline"
                        style={{ background: 'rgba(255,2255,255,0.05)', borderColor: 'rgba(99,120,255,0.3)' }}>
                        <BookOpen size={16} /> Google Scholar
                    </a>
                </div>

                {/* Publications list grouped by year */}
                {years.map((year) => (
                    <div key={year} style={{ marginBottom: '2.5rem' }}>
                        {/* Year label */}
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: '1rem',
                            marginBottom: '1rem',
                        }}>
                            <span style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.8rem',
                                fontWeight: 700,
                                color: 'var(--color-primary-light)',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '9999px',
                                background: 'rgba(99,120,255,0.1)',
                                border: '1px solid rgba(99,120,255,0.2)',
                            }}>{year}</span>
                            <div style={{ flex: 1, height: 1, background: 'var(--color-border)' }} />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {PUBLICATIONS.filter((p) => p.year === year).map((pub) => {
                                const { icon: TypeIcon, color, bg, border } = typeConfig[pub.type] || typeConfig['Working Paper'];
                                const isExpanded = expanded === pub.id;
                                return (
                                    <div
                                        key={pub.id}
                                        style={{
                                            borderRadius: 'var(--radius-lg)',
                                            border: `1px solid ${isExpanded ? 'rgba(99,120,255,0.35)' : 'var(--color-border)'}`,
                                            background: isExpanded ? 'linear-gradient(135deg, rgba(15,23,48,1) 0%, rgba(20,29,61,0.95) 100%)' : 'rgba(13,20,37,0.8)',
                                            transition: 'all 0.3s ease',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {/* Main row */}
                                        <div
                                            style={{
                                                padding: '1.5rem',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                gap: '1rem',
                                                alignItems: 'flex-start',
                                            }}
                                            onClick={() => setExpanded(isExpanded ? null : pub.id)}
                                        >
                                            {/* Type badge */}
                                            <div style={{ flexShrink: 0, paddingTop: '0.1rem' }}>
                                                <span style={{
                                                    display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                                                    padding: '0.3rem 0.7rem',
                                                    borderRadius: '9999px',
                                                    fontSize: '0.7rem', fontWeight: 700,
                                                    background: bg, border: `1px solid ${border}`, color,
                                                    fontFamily: 'var(--font-mono)',
                                                }}>
                                                    <TypeIcon size={11} /> {pub.type}
                                                </span>
                                            </div>

                                            {/* Content */}
                                            <div style={{ flex: 1, minWidth: 0 }}>
                                                <h4 style={{
                                                    fontSize: '1rem', fontWeight: 700,
                                                    color: 'var(--color-text-primary)',
                                                    lineHeight: 1.4, marginBottom: '0.4rem',
                                                }}>
                                                    {pub.title}
                                                </h4>
                                                <p style={{ fontSize: '0.84rem', color: 'var(--color-text-secondary)', marginBottom: '0.4rem' }}>
                                                    {pub.authors}
                                                </p>
                                                <p style={{ fontSize: '0.82rem', color: 'var(--color-primary-light)', fontWeight: 500 }}>
                                                    {pub.venue}
                                                </p>

                                                {/* Tags */}
                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.75rem' }}>
                                                    {pub.tags.map((t) => (
                                                        <span key={t} style={{
                                                            padding: '0.15rem 0.6rem',
                                                            borderRadius: '9999px',
                                                            fontSize: '0.7rem', fontWeight: 500,
                                                            background: 'rgba(99,120,255,0.07)',
                                                            border: '1px solid rgba(99,120,255,0.15)',
                                                            color: 'var(--color-text-muted)',
                                                        }}>{t}</span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Citations + links */}
                                            <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                                                <div style={{
                                                    display: 'flex', alignItems: 'center', gap: '0.3rem',
                                                    fontSize: '0.8rem', color: 'var(--color-text-muted)',
                                                    fontFamily: 'var(--font-mono)',
                                                }}>
                                                    <Quote size={12} /> {pub.citations}
                                                </div>
                                                <div style={{ display: 'flex', gap: '0.4rem' }}>
                                                    {pub.pdf && (
                                                        <a href={pub.pdf} target="_blank" rel="noopener noreferrer"
                                                            onClick={(e) => e.stopPropagation()}
                                                            style={{
                                                                padding: '0.3rem 0.7rem', borderRadius: '9999px',
                                                                fontSize: '0.75rem', fontWeight: 600,
                                                                background: 'rgba(99,120,255,0.1)',
                                                                border: '1px solid rgba(99,120,255,0.2)',
                                                                color: 'var(--color-primary-light)',
                                                                display: 'flex', alignItems: 'center', gap: '0.3rem',
                                                                transition: 'all 0.2s ease',
                                                            }}>
                                                            <FileText size={11} /> PDF
                                                        </a>
                                                    )}
                                                    {pub.doi && (
                                                        <a href={pub.doi} target="_blank" rel="noopener noreferrer"
                                                            onClick={(e) => e.stopPropagation()}
                                                            style={{
                                                                padding: '0.3rem 0.7rem', borderRadius: '9999px',
                                                                fontSize: '0.75rem', fontWeight: 600,
                                                                background: 'rgba(34,211,238,0.08)',
                                                                border: '1px solid rgba(34,211,238,0.2)',
                                                                color: 'var(--color-secondary)',
                                                                display: 'flex', alignItems: 'center', gap: '0.3rem',
                                                                transition: 'all 0.2s ease',
                                                            }}>
                                                            <ExternalLink size={11} /> DOI
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Expanded abstract */}
                                        {isExpanded && (
                                            <div style={{
                                                padding: '0 1.5rem 1.5rem 1.5rem',
                                                borderTop: '1px solid rgba(99,120,255,0.1)',
                                                paddingTop: '1.25rem',
                                                animation: 'fadeIn 0.2s ease',
                                            }}>
                                                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.75, fontStyle: 'italic' }}>
                                                    <span style={{ color: 'var(--color-text-muted)', fontStyle: 'normal', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>Abstract — </span>
                                                    {pub.abstract}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
