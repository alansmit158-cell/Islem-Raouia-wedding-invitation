import React from 'react';
import { Instagram, Youtube, Facebook, MessageCircle, Link as LinkIcon } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-[#E5E0D8] py-8 px-4 border-t border-[#4B5345]/20 flex flex-col items-center justify-center gap-4 relative z-10">
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-2">
                <div className="flex items-center gap-2">
                    <span className="text-[#4B5345] font-serif italic text-sm">Créé avec amour par</span>
                    <span className="text-[#2F3628] font-serif font-bold tracking-widest uppercase mt-0">Aura Digital</span>
                </div>
                <img src="/00.png" alt="Aura Digital Logo" className="h-12 w-auto object-contain opacity-90" />
            </div>

            <div className="flex gap-6 items-center">
                <a
                    href="https://www.instagram.com/aura_____digital/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4B5345] hover:text-[#2F3628] hover:scale-110 transition-all"
                    aria-label="Instagram"
                >
                    <Instagram className="w-5 h-5" />
                </a>

                <a
                    href="https://www.facebook.com/profile.php?id=61588511615603"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4B5345] hover:text-[#2F3628] hover:scale-110 transition-all"
                    aria-label="Facebook"
                >
                    <Facebook className="w-5 h-5" />
                </a>

                <a
                    href="https://www.youtube.com/@auradigital2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4B5345] hover:text-[#2F3628] hover:scale-110 transition-all"
                    aria-label="YouTube"
                >
                    <Youtube className="w-5 h-5" />
                </a>

                <a
                    href="https://api.whatsapp.com/send?phone=21629574856"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4B5345] hover:text-[#2F3628] hover:scale-110 transition-all"
                    aria-label="WhatsApp"
                >
                    <MessageCircle className="w-5 h-5" />
                </a>

                <a
                    href="https://linktr.ee/Aura_Digital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4B5345] hover:text-[#2F3628] hover:scale-110 transition-all"
                    aria-label="Linktree"
                >
                    <LinkIcon className="w-5 h-5" />
                </a>
            </div>

            <div className="text-[#4B5345]/60 text-xs font-sans mt-2">
                © {new Date().getFullYear()} Aura Digital. Tous droits réservés.
            </div>
        </footer>
    );
}
