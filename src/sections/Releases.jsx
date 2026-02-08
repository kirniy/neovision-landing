import React from 'react';
import { MagneticButton } from '../components/MagneticButton';

const releases = [
    {
        title: "Renaissance",
        artist: "EngraveInGrave",
        year: "2026",
        link: "https://music.yandex.com/album/39929334"
    },
    {
        title: "escapism",
        artist: "bulletrain",
        year: "2026",
        link: "https://music.yandex.com/album/40203325"
    },
    {
        title: "СЛУЖБА БЕЗОПАСНОСТИ ДАБСТЕПА",
        artist: "Future Fire",
        year: "2026",
        link: "https://music.yandex.com/album/39853625"
    },
    {
        title: "ONE OF US",
        artist: "GOTO TOTO, ENVM!",
        year: "2026",
        link: "https://music.yandex.com/album/39714590"
    },
    {
        title: "Холод",
        artist: "BLVCK CVRNVGE, angel vox",
        year: "2026",
        link: "https://music.yandex.com/album/39714585"
    },
    {
        title: "With You",
        artist: "BLOODSET, Khton",
        year: "2026",
        link: "https://music.yandex.com/album/38908880"
    },
    {
        title: "APOCALYPSE",
        artist: "BLOODSET, Evilwave",
        year: "2025",
        link: "https://music.yandex.com/album/39162231"
    },
    {
        title: "Levrette",
        artist: "REFLECT AFTER DARK",
        year: "2025",
        link: "https://music.yandex.com/album/39714576"
    }
];

export const ReleasesList = () => {
    return (
        <section className="container" id="releases" style={{ padding: '6rem 4vw' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
                <h2 style={{
                    fontSize: 'clamp(3rem, 5vw, 4rem)',
                    margin: 0,
                    fontFamily: 'var(--font-header)',
                    textTransform: 'uppercase',
                    letterSpacing: '-0.02em'
                }}>Релизы</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {releases.map((release, index) => (
                    <div
                        key={index}
                        className="release-item"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                            padding: '2rem 0',
                            borderBottom: '1px solid var(--color-border)',
                            position: 'relative'
                        }}
                    >
                        {/* Left Side: Title + Artist */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginRight: 'auto' }}>
                            <span style={{
                                fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                                fontWeight: '600',
                                fontFamily: 'var(--font-header)',
                                textTransform: 'uppercase',
                                lineHeight: 1,
                                letterSpacing: '-0.02em',
                                cursor: 'default'
                            }} className="release-title">
                                {release.title}
                            </span>
                            <span style={{
                                fontSize: '1rem',
                                color: 'var(--color-text-muted)',
                                fontFamily: 'var(--font-body)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                {release.artist}
                            </span>
                        </div>

                        {/* Right Side Group: Year + Button */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '3rem',
                            flexShrink: 0
                        }}>
                            {/* Hidden year on small screens if needed, otherwise visible */}
                            <span style={{
                                fontSize: '1.2rem',
                                fontFamily: 'var(--font-body)',
                                color: 'var(--color-text-muted)',
                                flexShrink: 0,
                                letterSpacing: '-0.02em'
                            }} className="release-year">
                                {release.year}
                            </span>

                            <div style={{ display: 'flex', gap: '0.8rem' }}>
                                <MagneticButton
                                    href={release.link}
                                    variant="secondary"
                                    style={{
                                        minWidth: 'auto',
                                        padding: '0.6rem 1.2rem',
                                        fontSize: '0.85rem',
                                        borderRadius: '50px',
                                        display: 'flex',
                                        gap: '0.4rem',
                                        alignItems: 'center'
                                    }}
                                >
                                    СЛУШАТЬ
                                </MagneticButton>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                .release-item {
                    transition: opacity 0.3s;
                }
                .release-item:hover {
                    opacity: 1;
                }
                .release-item:hover .release-title {
                     opacity: 1;
                }

                @media (max-width: 768px) {
                    .release-item {
                        flex-direction: column;
                        align-items: flex-start !important;
                        gap: 1.5rem !important;
                    }
                    .release-year {
                        display: none; /* optional: hide year on mobile to save space or move it */
                    }
                    div[style*="margin-right: auto"] {
                         width: 100%;
                         justify-content: flex-start;
                    }
                    div[style*="flex-shrink: 0"] {
                         width: 100%;
                         justify-content: flex-end; /* Align button to right or left? */
                         gap: 0 !important; 
                    }
                }
            `}</style>
        </section>
    );
};
