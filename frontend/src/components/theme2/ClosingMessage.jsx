import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`py-16 px-4 w-full text-center ${className}`}
    >
        {children}
    </motion.div>
);

export default function ClosingMessage({ language = 'fr' }) {
    const content = {
        fr: {
            label: "MOT DE FIN",
            message: "Préparez-vous à célébrer l’amour, la joie et la fête !",
            note: "Célébration réservée aux adultes."
        },
        it: {
            label: "MESSAGGIO DI CHIUSURA",
            message: "Preparatevi a celebrare l'amore, la gioia e la festa!",
            note: "Celebrazione riservata agli adulti."
        }
    };

    const { label, message, note } = content[language] || content.fr;

    return (
        <Section className="bg-white">
            <div className="max-w-xl mx-auto flex flex-col items-center">
              <div className="mb-8 mx-auto flex justify-center">
    <svg 
        viewBox="0 0 50 100" 
        fill="none" 
        stroke="#B5A68A" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        style={{ height: '80px', width: 'auto', opacity: 0.8 }}
    >
        <path d="M30 85 C30 95, 18 95, 18 85 C18 75, 30 70, 30 55 C30 25, 10 30, 10 50 C10 65, 25 70, 35 60 C45 45, 25 5, 25 5 L25 90" />
        <circle cx="22" cy="92" r="2.5" fill="#B5A68A" />
    </svg>
</div>
            
                <div className="bg-white px-6 py-1 rounded-full mb-8 shadow-sm">
                    <span className="text-[10px] font-serif tracking-[0.3em] font-bold text-[#4B5345]">
                        {label}
                    </span>
                </div>

                <p className="font-serif text-2xl sm:text-3xl text-[#2F3628] leading-tight mb-4 px-4 font-bold">
                    {message}
                </p>

                {/* Decorative line matching the pink scribble-like style if possible, or a simple decorative element */}
                <div className="h-[2px] w-16 bg-pink-400/30 rounded-full mb-4 -rotate-1"></div>

                <p className="font-serif text-sm text-[#4B5345] mb-6 font-medium italic">
                    {note}
                </p>

                <p className="font-script text-4xl sm:text-5xl text-[#2F3628] mb-12">
                    Raouia & Islem
                </p>

                <div className="flex justify-center gap-2 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-wedding-gold/20" />
                    <span className="w-1.5 h-1.5 rounded-full bg-wedding-gold/20" />
                    <span className="w-1.5 h-1.5 rounded-full bg-wedding-gold/20" />
                </div>
            </div>
        </Section>
    );
}
