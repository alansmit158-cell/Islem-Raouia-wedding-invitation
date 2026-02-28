import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Countdown from './Countdown';
import { Users, CheckCircle2 } from 'lucide-react';

const Section = ({ children, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`py-20 text-center px-4 w-full relative overflow-hidden ${className}`}
    >
        <div className="relative z-10">
            {children}
        </div>
    </motion.div>
);

export default function RsvpSection({ weddingData, language = 'fr' }) {
    const [guestCount, setGuestCount] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [confirmedCount, setConfirmedCount] = useState(weddingData?.confirmedGuests || 0);
    const maxGuests = weddingData?.maxGuests || 200;
    const remainingSeats = maxGuests - confirmedCount;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5005';
        try {
            const response = await fetch(`${API_URL}/api/weddings/${weddingData.id}/rsvp`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ guestCount }),
            });

            if (response.ok) {
                const data = await response.json();
                setConfirmedCount(data.confirmedGuests);
                setIsSubmitted(true);
            } else {
                const error = await response.json();
                alert(error.message || "Une erreur est survenue");
            }
        } catch (error) {
            console.error("RSVP Error:", error);
            alert("Impossible de se connecter au serveur");
        } finally {
            setIsSubmitting(false);
        }
    };

    const t = {
        fr: {
            title: "Confirmez votre présence",
            subtitle: "Nous avons hâte de célébrer avec vous !",
            seatsRemaining: "places restantes sur",
            invited: "personnes invitées",
            countLabel: "Nombre de personnes",
            button: "Confirmer ma présence",
            thankYou: "Merci ! Votre présence est confirmée.",
            countdownTitle: "Compte à rebours pour le grand jour"
        },
        it: {
            title: "Conferma la tua presenza",
            subtitle: "Non vediamo l'ora di festeggiare con voi!",
            seatsRemaining: "posti rimasti su",
            invited: "persone invitate",
            countLabel: "Numero di persone",
            button: "Conferma presenza",
            thankYou: "Grazie! La tua presenza è confermata.",
            countdownTitle: "Conto alla rovescia per il grande giorno"
        }
    };

    const content = t[language] || t.fr;

    return (
        <Section className="bg-wedding-gold text-white relative !pt-32">
            {/* Soft Blur Glow Transition */}
            <div className="absolute -top-12 left-0 right-0 h-24 bg-white blur-3xl opacity-40 pointer-events-none z-0" />

            <div className="max-w-2xl mx-auto">
                <div className="mb-12">
                    <Users className="w-12 h-12 mx-auto mb-6 opacity-80" />
                    <h2 className="text-4xl sm:text-5xl font-script mb-4">{content.title}</h2>
                    <p className="font-serif italic text-lg opacity-90">{content.subtitle}</p>
                </div>

                <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-md border border-white/20 shadow-xl">
                    <div className="mb-8">
                        <div className="text-5xl font-serif font-bold mb-2">
                            {remainingSeats > 0 ? remainingSeats : 0}
                        </div>
                        <p className="text-sm tracking-widest uppercase opacity-80">
                            {content.seatsRemaining} {maxGuests} {content.invited}
                        </p>
                    </div>

                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="flex flex-col items-center">
                                <label className="text-xs uppercase tracking-widest mb-3 opacity-70">
                                    {content.countLabel}
                                </label>
                                <div className="flex items-center gap-4">
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <button
                                            key={num}
                                            type="button"
                                            onClick={() => setGuestCount(num)}
                                            className={`w-10 h-10 rounded-full border transition-all flex items-center justify-center font-bold ${guestCount === num ? 'bg-white text-wedding-gold border-white scale-110' : 'border-white/30 text-white hover:border-white/60'}`}
                                        >
                                            {num}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={isSubmitting || remainingSeats <= 0}
                                className={`w-full py-4 rounded-full font-serif font-bold uppercase tracking-widest text-sm shadow-lg transition-all ${remainingSeats <= 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-wedding-cream text-[#4B5345] hover:bg-white'}`}
                            >
                                {isSubmitting ? "..." : content.button}
                            </motion.button>
                        </form>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="py-4 flex flex-col items-center gap-4"
                        >
                            <CheckCircle2 className="w-12 h-12 text-wedding-cream" />
                            <p className="font-serif text-xl">{content.thankYou}</p>
                        </motion.div>
                    )}
                </div>
            </div>
        </Section>
    );
}
