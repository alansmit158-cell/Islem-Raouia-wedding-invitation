import React from 'react';
import { motion } from 'framer-motion';
import Hero from './Hero';
import Timeline from './Timeline';
import Location from './Location';
import DetailsSection from './DetailsSection';
import DressCode from './DressCode';
import ClosingMessage from './ClosingMessage';
import RsvpSection from './RsvpSection';
import Countdown from './Countdown';
import Footer from './Footer';

export default function Invitation({ weddingData, language }) {
    if (!weddingData) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen w-full bg-wedding-sand overflow-x-hidden pb-10"
        >
            <Hero weddingData={{ ...weddingData, language }} />

            <div className="relative z-10 -mt-20 bg-wedding-sand rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] pt-0 overflow-hidden">
                <Location weddingData={{ ...weddingData, language }} />

                <div className="py-12 bg-wedding-sand font-serif">
                    <Countdown targetDate={weddingData.date} language={language} />
                </div>

                <DetailsSection weddingData={weddingData} language={language} />

                <DressCode language={language} />

                <RsvpSection weddingData={weddingData} language={language} />

                <ClosingMessage language={language} />

                <Footer />
            </div>

        </motion.div>
    );
}
