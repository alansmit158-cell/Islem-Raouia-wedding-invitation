import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero({ weddingData }) {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Video autoplay was prevented:", error);
            });
        }
    }, []);
    // Définition de la langue pour plus de clarté
    const lang = weddingData?.language || 'fr';

    return (
        <div className="h-[100dvh] w-full relative flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">

            {/* Anti-Gravity Parallax Background */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <video
                    ref={videoRef}
                    src="/bg-wedding.mp4"
                    poster="/poster.webp"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover animate-fade-in scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10"></div>
                <div className="absolute inset-0 bg-black/5"></div>
            </div>

            <div className="z-10 relative flex flex-col items-center w-full max-w-lg">
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-[#4B5345] drop-shadow-sm tracking-[0.2em] text-2xl sm:text-3xl mb-6 font-serif uppercase"
                >
                    {lang === 'it' ? 'Ci sposiamo' : "Célébration de notre union"}
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-6xl sm:text-8xl font-script text-[#4B5345] mb-4 leading-tight flex flex-col items-center gap-4 py-4"
                >
                    <span>{weddingData?.bride}</span>
                    <img src="/alliances.png" alt="&" className="h-12 sm:h-20 object-contain opacity-60" />
                    <span>{weddingData?.groom}</span>
                </motion.h1>

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100px" }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-[1px] bg-white/80 mx-auto my-6 shadow-lg relative flex justify-center items-center"
                >
                    <div className="w-2 h-2 rotate-45 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </motion.div>

                <div className="flex flex-col gap-2">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-3xl sm:text-4xl font-serif text-white drop-shadow-md italic"
                    >
                        {typeof weddingData?.formattedDate === 'object' ? weddingData.formattedDate[lang] : weddingData?.formattedDate}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="text-sm sm:text-base font-serif text-white/90 tracking-[0.3em] uppercase drop-shadow-sm"
                    >
                        Mahdia Palace
                    </motion.p>
                </div>
            </div>

            {/* Section MODIFIÉE ici pour le multilingue */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 z-10 animate-bounce cursor-pointer flex flex-col items-center gap-2"
            >
                <span className="text-white text-xs tracking-widest uppercase drop-shadow-md">
                    {lang === 'it' ? 'SCOPRIRE' : 'DÉCOUVRIR'}
                </span>
                <div className="w-[1px] h-8 bg-white/50"></div>
            </motion.div>
        </div>
    );
}