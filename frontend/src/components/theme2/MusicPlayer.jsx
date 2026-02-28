import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer({ phase }) {
    const audioRef = useRef(null);
    const [muted, setMuted] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (phase === 'main') {
            audio.play().catch(err => console.log("Playback prevented:", err));
        }
    }, [phase]);

    const toggleMute = () => {
        const newMuted = !muted;
        setMuted(newMuted);
        if (audioRef.current) audioRef.current.muted = newMuted;
    };

    return (
        <>
            <audio
                ref={audioRef}
                loop
                preload="none"
                onError={(e) => console.warn("Audio file failed to load.", e)}
            >
                <source src="/maher-zain.mp3" type="audio/mpeg" />
            </audio>

            <button
                onClick={toggleMute}
                className="fixed top-4 right-4 z-50 bg-white/70 backdrop-blur-md p-3 rounded-full shadow-lg border border-[#4B5345] hover:bg-white transition-all animate-fade-in cursor-pointer"
            >
                {muted ? <VolumeX className="text-[#2F3628] w-6 h-6" /> : <Volume2 className="text-[#2F3628] w-6 h-6" />}
            </button>
        </>
    );
}
