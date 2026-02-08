import React, { useState } from 'react';
import { MagneticButton } from '../components/MagneticButton';

export const About = () => {
    const [playingTrackId, setPlayingTrackId] = useState(null);

    const tracks = [
        { id: '146599801', albumId: '39929334', title: 'Renaissance', artist: 'EngraveInGrave', img: 'https://avatars.yandex.net/get-music-content/16508792/d1c19bb3.a.39929334-1/200x200', type: 'track' },
        { id: '147201962', albumId: '40203325', title: 'escapism', artist: 'bulletrain', img: 'https://avatars.yandex.net/get-music-content/18172800/7eb0a12d.a.40203325-1/200x200', type: 'track' },
        { id: '146445746', albumId: '39853625', title: 'СБД', artist: 'Future Fire', img: 'https://avatars.yandex.net/get-music-content/14854709/ae965628.a.39853625-1/200x200', type: 'track' },
        { id: '146151008', albumId: '39714590', title: 'ONE OF US', artist: 'GOTO TOTO, ENVM!', img: 'https://avatars.yandex.net/get-music-content/17649213/f2ed4320.a.39714590-1/200x200', type: 'track' },
        { id: '39714585', albumId: '39714585', title: 'Холод', artist: 'BLVCK CVRNVGE', img: 'https://avatars.yandex.net/get-music-content/16485602/4fca286d.a.39714585-1/200x200', type: 'album' },
        { id: '38908880', albumId: '38908880', title: 'With You', artist: 'BLOODSET, Khton', img: 'https://avatars.yandex.net/get-music-content/16508792/09d8770b.a.38908880-1/200x200', type: 'album' },
        { id: '39162231', albumId: '39162231', title: 'APOCALYPSE', artist: 'BLOODSET', img: 'https://avatars.yandex.net/get-music-content/17722696/10077a25.a.39162231-1/200x200', type: 'album' },
        { id: '39714576', albumId: '39714576', title: 'Levrette', artist: 'REFLECT AFTER DARK', img: 'https://avatars.yandex.net/get-music-content/16406615/27060201.a.39714576-1/200x200', type: 'album' }
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
                    max-width: 70%;
                }
                .about-player-container {
                    display: flex;
                    flex-direction: column;
                    height: 500px;
                }
                .widget-scroll {
                    width: 100%;
                    height: 100%;
                    overflow-y: auto;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    background: rgba(0, 0, 0, 0.2);
                    padding: 8px;
                    border-radius: 8px;
                }
                .widget-wrapper {
                    margin-bottom: 8px;
                    border-radius: 8px;
                    overflow: hidden;
                    background: #1a1a1a;
                    height: 80px;
                    display: flex;
                    transition: background 0.3s;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    cursor: pointer;
                }
                .widget-wrapper:hover {
                    background: #222;
                }
                .widget-wrapper:last-child {
                    margin-bottom: 0;
                }
                .track-preview {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    padding: 0 1rem;
                    box-sizing: border-box;
                    gap: 1rem;
                }
                .track-img {
                    width: 48px;
                    height: 48px;
                    object-fit: cover;
                    border-radius: 4px;
                }
                .track-info {
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                }
                .track-title {
                    font-family: var(--font-body);
                    font-size: 0.95rem;
                    font-weight: 600;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    color: #fff;
                }
                .track-artist {
                    font-size: 0.8rem;
                    opacity: 0.5;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    color: #fff;
                }
                .track-actions {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                .play-icon-circle {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    transition: background 0.3s;
                }
                .widget-wrapper:hover .play-icon-circle {
                    background: rgba(255, 255, 255, 0.2);
                }
                .heart-btn-minimal {
                    background: none;
                    border: none;
                    color: rgba(255, 255, 255, 0.3);
                    padding: 0;
                    display: flex;
                    align-items: center;
                }

                @media (max-width: 900px) {
                    .about-grid {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                    .about-text {
                        max-width: 100%;
                    }
                    .about-player-container {
                        height: 400px;
                    }
                }

                .widget-scroll::-webkit-scrollbar {
                    width: 4px;
                }
                .widget-scroll::-webkit-scrollbar-track {
                    background: transparent;
                }
                .widget-scroll::-webkit-scrollbar-thumb {
                    background: #333;
                    border-radius: 2px;
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

                <div className="about-player-container">
                    <div className="widget-scroll">
                        {tracks.map((track) => (
                            <div
                                key={track.id}
                                className="widget-wrapper"
                                onClick={() => setPlayingTrackId(track.id)}
                            >
                                {playingTrackId === track.id ? (
                                    <iframe
                                        frameBorder="0"
                                        style={{
                                            border: 'none',
                                            width: '100%',
                                            height: '80px',
                                            filter: 'grayscale(100%) brightness(0.6)'
                                        }}
                                        src={`https://music.yandex.ru/iframe/${track.type}/${track.type === 'track' ? `${track.id}/${track.albumId}` : track.id}?theme=black&auto_play=1`}
                                        title={track.title}
                                        allow="autoplay"
                                    />
                                ) : (
                                    <div className="track-preview">
                                        <img src={track.img} alt={track.title} className="track-img" />
                                        <div className="track-info">
                                            <span className="track-title">{track.title}</span>
                                            <span className="track-artist">{track.artist}</span>
                                        </div>
                                        <div className="track-actions">
                                            <MagneticButton
                                                variant="secondary"
                                                style={{
                                                    minWidth: 'auto',
                                                    padding: '0.4rem 1rem',
                                                    fontSize: '0.75rem',
                                                    borderRadius: '50px',
                                                }}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setPlayingTrackId(track.id);
                                                }}
                                            >
                                                СЛУШАТЬ
                                            </MagneticButton>
                                            <div className="heart-btn-minimal">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
