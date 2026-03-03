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
        <footer className="bg-bg-secondary border-t border-border-dim pt-12 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-4 group">
                            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-display font-black text-white text-base shadow-lg transition-transform group-hover:scale-110">
                                {PROFILE.name[0]}
                            </span>
                            <span className="font-display font-bold text-[1.05rem] text-text-primary">
                                {PROFILE.name.split(' ')[0]}<span className="gradient-text"> {PROFILE.name.split(' ').slice(1).join(' ')}</span>
                            </span>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed max-w-[300px]">
                            {PROFILE.bio.split('.')[0]}. {PROFILE.bio.split('.')[1]}.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="text-[0.85rem] font-bold uppercase tracking-widest text-text-muted mb-5 font-mono">Quick Links</h4>
                        <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                            {nav.map((l) => (
                                <li key={l.href}>
                                    <a
                                        href={l.href}
                                        className="text-text-secondary text-sm transition-all duration-200 hover:text-primary-light hover:translate-x-1 inline-block"
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-[0.85rem] font-bold uppercase tracking-widest text-text-muted mb-5 font-mono">Get in Touch</h4>
                        <p className="text-text-secondary text-sm mb-3 font-semibold break-all leading-relaxed">{PROFILE.email}</p>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            {PROFILE.institutionShort}<br />
                            {PROFILE.office.split(',').slice(0, 2).join(',')}
                        </p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-6 border-t border-border-dim">
                    <p className="text-text-muted text-[0.82rem] font-medium order-2 sm:order-1">
                        © {year} {PROFILE.name}. All rights reserved.
                    </p>

                    <div className="flex gap-2.5 order-1 sm:order-2">
                        {socials.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="w-9 h-9 flex items-center justify-center rounded-xl border border-border-dim text-text-muted hover:text-primary-light hover:border-primary/40 hover:bg-primary/10 transition-all"
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
