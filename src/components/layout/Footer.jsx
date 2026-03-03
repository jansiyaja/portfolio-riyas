import { PROFILE } from '../../data/portfolio';
import { Linkedin, BookOpen, Mail } from 'lucide-react';

export default function Footer() {
    const year = new Date().getFullYear();

    const socials = [
        ...(PROFILE.socials.scholar ? [{ icon: BookOpen, href: PROFILE.socials.scholar, label: 'Scholar' }] : []),
        ...(PROFILE.socials.linkedin ? [{ icon: Linkedin, href: PROFILE.socials.linkedin, label: 'LinkedIn' }] : []),
        { icon: Mail, href: `mailto:${PROFILE.email}`, label: 'Email' },
    ];

    const nav = [
        { label: 'About', href: '#about' },
        { label: 'Research', href: '#research' },
        { label: 'Publications', href: '#publications' },
        { label: 'Outreach', href: '#outreach' },
        { label: 'Media', href: '#media' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <footer style={{
            background: 'var(--color-bg-secondary)',
            borderTop: '1px solid var(--color-border)',
            padding: '3rem 0 2rem',
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '2.5rem',
                    marginBottom: '2.5rem',
                }}>
                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem' }}>
                            <span style={{
                                width: 36, height: 36, borderRadius: 10,
                                background: 'linear-gradient(135deg, #6378FF, #8B5CF6)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem',
                                color: 'white',
                            }}>{PROFILE.name[0]}</span>
                            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--color-text-primary)' }}>
                                {PROFILE.name.split(' ')[0]}<span className="gradient-text"> {PROFILE.name.split(' ').slice(1).join(' ')}</span>
                            </span>
                        </div>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem', lineHeight: 1.7, maxWidth: 300 }}>
                            {PROFILE.bio.split('.')[0]}. {PROFILE.bio.split('.')[1]}.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '1.25rem', fontFamily: 'var(--font-mono)' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                            {nav.map((l) => (
                                <li key={l.href}>
                                    <a href={l.href}
                                        style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', transition: 'all 0.2s ease', textDecoration: 'none' }}
                                        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-primary-light)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-secondary)'; e.currentTarget.style.transform = 'translateX(0)'; }}
                                    >{l.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '1.25rem', fontFamily: 'var(--font-mono)' }}>Get in Touch</h4>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.75rem', wordBreak: 'break-all' }}>{PROFILE.email}</p>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                            {PROFILE.institutionShort}<br />
                            {PROFILE.office.split(',').slice(0, 2).join(',')}
                        </p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{
                    display: 'flex', flexWrap: 'wrap', gap: '1rem',
                    alignItems: 'center', justifyContent: 'space-between',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid var(--color-border)',
                }}>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem' }}>
                        © {year} {PROFILE.name}. All rights reserved.
                    </p>

                    <div style={{ display: 'flex', gap: '0.65rem' }}>
                        {socials.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                style={{
                                    width: 36, height: 36,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    borderRadius: 'var(--radius-sm)',
                                    border: '1px solid var(--color-border)',
                                    color: 'var(--color-text-muted)',
                                    transition: 'all 0.2s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = 'var(--color-primary-light)';
                                    e.currentTarget.style.borderColor = 'rgba(99,120,255,0.4)';
                                    e.currentTarget.style.background = 'rgba(99,120,255,0.08)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'var(--color-text-muted)';
                                    e.currentTarget.style.borderColor = 'var(--color-border)';
                                    e.currentTarget.style.background = 'transparent';
                                }}
                            >
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
