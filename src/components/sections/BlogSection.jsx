import { useState } from 'react';
import { BLOG_POSTS } from '../../data/portfolio';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import AccordionSection from '../ui/AccordionSection';

const GRADIENT_COLORS = [
    'from-[#6378FF] to-[#8B5CF6]',
    'from-[#22D3EE] to-[#6378FF]',
    'from-[#34D399] to-[#22D3EE]',
    'from-[#FBBF24] to-[#F87171]',
    'from-[#A78BFA] to-[#6378FF]',
    'from-[#F87171] to-[#FBBF24]',
];

function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function getGradient(id) {
    const idx = typeof id === 'string' ? id.charCodeAt(id.length - 1) % GRADIENT_COLORS.length : 0;
    return GRADIENT_COLORS[idx];
}

export default function BlogSection() {
    const [filter, setFilter] = useState('All');
    const allTags = ['All', ...new Set(BLOG_POSTS.flatMap((p) => p.tags))].slice(0, 8);
    const featured = BLOG_POSTS.find((p) => p.featured);
    const others = filter === 'All'
        ? BLOG_POSTS.filter((p) => !p.featured)
        : BLOG_POSTS.filter((p) => p.tags.includes(filter) && !p.featured);

    return (
        <AccordionSection
            id="blog"
            bg="bg-[#070B14]"
            label="Writing"
            title={<>From the <span className="gradient-text">Blog</span></>}
            subtitle="Reflections on STS, disability policy, and public engagement."
            index={3}
            accentColor="#A78BFA"
            meta={['6 Posts', 'Policy · STS · Reflection', '2022–2023']}
        >
            {/* ── Featured Post ── */}
            {featured && (
                <div className="mb-12 group cursor-pointer">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/8">
                        {/* Image */}
                        <div className="relative h-72 lg:h-auto min-h-[400px]">
                            {featured.image ? (
                                <img
                                    src={featured.image}
                                    alt={featured.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            ) : (
                                <div className={`w-full h-full bg-gradient-to-br ${getGradient(featured.id)}`} />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60 hidden lg:block" />
                            <div className="absolute top-5 left-5">
                                <span className="px-3 py-1 rounded-full text-[0.7rem] font-bold bg-white text-black font-mono">⭐ Featured</span>
                            </div>
                        </div>

                        {/* Text */}
                        <div className="bg-[#0d1020] p-8 lg:p-12 flex flex-col justify-center">
                            <div className="flex flex-wrap gap-2 mb-5">
                                {featured.tags.slice(0, 3).map(t => (
                                    <span key={t} className="px-2.5 py-1 rounded-md text-[0.7rem] font-semibold bg-primary/10 border border-primary/20 text-primary-light">{t}</span>
                                ))}
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight mb-4 group-hover:text-primary-light transition-colors">
                                {featured.title}
                            </h3>
                            <p className="text-white/55 leading-relaxed mb-8 text-sm line-clamp-4">
                                {featured.excerpt || featured.content?.split('\n')[0]}
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex gap-4 text-xs text-white/40">
                                    <span className="flex items-center gap-1.5"><Calendar size={12} />{formatDate(featured.date)}</span>
                                    <span className="flex items-center gap-1.5"><Clock size={12} />{featured.readTime}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm font-semibold text-primary-light group-hover:gap-3 transition-all">
                                    Read <ArrowRight size={14} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ── Filter ── */}
            <div className="flex flex-wrap gap-2 mb-8">
                {allTags.map(tag => (
                    <button
                        key={tag}
                        onClick={() => setFilter(tag)}
                        className={`px-4 py-1.5 rounded-full text-[0.78rem] font-medium border transition-all cursor-pointer
                            ${filter === tag
                                ? 'bg-white text-black border-transparent'
                                : 'bg-transparent border-white/10 text-white/50 hover:border-white/25 hover:text-white/80'}`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* ── Other Posts Grid ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {others.map((post) => (
                    <div key={post.id} className="group cursor-pointer rounded-xl overflow-hidden border border-white/8 hover:border-white/20 transition-all duration-300 bg-[#0a0d1a]">
                        {/* Image */}
                        <div className="relative h-52 overflow-hidden">
                            {post.image ? (
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            ) : (
                                <div className={`w-full h-full bg-gradient-to-br ${getGradient(post.id)}`} />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d1a] via-transparent to-transparent" />
                        </div>

                        {/* Text */}
                        <div className="p-5">
                            <div className="flex flex-wrap gap-1.5 mb-3">
                                {post.tags.slice(0, 2).map(t => (
                                    <span key={t} className="px-2 py-0.5 rounded text-[0.65rem] font-semibold bg-white/5 text-white/50">{t}</span>
                                ))}
                            </div>
                            <h4 className="font-bold text-white text-[0.95rem] leading-snug mb-2 group-hover:text-primary-light transition-colors">
                                {post.title}
                            </h4>
                            <p className="text-white/45 text-[0.82rem] leading-relaxed line-clamp-2 mb-4">
                                {post.excerpt || post.content?.split('\n')[0]}
                            </p>
                            <div className="flex items-center justify-between pt-3 border-t border-white/6 text-[0.72rem] text-white/35">
                                <span className="flex items-center gap-1.5"><Clock size={11} />{post.readTime}</span>
                                <span>{formatDate(post.date)}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </AccordionSection>
    );
}
