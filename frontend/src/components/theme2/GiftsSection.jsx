import React from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

export default function GiftsSection({ weddingData }) {
    return (
        <div className="py-24 px-4 bg-white text-gray-800 text-center relative overflow-hidden">
            <div className="gradient-blur-top"></div>
            <div className="gradient-blur-bottom"></div>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto"
            >
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                    <Gift className="w-8 h-8 text-[#4B5345]" />
                </div>
                <h3 className="text-4xl font-script mb-6 text-[#2F3628]">Cadeaux</h3>
                <p className="font-serif text-lg leading-relaxed mb-8">
                    Votre présence est notre plus beau cadeau. <br />
                    Si vous souhaitez tout de même nous offrir une attention, vous pouvez le faire via le lien suivant ou notre compte bancaire.
                </p>

                <div className="inline-block p-6 border border-[#4B5345]/30 rounded-lg bg-white/40 backdrop-blur-sm">
                    <p className="font-mono text-sm sm:text-base tracking-widest mb-2 text-gray-600">IBAN: FR76 0000 0000 0000 0000</p>
                    <p className="text-xs uppercase tracking-widest opacity-70">Titulaire: {weddingData?.bride || 'Raouia'} & {weddingData?.groom || 'Islem'}</p>
                    <p className="font-script text-2xl mt-4 text-[#2F3628]">{weddingData?.bride || 'Raouia'} & {weddingData?.groom || 'Islem'}</p>
                </div>
            </motion.div>
        </div>
    );
}
