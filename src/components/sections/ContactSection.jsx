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

    const socials = [
        ...(PROFILE.socials.scholar ? [{ icon: BookOpen, href: PROFILE.socials.scholar, label: 'Scholar', color: 'var(--color-primary-light)' }] : []),
        ...(PROFILE.socials.linkedin ? [{ icon: Linkedin, href: PROFILE.socials.linkedin, label: 'LinkedIn', color: '#0A66C2' }] : []),
    ];

    return (
        <section id="contact" className="bg-section relative overflow-hidden bg-bg">
            <div className="grid-bg" />
            <div className="glow-orb absolute top-1/5 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(99,120,255,0.1)_0%,transparent_70%)] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="text-center mb-14">
                    <p className="font-mono text-[0.78rem] font-medium text-primary-light tracking-widest uppercase mb-3 flex items-center justify-center gap-2 before:content-[''] before:inline-block before:w-8 before:h-0.5 before:bg-gradient-to-r before:from-primary before:to-primary-light before:rounded-sm">
                        Contact
                    </p>
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold mb-4">Let's <span className="gradient-text">Connect</span></h2>
                    <p className="text-text-secondary max-w-[600px] mx-auto leading-relaxed">
                        I'm always open to discussing research ideas, collaborations, or public policy engagements.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
                    {/* Info panel */}
                    <div className="glass-card p-8 flex flex-col gap-7">
                        <div>
                            <h3 className="font-display text-xl font-bold mb-2">
                                Get In Touch
                            </h3>
                            <p className="text-[0.88rem] text-text-secondary leading-relaxed">
                                Whether you're a fellow researcher, policymaker, or community advocate — feel free to reach out!
                            </p>
                        </div>

                        {[
                            { icon: Mail, label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
                            { icon: MapPin, label: 'Office', value: PROFILE.office, href: null },
                        ].map(({ icon: Icon, label, value, href }) => (
                            <div key={label} className="flex gap-4 items-start group">
                                <span className="w-10.5 h-10.5 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light group-hover:bg-primary/20 group-hover:border-primary/40 transition-all shrink-0">
                                    <Icon size={18} />
                                </span>
                                <div className="flex-1">
                                    <p className="text-[0.75rem] text-text-muted uppercase tracking-widest font-mono mb-1">{label}</p>
                                    {href ? (
                                        <a href={href} className="text-[0.85rem] text-primary-light font-semibold hover:text-white transition-colors break-all underline decoration-primary/30 underline-offset-4">{value}</a>
                                    ) : (
                                        <p className="text-[0.85rem] text-text-secondary font-semibold leading-relaxed">{value}</p>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Socials */}
                        <div>
                            <p className="text-[0.75rem] text-text-muted uppercase tracking-widest font-mono mb-3">Find me on</p>
                            <div className="flex gap-2.5 flex-wrap">
                                {socials.map(({ icon: Icon, href, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="w-10 h-10 rounded-xl border border-border-dim flex items-center justify-center text-text-secondary hover:border-primary/40 hover:bg-primary/10 hover:text-primary-light transition-all cursor-pointer"
                                    >
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="mt-auto pt-4 border-t border-border-dim">
                            <p className="text-[0.75rem] text-text-muted leading-relaxed italic">
                                Currently based at {PROFILE.institutionShort}, {PROFILE.department}.
                            </p>
                        </div>
                    </div>

                    {/* Contact form */}
                    <div className="glass-card p-8 bg-bg-secondary/50">
                        {sent ? (
                            <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-8">
                                <div className="w-16 h-16 rounded-full bg-emerald-accent/12 border border-emerald-accent/30 flex items-center justify-center text-emerald-accent animate-pulse-glow">
                                    <CheckCircle size={28} />
                                </div>
                                <h3 className="font-display text-2xl font-bold">Message Sent!</h3>
                                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                    Thanks for reaching out, {form.name}! I'll get back to you within 2–3 business days.
                                </p>
                                <button className="btn btn-outline w-full justify-center" onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}>
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <h3 className="font-display text-lg font-bold mb-2">
                                    Send a Message
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {['name', 'email'].map((field) => (
                                        <div key={field}>
                                            <label className="block text-[0.78rem] text-text-muted mb-1.5 uppercase tracking-wide font-bold">
                                                {field === 'email' ? 'Email *' : 'Name *'}
                                            </label>
                                            <input
                                                type={field === 'email' ? 'email' : 'text'}
                                                name={field}
                                                value={form[field]}
                                                onChange={handleChange}
                                                required
                                                placeholder={field === 'email' ? 'your@email.com' : 'Full Name'}
                                                className={`
                                                    w-full px-4 py-3 rounded-xl transition-all outline-none text-sm
                                                    ${focused === field
                                                        ? 'bg-primary/8 border-primary/50 ring-2 ring-primary/5'
                                                        : 'bg-bg/80 border-border-dim focus:border-primary/30'}
                                                    border text-text-primary placeholder:text-text-muted/50
                                                `}
                                                onFocus={() => setFocused(field)}
                                                onBlur={() => setFocused(null)}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div>
                                    <label className="block text-[0.78rem] text-text-muted mb-1.5 uppercase tracking-wide font-bold">Subject *</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="Inquiry or collaboration topic"
                                        className={`
                                            w-full px-4 py-3 rounded-xl transition-all outline-none text-sm
                                            ${focused === 'subject'
                                                ? 'bg-primary/8 border-primary/50 ring-2 ring-primary/5'
                                                : 'bg-bg/80 border-border-dim focus:border-primary/30'}
                                            border text-text-primary placeholder:text-text-muted/50
                                        `}
                                        onFocus={() => setFocused('subject')}
                                        onBlur={() => setFocused(null)}
                                    />
                                </div>

                                <div>
                                    <label className="block text-[0.78rem] text-text-muted mb-1.5 uppercase tracking-wide font-bold">Message *</label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Hello, I'd like to talk about..."
                                        className={`
                                            w-full px-4 py-3 rounded-xl transition-all outline-none text-sm resize-none min-h-[140px]
                                            ${focused === 'message'
                                                ? 'bg-primary/8 border-primary/50 ring-2 ring-primary/5'
                                                : 'bg-bg/80 border-border-dim focus:border-primary/30'}
                                            border text-text-primary placeholder:text-text-muted/50
                                        `}
                                        onFocus={() => setFocused('message')}
                                        onBlur={() => setFocused(null)}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary w-full justify-center mt-2">
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
