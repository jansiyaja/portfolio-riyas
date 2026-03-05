import { CONFERENCES } from '../../data/portfolio';
import { Presentation, MapPin, Calendar, Award, Quote } from 'lucide-react';
import AccordionSection from '../ui/AccordionSection';

// Conference images with optimal crop positions
const confImages = [
    { src: '/Conferences/WhatsApp Image 2026-02-13 at 10.36.14 AM.jpeg', objectPosition: 'top' },
    { src: '/Conferences/WhatsApp Image 2026-02-13 at 10.36.15 AM.jpeg', objectPosition: 'center' },
    { src: '/Photos/20240814_103334.jpg', objectPosition: '50% 20%' },
    { src: '/Photos/IMG-20240912-WA0077.jpg', objectPosition: 'top' },
];

export default function ConferencesSection() {
    return (
        <AccordionSection
            id="conferences"
            bg="bg-[#0a0d1a]"
            label="Academic Engagement"
            title={<>Conferences & <span className="gradient-text">Presentations</span></>}
            subtitle="Disseminating research findings at national and international academic forums."
            index={4}
            accentColor="#FBBF24"
            meta={['4 Presentations', 'National · International', '2022–2023']}
        >
            {/* Grid — Image-forward cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
                {CONFERENCES.map((conf, idx) => {
                    const imgData = confImages[idx] || confImages[0];
                    return (
                        <div
                            key={conf.id}
                            className="group rounded-2xl overflow-hidden border border-white/8 hover:border-white/20 transition-all duration-300 bg-[#0d1020] flex flex-col"
                        >
                            {/* Large image */}
                            <div className="relative h-64 overflow-hidden flex-shrink-0 bg-[#0d1020]">
                                <img
                                    src={imgData.src}
                                    alt={conf.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    style={{ objectPosition: imgData.objectPosition }}
                                />
                                {/* Bottom fade */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1020] via-black/20 to-transparent" />

                                {/* Type badge */}
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

            {/* Quote block — photo background */}
            <div className="relative rounded-2xl overflow-hidden border border-white/8">
                <div className="absolute inset-0">
                    <img
                        src="/Conferences/WhatsApp Image 2026-02-13 at 10.36.14 AM.jpeg"
                        alt="Conference background"
                        className="w-full h-full object-cover object-top opacity-25"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d1a] via-[#0a0d1a]/85 to-[#0a0d1a]/70" />
                </div>

                <div className="relative z-10 p-10 md:p-16 text-center max-w-3xl mx-auto">
                    <Quote size={36} className="text-primary/40 mx-auto mb-6" />
                    <p className="text-lg md:text-xl italic text-white/75 leading-relaxed mb-6">
                        "The value of academic research is amplified when it engages with broader publics and policymakers. Conferences are not just about presenting data, but about building networks for meaningful policy change."
                    </p>
                    <p className="text-primary-light font-bold tracking-widest font-mono text-sm">— Riyas K K</p>
                </div>
            </div>
        </AccordionSection>
    );
}
