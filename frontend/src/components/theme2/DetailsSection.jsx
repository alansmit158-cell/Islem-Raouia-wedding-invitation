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
                    <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-3xl">
                        🥂
                    </div>
                    <h3 className="text-3xl font-serif text-gray-800 mb-8">
                        {language === 'it' ? "🕊️ La Cerimonia & Il Ricevimento" : "🕊️  Cérémonie & Réception"}
                    </h3>

                    <div className="grid gap-8 text-left max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-wedding-gold/10">
                        {language === 'it' ? (
                            <div>
                                <p className="text-gray-600 leading-relaxed">
                                    Siamo lieti di invitarvi a celebrare la nostra unione.<br />
                                    La celebrazione del matrimonio e il ricevimento si terranno presso:<br />
                                    <strong>Mahdia Palace (Spazio all'aperto)<br /> Dalle 17h:00 alle 19h:00</strong>
                                </p>
                            </div>
                        ) : (
                            <div>
                                <p className="text-gray-600 leading-relaxed">
                                    C'est avec beaucoup d'émotion que nous vous convions à notre mariage.<br />
                                    Le contrat de mariage et la réception auront lieu à :<br />
                                    <strong>Mahdia Palace (Espace en plein air) <br />  De 17h00 à 19h00</strong>
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Night Party Section */}
                <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-3xl">
                        🎊
                    </div>
                    <h3 className="text-3xl font-serif text-gray-800 mb-8">
                        {language === 'it' ? "✨ Serata Giovani" : "✨ Soirée Jeune"}
                    </h3>

                    <div className="grid gap-8 text-left max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-wedding-gold/10">
                        {language === 'it' ? (
                            <div>
                                <p className="text-gray-600 leading-relaxed">
                                    Festeggiamo insieme ai giovani fino a tarda notte!<br />
                                    <strong>Dalle 21h:00 alle 01h:00</strong>
                                </p>
                            </div>
                        ) : (
                            <div>
                                <p className="text-gray-600 leading-relaxed">
                                    Soirée festive (réservée aux jeunes) !<br />
                                    <strong>De 21h00 à 01h00</strong>
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Section>
    );
}
