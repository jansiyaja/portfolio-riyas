import { PROFILE } from '../../data/portfolio';
import { ArrowDown, Mail, BookOpen, MapPin } from 'lucide-react';

export default function HeroSection() {
    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden bg-[#070B14]"
        >
            {/* ── LEFT: Full-height photo ── */}
            <div className="relative w-full lg:w-[48%] h-[60vh] lg:h-screen flex-shrink-0">
                {PROFILE.image ? (
                    <img
                        src={PROFILE.image}
                        alt={PROFILE.name}
                        className="w-full h-full object-cover object-top"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
                )}

                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#070B14]" />

                {/* Institute badge pinned on image */}
                <div className="absolute top-6 left-6 z-10">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-black/50 backdrop-blur-md text-[0.78rem] font-medium text-white font-mono">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399] animate-pulse inline-block" />
                        {PROFILE.institutionShort} · {PROFILE.department}
                    </span>
                </div>
            </div>

            {/* ── RIGHT: Text content ── */}
            <div className="flex-1 flex items-center relative z-10 lg:-ml-20 pt-0 lg:pt-0">
                <div className="w-full px-8 lg:px-16 py-12 lg:py-0">

                    {/* Name */}
                    <h1 className="font-display text-[clamp(3rem,6vw,5.5rem)] font-black leading-[1.0] mb-5 text-white animate-fade-up">
                        {PROFILE.name.split(' ')[0]}<br />
                        <span className="gradient-text">{PROFILE.name.split(' ').slice(1).join(' ')}</span>
                    </h1>

                    {/* Title pill */}
                    <p className="text-[clamp(0.95rem,2vw,1.2rem)] text-white/70 mb-6 font-medium animate-fade-up [animation-delay:0.1s] [animation-fill-mode:both]">
                        {PROFILE.title}
                    </p>

                    {/* Location */}
                    <div className="flex items-center gap-2 mb-8 text-white/50 text-sm animate-fade-up [animation-delay:0.15s] [animation-fill-mode:both]">
                        <MapPin size={14} className="text-primary-light" />
                        <span>{PROFILE.institution}</span>
                    </div>

                    {/* Short bio */}
                    <p className="text-[1rem] text-white/60 max-w-[520px] leading-relaxed mb-10 animate-fade-up [animation-delay:0.2s] [animation-fill-mode:both]">
                        {PROFILE.bio.split('.')[0].trim()}.
                    </p>

                    {/* Research tags */}
                    <div className="flex flex-wrap gap-2 mb-10 animate-fade-up [animation-delay:0.25s] [animation-fill-mode:both]">
                        {PROFILE.interests.slice(0, 5).map(interest => (
                            <span key={interest} className="px-3 py-1 rounded-md text-[0.75rem] font-medium bg-white/5 border border-white/12 text-white/70">
                                {interest}
                            </span>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex items-center gap-4 flex-wrap animate-fade-up [animation-delay:0.3s] [animation-fill-mode:both]">
                        <a
                            href={`mailto:${PROFILE.email}`}
                            className="btn btn-primary"
                        >
                            <Mail size={16} /> Get in Touch
                        </a>
                        <a
                            href={PROFILE.socials.scholar}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                        >
                            <BookOpen size={16} /> Scholar Profile
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10 animate-fade-up [animation-delay:0.4s] [animation-fill-mode:both]">
                        {[
                            { label: 'Publications', val: PROFILE.publications || '4+' },
                            { label: 'Institution', val: PROFILE.institutionShort },
                            { label: 'Field', val: 'STS & Policy' },
                        ].map(({ label, val }) => (
                            <div key={label}>
                                <p className="text-[0.65rem] text-white/35 font-mono uppercase tracking-widest mb-1">{label}</p>
                                <p className="text-[0.95rem] font-bold text-white">{val}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll cue */}
            <button
                onClick={scrollToAbout}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-transparent border-none cursor-pointer text-white/40 hover:text-white/70 transition-colors animate-bounce flex flex-col items-center gap-1.5 z-20"
            >
                <span className="text-[0.65rem] font-mono tracking-widest">SCROLL</span>
                <ArrowDown size={14} />
            </button>
        </section>
    );
}
