'use client'

import { useState, useEffect } from 'react'
import { Shield, X, Settings } from 'lucide-react'

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem('azimut-cookies')
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500)
            return () => clearTimeout(timer)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem('azimut-cookies', 'all')
        setIsVisible(false)
    }

    const handleRefuse = () => {
        localStorage.setItem('azimut-cookies', 'refused')
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <div className="fixed bottom-8 left-4 right-4 md:left-auto md:right-8 md:max-w-md z-[100] animate-in slide-in-from-bottom-8 duration-500">
            <div className="bg-gray-900 text-white p-8 rounded-[2.5rem] shadow-2xl border border-white/10 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                    <Shield size={120} />
                </div>

                <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white">
                        <Shield size={24} />
                    </div>
                    <h4 className="text-xl font-black italic">Respect de la vie privée</h4>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                    Nous utilisons des cookies pour améliorer votre expérience, analyser notre trafic et vous proposer des contenus adaptés à vos passions ludiques.
                </p>

                <div className="flex flex-col gap-3 relative z-10">
                    <button
                        onClick={handleAccept}
                        className="w-full bg-white hover:bg-orange-500 text-gray-900 hover:text-white py-4 rounded-full font-black transition-all shadow-lg"
                    >
                        Accepter tout
                    </button>
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={handleRefuse}
                            className="bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white py-3 rounded-full text-sm font-bold transition-all border border-gray-700"
                        >
                            Refuser
                        </button>
                        <button className="bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white py-3 rounded-full text-sm font-bold transition-all border border-gray-700 flex items-center justify-center gap-2">
                            <Settings size={14} /> Paramétrer
                        </button>
                    </div>
                </div>

                <p className="text-[10px] text-gray-500 text-center relative z-10">
                    En cliquant, vous acceptez notre <a href="/politique-de-confidentialite" className="underline hover:text-white">politique de confidentialité</a>.
                </p>
            </div>
        </div>
    )
}
