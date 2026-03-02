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
               {/* Clé de sol réaliste et proportionnée */}
{/* Section de l'icône Clé de Sol corrigée selon l'analyse technique */}
<svg 
    viewBox="0 0 50 100" 
    fill="none" 
    stroke="#B5A68A" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="h-24 w-auto opacity-90 mb-8"
>
    {/* Premier segment : Boucle supérieure enserrant la 2e ligne */}
    <path d="M25,5 C34,20 40,40 24,60 C20,75 30,90 25,95" />
    
    {/* Cercle final aligné sur l'extrémité du trait vertical */}
    <circle cx="25" cy="95" r="3" fill="#B5A68A" />
</svg>
            
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
