import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * AccordionSection — Premium collapsible section wrapper.
 *
 * Props:
 *  - id          : string      — HTML id for the <section>
 *  - bg          : string      — Tailwind bg class
 *  - label       : string      — mono overline label
 *  - title       : ReactNode   — h2 content
 *  - subtitle    : string      — small subtitle text
 *  - defaultOpen : bool        — whether panel opens by default
 *  - children    : ReactNode   — the body content to collapse
 *  - headerExtra : ReactNode   — optional element right of title
 *  - meta        : string[]    — 1–3 short strings shown as pills in collapsed state
 *  - accentColor : string      — hex/hsl for the left-accent (default primary blue)
 *  - index       : number      — section number to display
 */
export default function AccordionSection({
    id,
    bg = 'bg-[#070B14]',
    label,
    title,
    subtitle,
    defaultOpen = false,
    children,
    headerExtra,
    meta = [],
    accentColor = '#6378FF',
    index,
}) {
    const [open, setOpen] = useState(defaultOpen);
    const bodyRef = useRef(null);
    const [height, setHeight] = useState(defaultOpen ? 'auto' : '0px');

    useEffect(() => {
        if (!bodyRef.current) return;
        if (open) {
            const h = bodyRef.current.scrollHeight;
            setHeight(`${h}px`);
            const t = setTimeout(() => setHeight('auto'), 450);
            return () => clearTimeout(t);
        } else {
            const h = bodyRef.current.scrollHeight;
            setHeight(`${h}px`);
            requestAnimationFrame(() => requestAnimationFrame(() => setHeight('0px')));
        }
    }, [open]);

    return (
        <section id={id} className={`${bg} relative`}
            style={{ padding: open ? '4rem 0' : '0', transition: 'padding 420ms cubic-bezier(0.4,0,0.2,1)' }}
        >
            <div className="container-custom">
                {/* ── Premium Header Card ── */}
                <button
                    onClick={() => setOpen(o => !o)}
                    aria-expanded={open}
                    aria-controls={`${id}-body`}
                    className="w-full text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-2xl"
                    style={{ padding: open ? '0' : '1.75rem 0' }}
                >
                    <div
                        className={`
                            relative flex items-center gap-5 px-6 py-5 rounded-2xl
                            border transition-all duration-400
                            ${open
                                ? 'border-transparent bg-transparent px-0 py-0 rounded-none gap-4'
                                : 'border-white/8 bg-white/[0.025] hover:bg-white/[0.04] hover:border-white/15 hover:shadow-[0_0_30px_rgba(99,120,255,0.08)]'
                            }
                        `}
                    >
                        {/* Left accent bar — only visible when collapsed */}
                        {!open && (
                            <div
                                className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full opacity-70 group-hover:opacity-100 transition-opacity"
                                style={{ background: `linear-gradient(to bottom, ${accentColor}, ${accentColor}88)` }}
                            />
                        )}

                        {/* Section index badge */}
                        {index !== undefined && !open && (
                            <div
                                className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-[0.75rem] font-black font-mono border ml-2"
                                style={{
                                    color: accentColor,
                                    borderColor: `${accentColor}40`,
                                    background: `${accentColor}12`,
                                }}
                            >
                                {String(index).padStart(2, '0')}
                            </div>
                        )}

                        {/* Main text block */}
                        <div className="flex-1 min-w-0">
                            {/* Overline */}
                            {label && (
                                <p className={`font-mono text-[0.68rem] font-semibold tracking-[0.18em] uppercase mb-1.5 flex items-center gap-2 transition-all duration-300
                                    ${open ? 'text-primary-light mb-3' : 'text-white/40 group-hover:text-white/60'}`}
                                >
                                    {open && <span className="w-8 h-px bg-primary-light/50" />}
                                    {label}
                                </p>
                            )}

                            {/* Title row */}
                            <div className="flex flex-wrap items-center gap-3">
                                <h2 className={`font-extrabold text-white leading-tight transition-all duration-300
                                    ${open
                                        ? 'text-[clamp(1.8rem,4vw,2.8rem)] group-hover:text-white'
                                        : 'text-[clamp(1.25rem,3vw,1.7rem)] group-hover:text-white'
                                    }`}
                                >
                                    {title}
                                </h2>
                                {headerExtra && open && (
                                    <div onClick={e => e.stopPropagation()}>{headerExtra}</div>
                                )}
                            </div>

                            {/* Subtitle — visible when open, or meta pills when closed */}
                            {open && subtitle && (
                                <p className="text-white/50 text-sm max-w-[560px] leading-relaxed mt-3">
                                    {subtitle}
                                </p>
                            )}

                            {/* Meta pills — visible when collapsed */}
                            {!open && meta.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 mt-2">
                                    {meta.map((m, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-0.5 rounded-full text-[0.65rem] font-semibold font-mono border"
                                            style={{
                                                color: `${accentColor}CC`,
                                                borderColor: `${accentColor}30`,
                                                background: `${accentColor}0F`,
                                            }}
                                        >
                                            {m}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Right: toggle chevron */}
                        <div className={`
                            shrink-0 w-9 h-9 rounded-full border flex items-center justify-center
                            transition-all duration-300
                            ${open
                                ? 'border-white/15 bg-white/5 hover:border-primary/30 hover:bg-primary/10 ml-auto mt-1'
                                : 'border-white/10 bg-white/5 group-hover:border-primary/40 group-hover:bg-primary/10'
                            }
                        `}>
                            <ChevronDown
                                size={16}
                                className={`transition-all duration-300 ${open
                                    ? 'rotate-180 text-primary-light'
                                    : 'rotate-0 text-white/50 group-hover:text-primary-light'
                                    }`}
                            />
                        </div>
                    </div>

                    {/* Divider — only shown when open */}
                    {open && (
                        <div className="mt-6 h-px bg-gradient-to-r from-primary/30 via-primary/10 to-transparent" />
                    )}
                </button>

                {/* ── Collapsible Body ── */}
                <div
                    id={`${id}-body`}
                    ref={bodyRef}
                    style={{
                        height,
                        overflow: height === 'auto' ? 'visible' : 'hidden',
                        transition: 'height 420ms cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                >
                    <div className="pt-10">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}
