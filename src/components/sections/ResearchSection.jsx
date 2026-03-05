import { RESEARCH_AREAS, PROFILE } from '../../data/portfolio';
import { MessageSquare, GitBranch, Lightbulb, Brain, ArrowRight } from 'lucide-react';
import AccordionSection from '../ui/AccordionSection';

const iconMap = { MessageSquare, GitBranch, Lightbulb, Brain };

const colors = [
    { accent: '#6378FF', light: 'rgba(99,120,255,0.12)', border: 'rgba(99,120,255,0.2)' },
    { accent: '#22D3EE', light: 'rgba(34,211,238,0.10)', border: 'rgba(34,211,238,0.2)' },
    { accent: '#34D399', light: 'rgba(52,211,153,0.10)', border: 'rgba(52,211,153,0.2)' },
    { accent: '#FBBF24', light: 'rgba(251,191,36,0.10)', border: 'rgba(251,191,36,0.2)' },
];

export default function ResearchSection() {
    return (
        <AccordionSection
            id="research"
            bg="bg-[#070B14]"
            label="Research Focus"
            title={<>Areas of <span className="gradient-text">Investigation</span></>}
            subtitle="Research sits at the crossroads of science & technology policy, disability studies, and intellectual property — seeking to make technology more accessible and equitable."
            defaultOpen={true}
            index={1}
            accentColor="#6378FF"
            meta={['4 Research Areas', 'STS · IPR · Policy', 'PhD Research']}
        >
            {/* Research area cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
                {RESEARCH_AREAS.map((area, i) => {
                    const Icon = iconMap[area.icon] || Brain;
                    const c = colors[i % colors.length];
                    return (
                        <div
                            key={area.id}
                            className="group relative rounded-xl border overflow-hidden hover:-translate-y-1 transition-all duration-300"
                            style={{ borderColor: c.border, background: c.light }}
                        >
                            {/* Top accent bar */}
                            <div className="h-1 w-full" style={{ background: c.accent }} />

                            <div className="p-8">
                                {/* Icon */}
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                                    style={{ background: `${c.accent}22`, border: `1px solid ${c.border}` }}
                                >
                                    <Icon size={22} style={{ color: c.accent }} />
                                </div>

                                <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                                    {area.title}
                                </h3>
                                <p className="text-white/55 text-sm leading-[1.8] mb-6">
                                    {area.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {area.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 rounded-md text-[0.7rem] font-bold font-mono"
                                            style={{ color: c.accent, background: `${c.accent}18`, border: `1px solid ${c.border}` }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Current PhD Research callout */}
            <div className="relative rounded-2xl overflow-hidden border border-white/8">
                {/* Background photo */}
                <div className="absolute inset-0">
                    <img
                        src="/Photos/_SKS0260.JPG.jpeg"
                        alt="Research"
                        className="w-full h-full object-cover object-top opacity-15"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#070B14] via-[#070B14]/90 to-[#070B14]/70" />
                </div>

                <div className="relative z-10 p-8 md:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                    <div className="max-w-[680px]">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/25 text-primary-light text-xs font-mono font-bold mb-5">
                            🔬 Current Doctoral Research
                        </div>
                        <h4 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
                            Intellectual Property Rights and the Accessibility of Assistive Technologies
                        </h4>
                        <p className="text-white/50 text-sm">
                            PhD Dissertation (2018–Present) · {PROFILE.institution}
                        </p>
                    </div>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="btn btn-primary lg:w-fit font-bold cursor-pointer flex-shrink-0"
                    >
                        Collaborate <ArrowRight size={16} className="ml-1" />
                    </button>
                </div>
            </div>
        </AccordionSection>
    );
}
