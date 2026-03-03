import { useState } from 'react';
import { BLOG_POSTS } from '../../data/portfolio';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const tagColors = {
    'Policy': { bg: 'rgba(99,120,255,0.1)', border: 'rgba(99,120,255,0.25)', color: 'var(--color-primary-light)' },
    'Research': { bg: 'rgba(34,211,238,0.08)', border: 'rgba(34,211,238,0.2)', color: 'var(--color-secondary)' },
    'Reflection': { bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.2)', color: 'var(--color-emerald)' },
    'Opinion': { bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.25)', color: 'var(--color-accent)' },
    'Outreach': { bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.2)', color: 'var(--color-amber)' },
};

function getTagStyle(tag) {
    return tagColors[tag] || { bg: 'rgba(99,120,255,0.07)', border: 'rgba(99,120,255,0.15)', color: 'var(--color-text-muted)' };
}

function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

// Gradient initials card placeholder
function BlogCardImage({ post, size = 'large' }) {
    const colors = [
        ['#6378FF', '#8B5CF6'],
        ['#22D3EE', '#6378FF'],
        ['#34D399', '#22D3EE'],
        ['#FBBF24', '#F87171'],
        ['#A78BFA', '#6378FF'],
        ['#F87171', '#FBBF24'],
    ];
    // Map post ID or index to colors
    const idIdx = typeof post.id === 'string' ? post.id.charCodeAt(post.id.length - 1) : post.id;
    const [c1, c2] = colors[idIdx % colors.length];
    const initials = post.title.split(' ').slice(0, 2).map(w => w[0]).join('');
    const h = size === 'large' ? 240 : 160;
    return (
        <div style={{
            height: h,
            borderRadius: 'var(--radius-md) var(--radius-md) 0 0',
            background: `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative', overflow: 'hidden',
        }}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(2px)' }} />
            <span style={{
                fontFamily: 'var(--font-display)', fontSize: size === 'large' ? '4rem' : '2.5rem',
                fontWeight: 900, color: 'rgba(255,255,255,0.95)',
                position: 'relative', zIndex: 1, letterSpacing: '0.05em',
                textShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}>{initials}</span>
        </div>
    );
}

export default function BlogSection() {
    const [filter, setFilter] = useState('All');
    const allTags = ['All', ...new Set(BLOG_POSTS.flatMap((p) => p.tags))];
    const featured = BLOG_POSTS.filter((p) => p.featured);
    const filtered = filter === 'All' ? BLOG_POSTS.filter((p) => !p.featured) : BLOG_POSTS.filter((p) => p.tags.includes(filter) && !p.featured);

    return (
        <section id="blog" className="section" style={{ background: 'var(--color-bg)', position: 'relative', overflow: 'hidden' }}>
            <div className="grid-bg" />
            <div className="glow-orb" style={{ width: 450, height: 450, background: 'radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)', top: '10%', right: '-5%' }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ marginBottom: '3rem' }}>
                    <p className="section-eyebrow">Writing</p>
                    <h2 className="section-title">From the <span className="gradient-text">Blog</span></h2>
                    <p className="section-subtitle">Reflections on Science & Technology Studies, disability policy, and public engagement.</p>
                </div>

                {/* Featured posts */}
                {featured.length > 0 && (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '1.25rem',
                        marginBottom: '2.5rem',
                    }}>
                        {featured.map((post) => (
                            <div key={post.id} className="glass-card" style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}>
                                <BlogCardImage post={post} size="large" />
                                <div style={{ padding: '1.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                                        <span style={{
                                            padding: '0.2rem 0.65rem', borderRadius: '9999px',
                                            fontSize: '0.68rem', fontWeight: 700,
                                            background: 'linear-gradient(135deg, rgba(99,120,255,0.2), rgba(139,92,246,0.15))',
                                            border: '1px solid rgba(99,120,255,0.3)',
                                            color: 'var(--color-primary-light)',
                                            fontFamily: 'var(--font-mono)',
                                        }}>⭐ Featured</span>
                                        {post.tags.slice(0, 2).map((t) => {
                                            const s = getTagStyle(t);
                                            return (
                                                <span key={t} style={{ padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.68rem', fontWeight: 600, background: s.bg, border: `1px solid ${s.border}`, color: s.color }}>
                                                    {t}
                                                </span>
                                            );
                                        })}
                                    </div>
                                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.6rem', lineHeight: 1.4 }}>
                                        {post.title}
                                    </h3>
                                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                                        {post.content}
                                    </p>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Calendar size={12} /> {formatDate(post.date)}</span>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={12} /> {post.readTime}</span>
                                        </div>
                                        <a href={`#blog-${post.slug}`} style={{
                                            display: 'flex', alignItems: 'center', gap: '0.3rem',
                                            fontSize: '0.82rem', fontWeight: 600,
                                            color: 'var(--color-primary-light)',
                                            transition: 'gap 0.2s ease',
                                        }}>
                                            Read <ArrowRight size={14} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Filter tabs */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setFilter(tag)}
                            style={{
                                padding: '0.4rem 1rem',
                                borderRadius: '9999px',
                                fontSize: '0.82rem', fontWeight: 500,
                                border: '1px solid',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                background: filter === tag ? 'linear-gradient(135deg, #6378FF, #8B5CF6)' : 'transparent',
                                borderColor: filter === tag ? 'transparent' : 'var(--color-border)',
                                color: filter === tag ? 'white' : 'var(--color-text-secondary)',
                                boxShadow: filter === tag ? '0 4px 12px rgba(99,120,255,0.3)' : 'none',
                            }}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Other posts grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '1rem',
                }}>
                    {filtered.map((post) => (
                        <div key={post.id} className="glass-card" style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}>
                            <BlogCardImage post={post} size="small" />
                            <div style={{ padding: '1.25rem' }}>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.75rem' }}>
                                    {post.tags.slice(0, 2).map((t) => {
                                        const s = getTagStyle(t);
                                        return (
                                            <span key={t} style={{ padding: '0.15rem 0.55rem', borderRadius: '9999px', fontSize: '0.68rem', fontWeight: 600, background: s.bg, border: `1px solid ${s.border}`, color: s.color }}>
                                                {t}
                                            </span>
                                        );
                                    })}
                                </div>
                                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '0.5rem' }}>
                                    {post.title}
                                </h4>
                                <p style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '1rem' }}>
                                    {post.content.slice(0, 100)}…
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={11} /> {post.readTime}</span>
                                    </div>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{formatDate(post.date)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
