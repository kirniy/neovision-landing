import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const About = () => {
    const [activeTrackId, setActiveTrackId] = useState(null);

    const tracks = [
        { id: '146599801', albumId: '39929334', title: 'Renaissance', artist: 'EngraveInGrave', link: 'https://music.yandex.ru/album/39929334', img: 'https://avatars.yandex.net/get-music-content/16508792/d1c19bb3.a.39929334-1/200x200', type: 'track' },
        { id: '147201962', albumId: '40203325', title: 'escapism', artist: 'bulletrain', link: 'https://music.yandex.ru/album/40203325', img: 'https://avatars.yandex.net/get-music-content/18172800/7eb0a12d.a.40203325-1/200x200', type: 'track' },
        { id: '146445746', albumId: '39853625', title: 'СБД', artist: 'Future Fire', link: 'https://music.yandex.ru/album/39853625', img: 'https://avatars.yandex.net/get-music-content/14854709/ae965628.a.39853625-1/200x200', type: 'track' },
        { id: '146151008', albumId: '39714590', title: 'ONE OF US', artist: 'GOTO TOTO, ENVM!', link: 'https://music.yandex.ru/album/39714590', img: 'https://avatars.yandex.net/get-music-content/17649213/f2ed4320.a.39714590-1/200x200', type: 'track' },
        { id: '39714585', albumId: '39714585', title: 'Холод', artist: 'BLVCK CVRNVGE', link: 'https://music.yandex.ru/album/39714585', img: 'https://avatars.yandex.net/get-music-content/16485602/4fca286d.a.39714585-1/200x200', type: 'album' },
        { id: '38908880', albumId: '38908880', title: 'With You', artist: 'BLOODSET, Khton', link: 'https://music.yandex.ru/album/38908880', img: 'https://avatars.yandex.net/get-music-content/16508792/09d8770b.a.38908880-1/200x200', type: 'album' },
        { id: '39162231', albumId: '39162231', title: 'APOCALYPSE', artist: 'BLOODSET', link: 'https://music.yandex.ru/album/39162231', img: 'https://avatars.yandex.net/get-music-content/17722696/10077a25.a.39162231-1/200x200', type: 'album' },
        { id: '39714576', albumId: '39714576', title: 'Levrette', artist: 'REFLECT AFTER DARK', link: 'https://music.yandex.ru/album/39714576', img: 'https://avatars.yandex.net/get-music-content/16406615/27060201.a.39714576-1/200x200', type: 'album' }
    ];

    return (
        <section id="about" className="container" style={{ padding: '6rem 4vw', position: 'relative' }}>
            <style>{`
                .about-grid {
                    display: grid;
                    grid-template-columns: minmax(300px, 2fr) 1fr;
                    gap: 4rem;
                    align-items: start;
                }
                .about-text {
                    max-width: 70%; /* Reduces width to ~2/3 of the column */
                }
                @media (max-width: 900px) {
                    .about-grid {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                    .about-text {
                        max-width: 100%; /* Full width on mobile */
                    }
                    .about-player-container {
                        align-items: flex-start !important;
                        width: 100%;
                    }
                }
                .player-arrow:hover {
                    opacity: 0.7;
                }
            `}</style>
            <div className="about-grid">
                <div className="about-text">
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '2rem' }}>О нас</h2>
                    <p style={{ fontSize: '1.5rem', opacity: 0.9, marginBottom: '1.5rem' }}>
                        NeoVision — творческое объединение артистов, продвигающих тёмное звучание электронной музыки.
                    </p>
                    <p style={{ fontSize: '1.25rem', opacity: 0.7, lineHeight: 1.6 }}>
                        Изначально существующий с&nbsp;2020 года как фестиваль, NeoVision перерос в&nbsp;музыкальный лейбл и&nbsp;промо-команду. Все участники имеют уникальный звук и&nbsp;собственное, новое видение Российской электроники.
                    </p>
                </div>

                {/* Custom Widget Implementation */}
                <div className="about-player-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', height: '100%' }}>
                    <div style={{
                        width: '100%',
                        height: '320px', // Visible area for ~3-4 items
                        border: '1px solid #333', // Outer container border
                        overflowY: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '1rem', // Inner padding
                        gap: '0.8rem',
                        boxSizing: 'border-box'
                    }} className="widget-scroll">
                        {tracks.map((track) => (
                            <div key={track.id} style={{ width: '100%' }}>
                                {/* Track Card - visible when not playing */}
                                <div
                                    className="widget-item"
                                    style={{
                                        display: activeTrackId === track.id ? 'none' : 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        padding: '0.8rem',
                                        border: '1px solid #333',
                                        background: 'transparent',
                                        transition: 'all 0.3s ease',
                                        height: '80px',
                                        boxSizing: 'border-box'
                                    }}
                                >
                                    {/* Cover Image */}
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        flexShrink: 0,
                                        filter: 'grayscale(100%)',
                                        backgroundImage: `url(${track.img})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        border: '1px solid #222'
                                    }} />

                                    {/* Info */}
                                    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, overflow: 'hidden' }}>
                                        <span style={{
                                            color: '#fff',
                                            fontFamily: 'var(--font-header)',
                                            fontSize: '1rem',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            textTransform: 'uppercase'
                                        }}>{track.title}</span>
                                        <span style={{
                                            color: '#666',
                                            fontFamily: 'var(--font-body)',
                                            fontSize: '0.8rem',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}>{track.artist}</span>
                                    </div>

                                    {/* Action Buttons */}
                                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                        {/* Play Button */}
                                        <div
                                            style={{
                                                width: '30px',
                                                height: '30px',
                                                borderRadius: '50%',
                                                border: '1px solid #444',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '#fff',
                                                opacity: 0.7,
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease'
                                            }}
                                            className="widget-play-btn"
                                            onClick={() => setActiveTrackId(track.id)}
                                        >
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                            </svg>
                                        </div>

                                        {/* Favorite Button */}
                                        <a
                                            href={track.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                width: '30px',
                                                height: '30px',
                                                borderRadius: '50%',
                                                border: '1px solid #444',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '#fff',
                                                opacity: 0.7,
                                                cursor: 'pointer',
                                                textDecoration: 'none',
                                                transition: 'all 0.3s ease'
                                            }}
                                            className="widget-fav-btn"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                {/* Iframe Player - always rendered but hidden when not active */}
                                <div style={{
                                    display: activeTrackId === track.id ? 'block' : 'none',
                                    width: '100%',
                                    height: '80px',
                                    minHeight: '80px',
                                    maxHeight: '80px',
                                    flexShrink: 0,
                                    overflow: 'hidden',
                                    border: '1px solid #333',
                                    background: 'transparent',
                                    position: 'relative',
                                    boxSizing: 'border-box'
                                }}>
                                    <iframe
                                        key={track.id}
                                        frameBorder="0"
                                        allow="clipboard-write; autoplay; encrypted-media"
                                        style={{
                                            border: 'none',
                                            width: '100%',
                                            height: '135px',
                                            marginTop: '-10px',
                                            flexShrink: 0,
                                            filter: 'grayscale(100%)',
                                            display: 'block',
                                            borderRadius: '0px'
                                        }}
                                        src={`https://music.yandex.ru/iframe/${track.type}/${track.type === 'track' ? `${track.id}/${track.albumId}` : track.albumId}?theme=light&auto=1&cover=hide`}
                                        title={track.title}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <style>{`
                        /* Custom Scrollbar */
                        .widget-scroll::-webkit-scrollbar {
                            width: 2px; /* Very thin */
                        }
                        .widget-scroll::-webkit-scrollbar-track {
                            background: transparent;
                        }
                        .widget-scroll::-webkit-scrollbar-thumb {
                            background: #333; /* Dark grey thumb */
                        }
                        
                        .widget-item:hover {
                            border-color: #666 !important;
                            background: rgba(255,255,255,0.03) !important;
                        }
                        .widget-play-btn:hover,
                        .widget-fav-btn:hover {
                            border-color: #fff !important;
                            opacity: 1 !important;
                        }
                    `}</style>
                </div>
            </div>
        </section>
    );
};
