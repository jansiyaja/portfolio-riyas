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
        <section id="outreach" className="bg-[#070B14] py-24 relative overflow-hidden">
            <div className="container-custom">
                {/* Header */}
                <div className="mb-16">
                    <p className="font-mono text-[0.72rem] font-medium text-primary-light tracking-widest uppercase mb-3 flex items-center gap-3">
                        <span className="w-10 h-px bg-primary-light/50" /> Public Impact
                    </p>
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold mb-3 text-white">
                        Outreach & <span className="gradient-text">Social Engagement</span>
                    </h2>
                    <p className="text-white/50 text-sm max-w-[560px] leading-relaxed">
                        Translating academic research into actionable awareness and policy advocacy.
                    </p>
                </div>

                {/* Programs — Alternating image layout */}
                <div className="flex flex-col gap-20">
                    {OUTREACH_PROGRAMS.map((prog, idx) => {
                        const Icon = iconMap[prog.icon] || Users;
                        const isEven = idx % 2 === 0;

                        return (
                            <div
                                key={prog.id}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/8 ${isEven ? '' : ''}`}
                            >
                                {/* Image — Alternates left/right */}
                                <div className={`relative h-72 lg:h-auto min-h-[400px] ${!isEven ? 'lg:order-2' : ''}`}>
                                    {prog.image ? (
                                        <img
                                            src={prog.image}
                                            alt={prog.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-primary/15 to-secondary/10 flex items-center justify-center">
                                            <Icon size={80} className="text-white/5" />
                                        </div>
                                    )}

                                    {/* Category badge on image */}
                                    <div className="absolute top-5 left-5">
                                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-xs font-semibold">
                                            <Icon size={12} className="text-primary-light" />
                                            {prog.category}
                                        </span>
                                    </div>

                                    {/* Period badge */}
                                    <div className="absolute bottom-5 left-5">
                                        <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/60 text-xs font-mono">
                                            {prog.period}
                                        </span>
                                    </div>
                                </div>

                                {/* Text Panel */}
                                <div className={`bg-[#0d1020] p-8 lg:p-12 flex flex-col justify-center ${!isEven ? 'lg:order-1' : ''}`}>
                                    {/* Participants pill */}
                                    <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-xs font-bold w-fit">
                                        <Users size={12} />
                                        {prog.participants}
                                    </div>

                                    <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight mb-5">
                                        {prog.title}
                                    </h3>
                                    <p className="text-white/55 text-sm leading-[1.9] mb-8">
                                        {prog.description}
                                    </p>

                                    {/* Highlights */}
                                    <div>
                                        <p className="text-[0.65rem] font-mono uppercase tracking-widest text-white/30 mb-4">
                                            Key Highlights
                                        </p>
                                        <ul className="space-y-3">
                                            {prog.highlights.map((h, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
                                                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
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
