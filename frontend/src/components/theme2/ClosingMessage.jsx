import React from 'react';
import { motion } from 'framer-motion';
import { Music } from 'lucide-react';

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
        fr: "on compte sur vous pour mettre le feu au dancefloor après la cérémonie.",
        it: "contiamo su di voi per infiammare la pista da ballo dopo la cerimonia."
    };

    const text = content[language] || content.fr;

    return (
        <Section className="bg-wedding-sand/50">
            <div className="max-w-xl mx-auto">
                <Music className="w-8 h-8 text-wedding-gold mx-auto mb-6 opacity-60" />
                <p className="font-serif italic text-2xl text-wedding-gold-dark leading-relaxed">
                    <strong>{language === 'it' ? "Alla fine:" : "À la fin :"}</strong><br />
                    {text}
                </p>
                <div className="mt-8 flex justify-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-wedding-gold/30" />
                    <span className="w-1 h-1 rounded-full bg-wedding-gold/30" />
                    <span className="w-1 h-1 rounded-full bg-wedding-gold/30" />
                </div>
            </div>
        </Section>
    );
}
