import { useState } from 'react';
import { PROFILE } from '../../data/portfolio';
import { Mail, MapPin, Send, Linkedin, BookOpen, CheckCircle } from 'lucide-react';

export default function ContactSection() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);
    const [focused, setFocused] = useState(null);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate send
        setTimeout(() => setSent(true), 300);
    };

    const inputStyle = (field) => ({
        width: '100%',
        padding: '0.85rem 1rem',
        borderRadius: 'var(--radius-md)',
        background: focused === field ? 'rgba(99,120,255,0.08)' : 'rgba(13,20,37,0.8)',
        border: `1px solid ${focused === field ? 'rgba(99,120,255,0.5)' : 'var(--color-border)'}`,
        color: 'var(--color-text-primary)',
        fontFamily: 'var(--font-body)',
        fontSize: '0.9rem',
        outline: 'none',
        transition: 'all 0.2s ease',
        boxSizing: 'border-box',
    });

    const socials = [
        ...(PROFILE.socials.scholar ? [{ icon: BookOpen, href: PROFILE.socials.scholar, label: 'Scholar', color: 'var(--color-primary-light)' }] : []),
        ...(PROFILE.socials.linkedin ? [{ icon: Linkedin, href: PROFILE.socials.linkedin, label: 'LinkedIn', color: '#0A66C2' }] : []),
    ];

    return (
        <section id="contact" className="section" style={{ background: 'var(--color-bg)', position: 'relative', overflow: 'hidden' }}>
            <div className="grid-bg" />
            <div className="glow-orb" style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(99,120,255,0.1) 0%, transparent 70%)', top: '20%', left: '50%', transform: 'translateX(-50%)' }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <p className="section-eyebrow" style={{ justifyContent: 'center' }}>Contact</p>
                    <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        I'm always open to discussing research ideas, collaborations, or public policy engagements.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    maxWidth: 900,
                    margin: '0 auto',
                }}>
                    {/* Info panel */}
                    <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                        <div>
                            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                                Get In Touch
                            </h3>
                            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                                Whether you're a fellow researcher, policymaker, or community advocate — feel free to reach out!
                            </p>
                        </div>

                        {[
                            { icon: Mail, label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
                            { icon: MapPin, label: 'Office', value: PROFILE.office, href: null },
                        ].map(({ icon: Icon, label, value, href }) => (
                            <div key={label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <span style={{
                                    width: 42, height: 42, borderRadius: 10, flexShrink: 0,
                                    background: 'rgba(99,120,255,0.1)',
                                    border: '1px solid rgba(99,120,255,0.2)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--color-primary-light)',
                                }}><Icon size={18} /></span>
                                <div style={{ flex: 1 }}>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem', fontFamily: 'var(--font-mono)' }}>{label}</p>
                                    {href ? (
                                        <a href={href} style={{ fontSize: '0.85rem', color: 'var(--color-primary-light)', fontWeight: 500, wordBreak: 'break-all' }}>{value}</a>
                                    ) : (
                                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', fontWeight: 500, lineHeight: 1.4 }}>{value}</p>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Socials */}
                        <div>
                            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)', marginBottom: '0.75rem' }}>Find me on</p>
                            <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                                {socials.map(({ icon: Icon, href, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        style={{
                                            width: 40, height: 40, borderRadius: 10,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            border: '1px solid var(--color-border)',
                                            color: 'var(--color-text-secondary)',
                                            transition: 'all 0.2s ease',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = 'rgba(99,120,255,0.4)';
                                            e.currentTarget.style.background = 'rgba(99,120,255,0.1)';
                                            e.currentTarget.style.color = 'var(--color-primary-light)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = 'var(--color-border)';
                                            e.currentTarget.style.background = 'transparent';
                                            e.currentTarget.style.color = 'var(--color-text-secondary)';
                                        }}
                                    >
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
                            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                                Currently based at {PROFILE.institutionShort}, {PROFILE.department}.
                            </p>
                        </div>
                    </div>

                    {/* Contact form */}
                    <div className="glass-card" style={{ padding: '2rem' }}>
                        {sent ? (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '1rem', textAlign: 'center', padding: '2rem 0' }}>
                                <div style={{
                                    width: 64, height: 64, borderRadius: '50%',
                                    background: 'rgba(52,211,153,0.12)',
                                    border: '1px solid rgba(52,211,153,0.3)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--color-emerald)',
                                    animation: 'pulse-glow 2s ease-in-out infinite',
                                }}>
                                    <CheckCircle size={28} />
                                </div>
                                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700 }}>Message Sent!</h3>
                                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                                    Thanks for reaching out, {form.name}! I'll get back to you within 2–3 business days.
                                </p>
                                <button className="btn btn-outline" onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}>
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                                    Send a Message
                                </h3>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    {['name', 'email'].map((field) => (
                                        <div key={field}>
                                            <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--color-text-muted)', marginBottom: '0.4rem', textTransform: 'capitalize', fontWeight: 600 }}>
                                                {field === 'email' ? 'Email *' : 'Name *'}
                                            </label>
                                            <input
                                                type={field === 'email' ? 'email' : 'text'}
                                                name={field}
                                                value={form[field]}
                                                onChange={handleChange}
                                                required
                                                placeholder={field === 'email' ? 'your@email.com' : 'John Doe'}
                                                style={inputStyle(field)}
                                                onFocus={() => setFocused(field)}
                                                onBlur={() => setFocused(null)}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--color-text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>Subject *</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="Research collaboration inquiry..."
                                        style={inputStyle('subject')}
                                        onFocus={() => setFocused('subject')}
                                        onBlur={() => setFocused(null)}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--color-text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>Message *</label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Tell me about your project or idea..."
                                        style={{ ...inputStyle('message'), resize: 'vertical', minHeight: 120 }}
                                        onFocus={() => setFocused('message')}
                                        onBlur={() => setFocused(null)}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.25rem' }}>
                                    <Send size={16} /> Send Message
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
