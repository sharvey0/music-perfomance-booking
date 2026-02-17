"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => setVisible(true), 100);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setVisible(false);
    };

    const refuseCookies = () => {
        localStorage.setItem("cookie-consent", "refused");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-md text-white p-6 border-t border-white/10 shadow-2xl z-50 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex-1 space-y-2">
                    <p className="text-sm leading-relaxed text-zinc-400">
                        Nous utilisons des cookies pour améliorer votre expérience et analyser la performance du site.
                        Vous pouvez accepter ou refuser les cookies non essentiels.
                    </p>
                    <Link
                        href="/politique-de-cookies"
                        className="inline-block text-xs text-zinc-500 hover:text-[var(--accent)] underline underline-offset-4 transition-colors uppercase tracking-widest"
                    >
                        En savoir plus sur notre politique de cookies
                    </Link>
                </div>

                <div className="flex shrink-0 gap-3 w-full md:w-auto">
                    <button
                        onClick={refuseCookies}
                        className="flex-1 md:flex-none px-6 py-2.5 border border-white/10 rounded-full hover:bg-white hover:text-black text-xs font-bold uppercase tracking-widest transition-all focus:outline-none focus:ring-2 focus:ring-zinc-500"
                        aria-label="Refuser les cookies non essentiels"
                    >
                        Refuser
                    </button>
                    <button
                        onClick={acceptCookies}
                        className="flex-1 md:flex-none px-6 py-2.5 bg-[var(--accent)] text-white rounded-full hover:brightness-110 text-xs font-bold uppercase tracking-widest transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                        aria-label="Accepter tous les cookies"
                    >
                        Accepter
                    </button>
                </div>
            </div>
        </div>
    );
}