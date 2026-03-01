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
            <div className="max-w-3xl mx-auto space-y-16">
                {/* Content Section */}
                <div className="text-center">
                    <div className="grid gap-8 text-left max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-wedding-gold/10">
                        {language === 'it' ? (
                            <div>
                                <p className="text-gray-600 leading-relaxed">
                                    Siamo lieti di invitarvi a celebrare la nostra unione.<br />
                                    
                                </p>
                            </div>
                        ) : (
                            <div>
                                <p className="text-gray-600 leading-relaxed">
                                    C'est avec beaucoup d'émotion que nous vous convions à notre mariage.<br />

                                </p>
                            </div>
                        )}
                    </div>
                </div>
     

                    
                </div>
            </div>
        </Section>
    );
}
