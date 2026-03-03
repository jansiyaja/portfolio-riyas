import { GALLERY } from '../../data/portfolio';
import { MapPin, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

export default function GallerySection() {
    const [activeTab, setActiveTab] = useState('keralaLitFest');
    const [lightbox, setLightbox] = useState(null); // { items, index }

    const tabs = [
        { id: 'keralaLitFest', label: 'Kerala Literature Festival' },
        { id: 'disabilityFestivals', label: 'Disability Festivals' },
        { id: 'academicConferences', label: 'Academic Events' },
    ];

    const items = GALLERY[activeTab] || [];

    const openLightbox = (index) => setLightbox({ items, index });
    const closeLightbox = () => setLightbox(null);
    const prev = useCallback(() => setLightbox(lb => ({ ...lb, index: (lb.index - 1 + lb.items.length) % lb.items.length })), []);
    const next = useCallback(() => setLightbox(lb => ({ ...lb, index: (lb.index + 1) % lb.items.length })), []);

    // Keyboard navigation
    useEffect(() => {
        if (!lightbox) return;
        const handler = (e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [lightbox, prev, next]);

    return (
        <section id="gallery" className="bg-section relative overflow-hidden bg-[#070B14] py-20">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="font-mono text-[0.75rem] font-medium text-primary-light tracking-widest uppercase mb-3">
                        — Visual Journey —
                    </p>
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold mb-4 text-white">
                        Engaging with <span className="gradient-text">Communities</span>
                    </h2>
                    <p className="text-white/50 max-w-[560px] mx-auto leading-relaxed text-sm">
                        Moments from field work, public forums, and academic gatherings.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center gap-3 mb-10 flex-wrap">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                                px-5 py-2 rounded-full text-[0.82rem] font-semibold transition-all cursor-pointer
                                ${activeTab === tab.id
                                    ? 'bg-white text-[#070B14] shadow-lg'
                                    : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white'}
                            `}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Masonry-style Photo Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    {items.map((item, idx) => (
                        <div
                            key={item.id}
                            className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl"
                            onClick={() => openLightbox(idx)}
                        >
                            {item.image ? (
                                <img
                                    src={item.image}
                                    alt={item.caption}
                                    className="w-full h-auto object-cover block transition-transform duration-500 group-hover:scale-105"
                                    style={{ minHeight: idx % 3 === 0 ? '300px' : '200px', objectFit: 'cover' }}
                                />
                            ) : (
                                <div
                                    className="w-full flex items-center justify-center"
                                    style={{
                                        minHeight: idx % 3 === 0 ? '300px' : '200px',
                                        background: `linear-gradient(135deg, hsla(${item.hue}, 70%, 20%, 0.8), hsla(${item.hue}, 40%, 10%, 0.9))`
                                    }}
                                >
                                    <span className="text-4xl font-black text-white/10 font-mono">{idx + 1}</span>
                                </div>
                            )}

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                                <h3 className="text-white font-bold text-sm leading-tight mb-2">{item.caption}</h3>
                                <div className="flex items-center gap-3 text-white/60 text-xs">
                                    <span className="flex items-center gap-1"><MapPin size={11} />{item.location}</span>
                                    <span className="flex items-center gap-1"><Calendar size={11} />{item.year}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
                    onClick={closeLightbox}
                >
                    {/* Close */}
                    <button
                        className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors z-10 bg-white/10 hover:bg-white/20 rounded-full p-2"
                        onClick={closeLightbox}
                    >
                        <X size={22} />
                    </button>

                    {/* Counter */}
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 font-mono text-xs">
                        {lightbox.index + 1} / {lightbox.items.length}
                    </div>

                    {/* Prev */}
                    <button
                        className="absolute left-4 text-white/60 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-3 z-10"
                        onClick={(e) => { e.stopPropagation(); prev(); }}
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Image */}
                    <div className="max-w-5xl max-h-[85vh] px-16 py-10 w-full" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={lightbox.items[lightbox.index].image}
                            alt={lightbox.items[lightbox.index].caption}
                            className="w-full h-full object-contain rounded-xl max-h-[70vh]"
                        />
                        <div className="mt-5 text-center">
                            <p className="text-white font-semibold text-base mb-1">{lightbox.items[lightbox.index].caption}</p>
                            <p className="text-white/50 text-sm flex items-center justify-center gap-3">
                                <span className="flex items-center gap-1.5"><MapPin size={12} />{lightbox.items[lightbox.index].location}</span>
                                <span className="flex items-center gap-1.5"><Calendar size={12} />{lightbox.items[lightbox.index].year}</span>
                            </p>
                        </div>
                    </div>

                    {/* Next */}
                    <button
                        className="absolute right-4 text-white/60 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-3 z-10"
                        onClick={(e) => { e.stopPropagation(); next(); }}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            )}
        </section>
    );
}
