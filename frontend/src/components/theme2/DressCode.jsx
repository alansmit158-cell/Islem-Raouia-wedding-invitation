import React from 'react';
import { motion } from 'framer-motion';
import { Shirt } from 'lucide-react';

const Section = ({ children, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`py-20 px-4 w-full text-center ${className}`}
    >
        {children}
    </motion.div>
);

export default function DressCode({ language = 'fr' }) {
    const content = {
        fr: {
            title: "Dress Code",
            text: "Apportez votre plus beau sourire , et votre bonne énergie . VENEZ COMME VOUS ÊTES. MAIS EN PLUS CHIC"
        },
        it: {
            title: "Codice di Abbigliamento",
            text: "Portate il vostro sorriso più bello , e la vostra buona energia . VENITE COME SIETE. MA PIÙ ELEGANTI"
        }
    };

    const { title, text } = content[language] || content.fr;

    return (
        <Section className="bg-white relative !pt-32">
            {/* Soft Transition from Sand Timeline above */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-wedding-sand to-transparent pointer-events-none z-0" />
            <div className="max-w-2xl mx-auto">
                <div className="w-16 h-16 mx-auto bg-wedding-sand rounded-full flex items-center justify-center shadow-sm mb-6">
                    <Shirt className="w-8 h-8 text-wedding-gold" />
                </div>

                <h2 className="text-4xl sm:text-5xl font-script text-wedding-gold-dark mb-6">
                    {title}
                </h2>

                <div className="p-8 rounded-2xl border border-wedding-gold/10 bg-wedding-cream/30 relative">
                    <p className="font-serif italic text-xl text-gray-700 leading-relaxed">
                        "{text}"
                    </p>

                    {/* Decorative bits */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-wedding-gold/20" />
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-wedding-gold/20" />
                </div>
            </div>
        </Section>
    );
}

