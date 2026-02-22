"use client";

import React, { useState, useRef, useEffect } from 'react'

interface ExperienceCardProps {
    company: string,
    position: string, 
    dates: string, 
    description: string[],
    linkCompany: string,
    img: string
}

export function ExperienceCard({ company, position, dates, description, linkCompany, img }: ExperienceCardProps) {
    const [open, setOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [maxHeight, setMaxHeight] = useState<string>('0px');
    
    useEffect(() => {
        const el = contentRef.current;
        if (!el) return;

        if (open) {
            // set to the scrollHeight to animate open
            setMaxHeight(`${el.scrollHeight}px`);
            // after the transition completes we set max-height to 'none' in onTransitionEnd
        } else {
            // closing: set to current height first so the transition can start, then collapse to 0
            const current = el.scrollHeight;
            setMaxHeight(`${current}px`);
            // trigger collapse on next tick to allow transition from explicit px to 0
            const t = setTimeout(() => setMaxHeight('0px'), 10);
            return () => clearTimeout(t);
        }
    }, [open]);

    return (
        <div className="group my-2 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border border-border-experience pt-4 pb-2 text-gray-700 sm:mx-auto bg-background-experience">
        <div className="order-2 col-span-1 mt-2 ml-14 text-left text-gray-600 sm:-order-1 sm:ml-4">
    <a href={linkCompany} target="_blank" rel="noopener noreferrer" className="group relative block h-16 w-16 overflow-hidden rounded-lg">
        <img src={img} alt={img} className="h-full w-full object-cover text-gray-700 rounded-full" />
    </a>
</div>

        
        <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4 pb-2">
            <div className="flex items-start justify-between">
                <div>
                    <a href={linkCompany} target="_blank" rel="noopener noreferrer" className="inline-block w-fit overflow-hidden text-text-button text-lg font-[Onest-Bold] sm:text-xl">{company}</a>
                    <h3 className="text-sm font-[Onest-Bold] text-text-subtitle mt-0">{position}</h3>
                </div>

                <div className="ml-4">
                    <button
                        type="button"
                        onClick={() => setOpen((s) => !s)}
                        aria-expanded={open}
                        className="rounded-md px-2 py-1 text-text-button hover:text-[--a-hover-color]"
                    >
                        <svg 
                            fill="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                        >
                            <path d="m2.43 4.8-2.43 2.422 12 11.978 12-11.978-2.43-2.422-9.57 9.547z"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="flex mt-2 flex-col space-y-3 text-sm text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                <div className="mr-auto rounded-full bg-background-date px-2 py-0.5 text-date-color">{dates}</div>
            </div>

            <div
                ref={contentRef}
                style={{
                    maxHeight: maxHeight,
                    transition: 'max-height 300ms ease, opacity 200ms ease',
                    overflow: 'hidden',
                    opacity: open ? 1 : 0,
                }}
                aria-hidden={!open}
                className="mt-2"
                onTransitionEnd={(e) => {
                    // If we've just finished expanding, allow natural height for future content changes
                    if ((e as React.TransitionEvent<HTMLDivElement>).propertyName === 'max-height' && open) {
                        setMaxHeight('none');
                    }
                }}
            >
                {description.map((element, key) => {
                    const parts: React.ReactNode[] = [];
                const boldRegex = /\*\*(.*?)\*\*/g;
                const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; // capture label inside [] and URL inside ()
                let lastIndex = 0;
                let match: RegExpExecArray | null;
                let boldIdx = 0;

                const processLinks = (text: string) => {
                    const nodes: React.ReactNode[] = [];
                    let llast = 0;
                    let li = 0;
                    let lm: RegExpExecArray | null;
                    while ((lm = linkRegex.exec(text)) !== null) {
                        if (lm.index > llast) {
                            nodes.push(text.slice(llast, lm.index));
                        }
                        const label = lm[1];
                        const url = lm[2];
                        nodes.push(
                            <a
                                key={`link-${key}-${li++}`}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-button underline"
                            >
                                {label}
                            </a>
                        );
                        llast = linkRegex.lastIndex;
                    }
                    if (llast < text.length) {
                        nodes.push(text.slice(llast));
                    }
                    linkRegex.lastIndex = 0;
                    return nodes;
                };

                while ((match = boldRegex.exec(element)) !== null) {
                    if (match.index > lastIndex) {
                        const plainSegment = element.slice(lastIndex, match.index);
                        parts.push(...processLinks(plainSegment));
                    }
                    parts.push(
                        <strong key={`b-${key}-${boldIdx++}`} className="font-bold">
                            {match[1]}
                        </strong>
                    );
                    lastIndex = boldRegex.lastIndex;
                }

                if (lastIndex < element.length) {
                    parts.push(...processLinks(element.slice(lastIndex)));
                }

                boldRegex.lastIndex = 0;

                    return (
                        <p key={key} className="overflow-hidden pr-7 text-sm text-text-subtitle mb-0 mt-2">
                            {parts}
                        </p>
                    );
                })}
            </div>
        </div>
    </div>
  )
}