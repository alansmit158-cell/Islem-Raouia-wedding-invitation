import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- THEME 2 IMPORTS ---
import RibbonOpening from './components/theme2/RibbonOpening';
import Invitation from './components/theme2/Invitation';
import MusicPlayer from './components/theme2/MusicPlayer';
import './Theme2Index.css';
import './Theme2App.css';

const weddingData = {
  id: "raouia-islem",
  bride: "Raouia",
  groom: "Islem",
  date: "2026-05-03T17:00:00",
  formattedDate: {
    fr: "03 . Mai . 2026",
    it: "03 . Maggio . 2026"
  },
  welcomeLocation: {
    fr: "Hôtel Nour Palace Resort & Thalasso, Hiboun, Mahdia",
    it: "Hotel Nour Palace Resort & Thalasso, Hiboun, Mahdia"
  },
  mapLocationName: "Hôtel Nour Palace",

  mapIframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.6!2d11.03154!3d35.53681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13022376b4e69c4f%3A0x3b2f3e4d5c6a7b8e!2sH%C3%B4tel%20Nour%20Palace%20Resort%20%26%20Thalasso!5e0!3m2!1sfr!2stn!4v1741697000000!5m2!1sfr!2stn",
  mapLinkInfo: "https://maps.app.goo.gl/Lrb93w5yo4wadLJ28",
  theme: "theme2",
  timeline: [
    {
      time: "17h:00 - 19h:00",
      title: {
        fr: "🕊️Réception & Signature du contrat de mariage        ",
        it: "🕊️Ricevimento & Firma del contratto di matrimonio"
      },
      
      iconName: "Calendar"
    },
    {
      time: "21h:00 - 01h:00",
      title: {
        fr: "✨ Soirée Jeune",
        it: "✨ Serata Giovani"
      },
      description: {
        fr: " Soirée festive (réservée aux jeunes)",
        it: "In programma: Ottima cucina, Cocktail, risate e balli."
      },
      iconName: "Music"
    }
  ],
  maxGuests: 200,
  confirmedGuests: 0
};

function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [language, setLanguage] = useState('fr');
  const [liveWeddingData, setLiveWeddingData] = useState(weddingData);
  const API_URL = import.meta.env.VITE_API_URL || '';

  useEffect(() => {
    const fetchWeddingData = async () => {
      try {
        const response = await fetch(`${API_URL}/api/weddings/raouia-islem`);
        if (response.ok) {
          const data = await response.json();
          // Merge dynamic fields but protect the local timeline and location data
          setLiveWeddingData(prev => {
            const { timeline, welcomeLocation, mapIframeSrc, mapLinkInfo, mapLocationName, location, ...rest } = data;
            return { ...prev, ...rest };
          });
        }
      } catch (error) {
        console.warn("Could not fetch live wedding data, using defaults:", error);
      }
    };
    fetchWeddingData();
  }, []);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  const handleOpen = () => {
    setIsEnvelopeOpen(true);
    setIsPlaying(true);
  };

  return (
    <>
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-[100] flex gap-2">
        <button
          onClick={() => setLanguage('fr')}
          className={`px-3 py-1 rounded-full text-xs font-bold transition-all shadow-md ${language === 'fr' ? 'bg-[#4B5345] text-white scale-110 border-2 border-white' : 'bg-white/80 text-[#4B5345] hover:bg-white'}`}
        >
          FR
        </button>
        <button
          onClick={() => setLanguage('it')}
          className={`px-3 py-1 rounded-full text-xs font-bold transition-all shadow-md ${language === 'it' ? 'bg-[#4B5345] text-white scale-110 border-2 border-white' : 'bg-white/80 text-[#4B5345] hover:bg-white'}`}
        >
          IT
        </button>
      </div>

      <MusicPlayer phase={isPlaying ? 'main' : 'intro'} />

      {/* Invitation always rendered in background so video loads immediately */}
      <Invitation weddingData={liveWeddingData} language={language} />

      {/* Ribbon as a full-screen overlay on top - fades out when opened */}
      <AnimatePresence>
        {!isEnvelopeOpen && (
          <motion.div
            key="ribbon-overlay"
            className="fixed inset-0 z-50"
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <RibbonOpening
              wedding={{ ...liveWeddingData, language }}
              onOpen={handleOpen}
              onMusicStart={() => { if (!isPlaying) toggleMusic(); }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;

