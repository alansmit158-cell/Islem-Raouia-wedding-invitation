import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        className="py-12 sm:py-20 text-center px-4 w-full"
    >
        {children}
    </motion.div>
);

const calculateTimeLeft = (targetDateStr) => {
    const targetDate = new Date(targetDateStr || "2026-05-03T17:00:00");
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
            heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            secondes: Math.floor((difference / 1000) % 60),
        };
    }
    return timeLeft;
};

export default function Countdown({ targetDate, language = 'fr' }) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const labels = {
        fr: { d: 'Jours', h: 'Heures', m: 'Minutes', s: 'Secondes' },
        it: { d: 'Giorni', h: 'Ore', m: 'Minuti', s: 'Secondi' }
    };

    const currentLabels = labels[language] || labels.fr;

    const timeUnits = [
        { label: currentLabels.d, value: timeLeft.jours },
        { label: currentLabels.h, value: timeLeft.heures },
        { label: currentLabels.m, value: timeLeft.minutes },
        { label: currentLabels.s, value: timeLeft.secondes },
    ];

    return (
        <div className="w-full text-center">
            <div className="max-w-4xl mx-auto border-y border-wedding-gold/20 py-8 sm:py-12 relative mt-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-inherit px-4 text-wedding-sage tracking-widest text-[10px] sm:text-xs uppercase whitespace-nowrap">
                    {language === 'it' ? 'Conto alla rovescia' : 'Le compte à rebours'}
                </div>
                <div className="grid grid-cols-4 gap-2 sm:gap-12 font-serif text-wedding-gold-dark">
                    {timeUnits.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <span className="text-2xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-wedding-gold-dark to-wedding-gold">
                                {item.value !== undefined ? item.value : '0'}
                            </span>
                            <span className="text-[9px] sm:text-xs uppercase tracking-widest text-gray-500 mt-1 sm:mt-2">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
