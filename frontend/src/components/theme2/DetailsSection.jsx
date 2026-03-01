import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`py-12 sm:py-20 px-4 w-full ${className}`}
    >
        {children}
    </motion.div>
);

export default function DetailsSection({ weddingData, language = 'fr' }) {
    return (
        <Section className="bg-wedding-sand">
            <div className="max-w-3xl mx-auto">
                {/* Content Section - Script Font Luxe */}
                <div className="text-center px-4">
                    {language === 'it' ? (
                        <p className="text-gray-700 font-script text-4xl sm:text-5xl leading-relaxed tracking-wide">
                            Siamo lieti di invitarvi <br className="hidden sm:block" /> a celebrare la nostra unione.
                        </p>
                    ) : (
                        <p className="text-gray-700 font-script text-4xl sm:text-5xl leading-relaxed tracking-wide">
                            C'est avec beaucoup d'émotion <br className="hidden sm:block" /> que nous vous convions à notre mariage.
                        </p>
                    )}
                </div>
            </div>
        </Section>
    );
}