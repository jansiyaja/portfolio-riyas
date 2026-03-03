import { CONFERENCES } from '../../data/portfolio';
import { Presentation, MapPin, Calendar, Award, Quote } from 'lucide-react';

// Map conference images from the Conferences folder
const confImages = [
    '/Conferences/WhatsApp Image 2026-02-13 at 10.36.14 AM.jpeg',
    '/Conferences/WhatsApp Image 2026-02-13 at 10.36.15 AM.jpeg',
    '/Photos/20240814_103334.jpg',
    '/Photos/IMG-20240912-WA0077.jpg',
];

export default function ConferencesSection() {
    return (
        <section id="conferences" className="bg-[#0a0d1a] py-24 relative overflow-hidden">
            <div className="container-custom">
                {/* Header */}
                <div className="mb-16">
                    <p className="font-mono text-[0.72rem] font-medium text-primary-light tracking-widest uppercase mb-3 flex items-center gap-3">
                        <span className="w-10 h-px bg-primary-light/50" /> Academic Engagement
                    </p>
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold mb-3 text-white">
                        Conferences & <span className="gradient-text">Presentations</span>
                    </h2>
                    <p className="text-white/50 text-sm max-w-[560px] leading-relaxed">
                        Disseminating research findings at national and international academic forums.
                    </p>
                </div>

                {/* Grid — Image-forward cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
                    {CONFERENCES.map((conf, idx) => {
                        const img = confImages[idx] || confImages[0];
                        return (
                            <div
                                key={conf.id}
                                className="group rounded-2xl overflow-hidden border border-white/8 hover:border-white/20 transition-all duration-300 bg-[#0d1020] flex flex-col"
                            >
                                {/* Large image */}
                                <div className="relative h-56 overflow-hidden flex-shrink-0">
                                    <img
                                        src={img}
                                        alt={conf.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1020] via-black/30 to-transparent" />

                                    {/* Type badge on image */}
                                    <div className="absolute top-4 left-4">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md border font-mono
                                            ${conf.type === 'Invited Talk'
                                                ? 'bg-amber-400/20 border-amber-400/30 text-amber-300'
                                                : 'bg-primary/20 border-primary/30 text-primary-light'}`}>
                                            {conf.type === 'Invited Talk' ? <Award size={11} /> : <Presentation size={11} />}
                                            {conf.type}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-base font-bold text-white leading-snug mb-4 group-hover:text-primary-light transition-colors flex-1">
                                        "{conf.title}"
                                    </h3>

                                    <div className="border-t border-white/6 pt-4 space-y-2">
                                        <p className="text-sm text-white/60 font-medium">{conf.event}</p>
                                        <div className="flex flex-wrap gap-4 text-xs text-white/35">
                                            <span className="flex items-center gap-1.5">
                                                <MapPin size={11} className="text-primary-light/50" />
                                                {conf.location}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Calendar size={11} className="text-primary-light/50" />
                                                {conf.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Quote block */}
                <div className="relative rounded-2xl overflow-hidden">
                    {/* Background image from conferences */}
                    <div className="absolute inset-0">
                        <img
                            src="/Photos/20240814_103334.jpg"
                            alt="Conference"
                            className="w-full h-full object-cover opacity-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d1a] via-[#0a0d1a]/80 to-[#0a0d1a]/60" />
                    </div>

                    <div className="relative z-10 p-10 md:p-16 text-center max-w-3xl mx-auto">
                        <Quote size={36} className="text-primary/30 mx-auto mb-6" />
                        <p className="text-lg md:text-xl italic text-white/70 leading-relaxed mb-6">
                            "The value of academic research is amplified when it engages with broader publics and policymakers. Conferences are not just about presenting data, but about building networks for meaningful policy change."
                        </p>
                        <p className="text-primary-light font-bold tracking-widest font-mono text-sm">— Riyas K K</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
