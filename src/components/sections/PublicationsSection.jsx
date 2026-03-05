import { useState } from 'react';
import { PUBLICATIONS } from '../../data/portfolio';
import { ExternalLink, FileText, Quote, BookOpen, BookMarked } from 'lucide-react';
import AccordionSection from '../ui/AccordionSection';

const typeConfig = {
    'Working Paper': { icon: FileText, colorClass: 'text-primary-light', bgClass: 'bg-primary/10', borderClass: 'border-primary/25' },
    'Conference Paper': { icon: BookOpen, colorClass: 'text-secondary', bgClass: 'bg-secondary/8', borderClass: 'border-secondary/20' },
    'Manuscript': { icon: BookMarked, colorClass: 'text-emerald-accent', bgClass: 'bg-emerald-accent/8', borderClass: 'border-emerald-accent/20' },
};

const scholarLink = (
    <a
        href="https://scholar.google.com/citations?user=lcCrhuwAAAAJ"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline bg-white/5 border-primary/30 text-sm py-2 px-5"
    >
        <BookOpen size={14} /> Google Scholar
    </a>
);

export default function PublicationsSection() {
    const [expanded, setExpanded] = useState(null);
    const years = [...new Set(PUBLICATIONS.map((p) => p.year))].sort((a, b) => b - a);

    return (
        <AccordionSection
            id="publications"
            bg="bg-bg-secondary"
            label="Academic Output"
            title={<>Selected <span className="gradient-text">Publications</span></>}
            subtitle="Research on patent thickets, STS, and policy interventions for assistive technology access."
            headerExtra={scholarLink}
            defaultOpen={true}
            index={2}
            accentColor="#22D3EE"
            meta={['4 Papers + Manuscripts', '2022–2023', 'Google Scholar']}
        >
            {/* Decorative glow */}
            <div className="glow-orb absolute bottom-0 right-[5%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(34,211,238,0.07)_0%,transparent_70%)] pointer-events-none" />

            {/* Publications list grouped by year */}
            {years.map((year) => (
                <div key={year} className="mb-10 animate-fade-up">
                    {/* Year label */}
                    <div className="flex items-center gap-4 mb-5">
                        <span className="font-mono text-[0.8rem] font-bold text-primary-light px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                            {year}
                        </span>
                        <div className="flex-1 h-px bg-border-dim" />
                    </div>

                    <div className="flex flex-col gap-3">
                        {PUBLICATIONS.filter((p) => p.year === year).map((pub) => {
                            const { icon: TypeIcon, colorClass, bgClass, borderClass } = typeConfig[pub.type] || typeConfig['Working Paper'];
                            const isExpanded = expanded === pub.id;
                            return (
                                <div
                                    key={pub.id}
                                    className={`
                                        rounded-2xl border transition-all duration-300 overflow-hidden
                                        ${isExpanded ? 'border-primary/35 bg-gradient-to-br from-[#0f1730] to-[#141d3d]' : 'border-border-dim bg-bg-secondary/80 hover:border-primary/20'}
                                    `}
                                >
                                    {/* Main row */}
                                    <div
                                        className="p-6 cursor-pointer flex flex-col md:flex-row gap-5"
                                        onClick={() => setExpanded(isExpanded ? null : pub.id)}
                                    >
                                        {/* Type badge */}
                                        <div className="shrink-0 flex items-start">
                                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.7rem] font-bold font-mono border ${colorClass} ${bgClass} ${borderClass}`}>
                                                <TypeIcon size={11} /> {pub.type}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-base md:text-lg font-bold text-text-primary leading-snug mb-2 group-hover:text-primary-light transition-colors">
                                                {pub.title}
                                            </h4>
                                            <p className="text-[0.84rem] text-text-secondary mb-2 font-medium">
                                                {pub.authors}
                                            </p>
                                            <p className="text-[0.82rem] text-primary-light font-bold">
                                                {pub.venue}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-1.5 mt-4">
                                                {pub.tags.map((t) => (
                                                    <span key={t} className="px-2.5 py-0.5 rounded-full text-[0.7rem] font-semibold bg-primary/7 border border-primary/15 text-text-muted">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Citations + links */}
                                        <div className="shrink-0 flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-4">
                                            <div className="flex items-center gap-1.5 text-[0.8rem] text-text-muted font-mono bg-black/20 px-2 py-1 rounded-md">
                                                <Quote size={12} className="text-primary-light/50" />
                                                <span className="font-bold">{pub.citations}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                {pub.pdf && (
                                                    <a href={pub.pdf} target="_blank" rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="px-3 py-1.5 rounded-full text-[0.75rem] font-bold bg-primary/10 border border-primary/20 text-primary-light flex items-center gap-1.5 hover:bg-primary/20 hover:scale-105 transition-all"
                                                    >
                                                        <FileText size={11} /> PDF
                                                    </a>
                                                )}
                                                {pub.doi && (
                                                    <a href={pub.doi} target="_blank" rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="px-3 py-1.5 rounded-full text-[0.75rem] font-bold bg-secondary/8 border border-secondary/20 text-secondary flex items-center gap-1.5 hover:bg-secondary/15 hover:scale-105 transition-all"
                                                    >
                                                        <ExternalLink size={11} /> DOI
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Expanded abstract */}
                                    {isExpanded && (
                                        <div className="px-6 pb-6 pt-5 border-t border-primary/10 animate-fade-in bg-black/10">
                                            <p className="text-[0.85rem] text-text-secondary leading-relaxed italic md:px-4">
                                                <span className="text-text-muted not-italic text-[0.75rem] font-mono mr-2 uppercase tracking-tight">Abstract — </span>
                                                {pub.abstract}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </AccordionSection>
    );
}
