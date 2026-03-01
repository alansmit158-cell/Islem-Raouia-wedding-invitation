import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function RibbonOpening({ onOpen, onMusicStart, wedding }) {
    const [isOpened, setIsOpened] = useState(false);

    const handleOpen = () => {
        // 1. Play Music immediately on user interaction (Click)
        if (onMusicStart) onMusicStart();

        // 2. Start Animation
        setIsOpened(true);

        // 3. Delay content switch to match the door animation
        setTimeout(() => {
            if (onOpen) onOpen();
        }, 4000);
    };

    return (
        <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="h-[100dvh] w-full relative overflow-hidden bg-[#E5E0D8] perspective-[2000px]"
        >

            {/* --- LEFT DOOR (Curtain) --- */}
            <motion.div
                className="absolute top-0 left-0 w-1/2 h-full z-10 overflow-hidden shadow-[10px_0_30px_rgba(0,0,0,0.15)]"
                style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }}
                initial={{ rotateY: 0, opacity: 1 }}
                animate={isOpened ? { rotateY: 110, opacity: 0 } : { rotateY: 0, opacity: 1 }}
                transition={{ duration: 4, ease: [0.25, 1, 0.35, 1] }}
            >
                {/* 200% width image aligned to left */}
                <img
                    src="/ribbon.png"
                    alt="Porte Gauche"
                    className="absolute top-0 left-0 w-[200%] max-w-[200%] h-full object-cover"
                />

                {/* Dynamic Lighting Overlay: Shadow accenting the pivot */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-black/80 pointer-events-none mix-blend-multiply"
                    initial={{ opacity: 0 }}
                    animate={isOpened ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 3.5, ease: "easeOut" }}
                />
            </motion.div>

            {/* --- RIGHT DOOR (Curtain) --- */}
            <motion.div
                className="absolute top-0 right-0 w-1/2 h-full z-10 overflow-hidden shadow-[-10px_0_30px_rgba(0,0,0,0.15)]"
                style={{ transformOrigin: "right center", transformStyle: "preserve-3d" }}
                initial={{ rotateY: 0, opacity: 1 }}
                animate={isOpened ? { rotateY: -110, opacity: 0 } : { rotateY: 0, opacity: 1 }}
                transition={{ duration: 4, ease: [0.25, 1, 0.35, 1] }}
            >
                {/* 200% width image aligned to right */}
                <img
                    src="/ribbon.png"
                    alt="Porte Droite"
                    className="absolute top-0 right-0 w-[200%] max-w-[200%] h-full object-cover"
                />

                {/* Dynamic Lighting Overlay: Shadow accenting the pivot */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/80 pointer-events-none mix-blend-multiply"
                    initial={{ opacity: 0 }}
                    animate={isOpened ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 3.5, ease: "easeOut" }}
                />
            </motion.div>

            {/* --- TRIGGER BUTTON (Invisible Knot) --- */}
            {!isOpened && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center">
                    <button
                        onClick={handleOpen}
                        className="w-32 h-32 rounded-full cursor-pointer outline-none tap-highlight-transparent relative flex items-center justify-center group"
                        aria-label="Ouvrir le ruban"
                    >
                        {/* Visual interaction ripple */}
                        <span className="absolute w-16 h-16 bg-white/30 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 opacity-0 group-hover:opacity-100 blur-md pointer-events-none"></span>
                    </button>

                    {/** Text Hint Animated */}
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
                        className="absolute top-[80px] text-white/90 font-serif italic text-sm tracking-widest whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] pointer-events-none"
                    >
                        {wedding?.language === 'it' ? 'Tocca per aprire' : 'Touchez pour ouvrir'}
                    </motion.span>
                </div>
            )}

        </motion.div>
    );
}
