import { MEDIA_COVERAGE } from '../../data/portfolio';
import { Mic, Newspaper, BookOpen, Award, User, ExternalLink } from 'lucide-react';
import AccordionSection from '../ui/AccordionSection';

const typeIcons = {
    'Article': Newspaper,
    'Interview': Mic,
    'Op-Ed': BookOpen,
    'Feature': Award,
    'Profile': User,
};

const typeColors = {
    'Article': 'text-primary-light bg-primary/10 border-primary/20',
    'Interview': 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    'Op-Ed': 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    'Feature': 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    'Profile': 'text-amber-400 bg-amber-400/10 border-amber-400/20',
};

export default function MediaSection() {
    const featured = MEDIA_COVERAGE.find(m => m.image);
    const others = MEDIA_COVERAGE.filter(m => m !== featured);

    return (
        <AccordionSection
            id="media"
            bg="bg-[#0a0d1a]"
            label="Public Presence"
            title={<>Press & <span className="gradient-text">Media</span></>}
            subtitle="Media highlights, interviews, and features on disability and technology research."
            index={7}
            accentColor="#22D3EE"
            meta={['7 Features', 'The Hindu · Forbes · EPW', '2022–2024']}
        >
            {/* ── Featured Media Card ── */}
            {featured && (() => {
                const Icon = typeIcons[featured.type] || Newspaper;
                const colorCls = typeColors[featured.type] || typeColors.Article;
                return (
                    <a
                        href={featured.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group mb-10 cursor-pointer"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/8 hover:border-white/20 transition-all duration-300">
                            {/* Image */}
                            <div className="relative h-72 lg:h-auto min-h-[380px]">
                                <img
                                    src={featured.image}
                                    alt={featured.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50 hidden lg:block" />
                                <div className="absolute top-5 left-5">
                                    <span className={`px-3 py-1 rounded-full text-[0.68rem] font-bold border font-mono flex items-center gap-1.5 ${colorCls}`}>
                                        <Icon size={11} /> {featured.type}
                                    </span>
                                </div>
                            </div>

                            {/* Text */}
                            <div className="bg-[#0d1020] p-8 lg:p-12 flex flex-col justify-center">
                                <p className={`text-xs font-bold mb-5 ${colorCls.split(' ')[0]}`}>{featured.publication}</p>
                                <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight mb-4 group-hover:text-primary-light transition-colors">
                                    {featured.title}
                                </h3>
                                <p className="text-white/55 leading-relaxed mb-8 text-sm">
                                    {featured.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-white/35 font-mono">{featured.date}</span>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-primary-light group-hover:gap-3 transition-all">
                                        Read Article <ExternalLink size={13} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                );
            })()}

            {/* ── Other Media Grid ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {others.map((item) => {
                    const Icon = typeIcons[item.type] || Newspaper;
                    const colorCls = typeColors[item.type] || typeColors.Article;
                    return (
                        <a
                            key={item.id}
                            href={item.url || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group rounded-xl overflow-hidden border border-white/8 hover:border-white/20 transition-all duration-300 bg-[#0d1020] flex flex-col cursor-pointer"
                        >
                            {/* Image or Gradient */}
                            <div className="relative h-48 overflow-hidden flex-shrink-0">
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div
                                        className="w-full h-full flex items-center justify-center"
                                        style={{ background: `linear-gradient(135deg, hsla(${item.hue},50%,12%,1), hsla(${item.hue},40%,8%,1))` }}
                                    >
                                        <Icon size={44} style={{ color: `hsla(${item.hue},70%,65%,0.15)` }} />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1020] to-transparent" />
                                <div className="absolute top-4 left-4">
                                    <span className={`px-2.5 py-0.5 rounded-full text-[0.65rem] font-bold border font-mono flex items-center gap-1 ${colorCls}`}>
                                        <Icon size={10} /> {item.type}
                                    </span>
                                </div>
                            </div>

                            {/* Text */}
                            <div className="p-5 flex flex-col flex-1">
                                <p className={`text-[0.7rem] font-bold mb-2 ${colorCls.split(' ')[0]}`}>{item.publication}</p>
                                <h3 className="font-bold text-white text-[0.95rem] leading-snug mb-2 group-hover:text-primary-light transition-colors flex-1">
                                    {item.title}
                                </h3>
                                <p className="text-white/45 text-[0.8rem] leading-relaxed line-clamp-2 mb-4">
                                    {item.description}
                                </p>
                                <div className="flex items-center justify-between pt-3 border-t border-white/6 text-[0.7rem] text-white/35">
                                    <span>{item.date}</span>
                                    <span className="flex items-center gap-1 text-primary-light/70 group-hover:text-primary-light transition-colors">
                                        Read <ExternalLink size={10} />
                                    </span>
                                </div>
                            </div>
                        </a>
                    );
                })}
            </div>
        </AccordionSection>
    );
}
