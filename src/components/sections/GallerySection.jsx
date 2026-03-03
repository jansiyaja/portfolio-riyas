import { GALLERY } from '../../data/portfolio';
import { Camera, MapPin, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function GallerySection() {
    const [activeTab, setActiveTab] = useState('keralaLitFest');

    const tabs = [
        { id: 'keralaLitFest', label: 'Kerala Literature Festival' },
        { id: 'disabilityFestivals', label: 'Disability Festivals' },
        { id: 'academicConferences', label: 'Academic Events' },
    ];

    return (
        <section id="gallery" className="section" style={{ background: 'var(--color-bg-secondary)' }}>
            <div className="container">
                {/* Header */}
                <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
                    <p className="section-eyebrow" style={{ margin: '0 auto 0.5rem' }}>Visual Journey</p>
                    <h2 className="section-title">
                        Engaging with <span className="gradient-text">Communities</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Capturing moments from field work, public forums, and academic gatherings.
                    </p>
                </div>

                {/* Tabs */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    marginBottom: '3rem',
                    flexWrap: 'wrap'
                }}>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                                padding: '0.6rem 1.25rem',
                                borderRadius: '9999px',
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                transition: 'all 0.3s ease',
                                background: activeTab === tab.id ? 'var(--color-primary)' : 'rgba(99,120,255,0.05)',
                                color: activeTab === tab.id ? 'white' : 'var(--color-text-secondary)',
                                border: '1px solid',
                                borderColor: activeTab === tab.id ? 'var(--color-primary)' : 'rgba(99,120,255,0.15)',
                                cursor: 'pointer',
                            }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '1.5rem',
                }}>
                    {GALLERY[activeTab].map((item, idx) => (
                        <div
                            key={item.id}
                            className="glass-card"
                            style={{
                                overflow: 'hidden',
                                padding: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                animation: 'fadeInScale 0.5s ease backwards',
                                animationDelay: `${idx * 0.1}s`
                            }}
                        >
                            {/* Visual Placeholder (since we don't have real images yet) */}
                            <div style={{
                                width: '100%',
                                height: '220px',
                                background: `linear-gradient(135deg, hsla(${item.hue}, 70%, 20%, 0.8), hsla(${item.hue}, 50%, 10%, 0.9))`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative'
                            }}>
                                <Camera size={40} style={{ color: `hsla(${item.hue}, 80%, 70%, 0.3)` }} />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '1rem',
                                    right: '1rem',
                                    background: 'rgba(0,0,0,0.4)',
                                    backdropFilter: 'blur(4px)',
                                    padding: '0.2rem 0.6rem',
                                    borderRadius: '4px',
                                    fontSize: '0.65rem',
                                    fontFamily: 'var(--font-mono)',
                                    color: 'white',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    {item.id.toUpperCase()}
                                </div>
                            </div>

                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', lineHeight: 1.4 }}>
                                    {item.caption}
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
                                        <MapPin size={14} />
                                        <span>{item.location}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
                                        <Calendar size={14} />
                                        <span>{item.year}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
