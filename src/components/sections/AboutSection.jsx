import { PROFILE, EDUCATION } from '../../data/portfolio';
import { GraduationCap, MapPin, Mail, Globe } from 'lucide-react';

export default function AboutSection() {
    return (
        <section id="about" className="relative overflow-hidden bg-[#0a0d1a] py-24">
            <div className="container-custom">
                {/* ── Section Label ── */}
                <p className="font-mono text-[0.72rem] font-medium text-primary-light tracking-widest uppercase mb-16 flex items-center gap-3">
                    <span className="w-10 h-px bg-primary-light/50" />
                    About the Researcher
                </p>

                {/* ── Top: Large Photo + Bio side by side ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-start">
                    {/* Large Photo */}
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-2xl aspect-[3/4] w-full max-w-md mx-auto lg:mx-0">
                            {PROFILE.imageAbout ? (
                                <img
                                    src={PROFILE.imageAbout}
                                    alt={PROFILE.name}
                                    className="w-full h-full object-cover object-top"
                                />
                            ) : PROFILE.image ? (
                                <img
                                    src={PROFILE.image}
                                    alt={PROFILE.name}
                                    className="w-full h-full object-cover object-top"
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-primary/15 to-secondary/15" />
                            )}

                            {/* Name overlay at bottom */}
                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/60 to-transparent">
                                <h2 className="text-2xl font-black text-white leading-tight mb-1">{PROFILE.name}</h2>
                                <p className="text-primary-light text-sm font-medium">{PROFILE.title}</p>
                                <div className="flex items-center gap-2 mt-2 text-white/50 text-xs">
                                    <MapPin size={11} />
                                    <span>{PROFILE.institution}</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Pills floating below */}
                        <div className="flex flex-wrap gap-3 mt-5 justify-center lg:justify-start">
                            <a
                                href={`mailto:${PROFILE.email}`}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs hover:bg-white/10 hover:text-white transition-all"
                            >
                                <Mail size={12} /> {PROFILE.email}
                            </a>
                            {PROFILE.socials.scholar && (
                                <a
                                    href={PROFILE.socials.scholar}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs hover:bg-white/10 hover:text-white transition-all"
                                >
                                    <Globe size={12} /> Google Scholar
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Bio Content */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold mb-8 text-white leading-tight">
                            The Researcher <span className="gradient-text">Behind the Work</span>
                        </h2>

                        <div className="space-y-5 mb-10">
                            {PROFILE.bio.split('\n\n').map((para, i) => (
                                <p key={i} className="text-white/65 leading-[1.85] text-[0.97rem]">
                                    {para.trim()}
                                </p>
                            ))}
                        </div>

                        {/* Research Interests */}
                        <div>
                            <p className="text-[0.65rem] font-mono text-white/35 uppercase tracking-widest mb-4">Research Interests</p>
                            <div className="flex flex-wrap gap-2">
                                {PROFILE.interests.map(interest => (
                                    <span
                                        key={interest}
                                        className="px-3.5 py-1.5 rounded-lg text-[0.8rem] font-medium bg-primary/8 border border-primary/15 text-primary-light hover:bg-primary/15 transition-colors cursor-default"
                                    >
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Bottom: Education Timeline ── */}
                <div className="border-t border-white/8 pt-16">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light">
                            <GraduationCap size={18} />
                        </div>
                        <h3 className="text-xl font-bold text-white">Academic Background</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {EDUCATION.map((edu, i) => (
                            <div
                                key={i}
                                className="relative p-6 rounded-2xl border border-white/6 bg-white/[0.02] hover:border-primary/25 hover:bg-primary/3 transition-all duration-300"
                            >
                                {i === 0 && (
                                    <span className="absolute top-4 right-4 text-[0.6rem] font-bold px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 font-mono">
                                        Ongoing
                                    </span>
                                )}
                                <div className={`w-2.5 h-2.5 rounded-full mb-4 ${i === 0 ? 'bg-emerald-400 shadow-[0_0_8px_#34D399]' : 'bg-primary/50'}`} />
                                <h4 className="text-white font-bold text-[1rem] leading-tight mb-2">{edu.degree}</h4>
                                <p className="text-primary-light text-sm font-medium mb-1">{edu.institution}</p>
                                <p className="text-white/35 text-xs font-mono">{edu.year}</p>
                                {edu.note && <p className="text-white/45 text-xs mt-3 italic">{edu.note}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
