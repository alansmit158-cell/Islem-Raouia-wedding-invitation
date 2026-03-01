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
    fr: "Mahdia Palace, Zone Touristique, Mahdia",
    it: "Mahdia Palace, Zona Turistica, Mahdia"
  },

  mapIframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.256265008595!2d11.027299576405327!3d35.53953013778844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130223009bc03b6b%3A0x1fe5fe325a938940!2sMahdia%20Palace%20Thalasso!5e0!3m2!1sfr!2stn!4v1740691000000!5m2!1sfr!2stn",
  mapLinkInfo: "https://maps.app.goo.gl/xsKBTKf5zyZkd3aP9",
  theme: "theme2",
  timeline: [
    {
      time: "17h:00 - 19h:00",
      title: {
        fr: "Réception & Signature du contrat de mariage" < br /> "(Espace en plein air)",
        it: "Ricevimento & Firma del contratto di matrimonio"
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
  ]
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
          // Merge dynamic fields but protect the local timeline
          setLiveWeddingData(prev => {
            const { timeline, ...rest } = data;
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
      <AnimatePresence>
        {!isEnvelopeOpen ? (
          <RibbonOpening
            key="ribbon"
            wedding={{ ...liveWeddingData, language }}
            onOpen={() => {
              setIsEnvelopeOpen(true);
              handleOpen();
            }}
            onMusicStart={() => {
              if (!isPlaying) toggleMusic();
            }}
          />
        ) : (
          <Invitation key="invitation" weddingData={liveWeddingData} language={language} />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
