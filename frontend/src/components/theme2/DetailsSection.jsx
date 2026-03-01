import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Shirt, HelpCircle } from 'lucide-react';

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

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-wedding-gold/20 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 flex items-center justify-between text-left gap-4 group"
            >
                <span className="font-serif text-lg text-gray-700 group-hover:text-wedding-gold-dark transition-colors">{question}</span>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-wedding-gold" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-4 text-gray-500 font-light leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

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
                                <h4 className="font-script text-3xl text-wedding-gold-dark mb-4">Italiano</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Siamo lieti di invitarvi a celebrare la nostra unione.<br /><br />
                                    La celebrazione del matrimonio e il ricevimento si terranno presso:<br />
                                    <strong>Mahdia Palace (Spazio all'aperto) Dalle 17:00 alle 19:00</strong>
                                </p>
                            </div>
                        ) : (
                            <div>
                                <h4 className="font-script text-3xl text-wedding-gold-dark mb-4">Français</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Nous avons L'honneur de vous inviter à célébrer notre union.<br /><br />
                                    Le contrat de mariage et la réception auront lieu à :<br />
                                    <strong>Mahdia Palace (Espace plein air) De 17h00 à 19h00</strong>
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
                                <h4 className="font-script text-3xl text-wedding-gold-dark mb-4">Italiano</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Festeggiamo insieme ai giovani fino a tarda notte!<br /><br />
                                    <strong>De 21:00 a 01:00</strong>
                                </p>
                            </div>
                        ) : (
                            <div>
                                <h4 className="font-script text-3xl text-wedding-gold-dark mb-4">Français</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    On fait la fête avec les jeunes jusqu'au bout de la nuit !<br /><br />
                                    <strong>De 21h00 à 01h00</strong>
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* FAQ Section */}
                <div>
                    <div className="text-center mb-10">
                        <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                            <HelpCircle className="w-8 h-8 text-wedding-gold" />
                        </div>
                        <h3 className="text-3xl font-serif text-gray-800 mb-8">
                            {language === 'it' ? "Domande Frequenti" : "Questions fréquentes"}
                        </h3>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-wedding-gold/10 p-6 sm:p-8">
                        <FaqItem
                            question={language === 'it' ? "I bambini sono invitati?" : "Les enfants sont-ils invités ?"}
                            answer={language === 'it' ? "Cari genitori, considerate il nostro matrimonio come una mini-vacanze per voi. Vi offriamo una giornata senza 'Mammaaaa, Papaaaaa!'" : "Chers parents, considérez notre mariage comme des mini-vacances pour vous. Une journée sans \"Mamaaaan, Papaaaaa!\" vous est offerte !"}
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
}
