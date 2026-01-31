import Image from 'next/image'
import { Target, Lightbulb, Users } from 'lucide-react'

export default function AboutPage() {
    return (
        <div className="pb-24">
            {/* Hero Section */}
            <section className="bg-indigo-50 py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center space-y-8 relative z-10">
                    <h1 className="text-6xl font-black italic text-gray-900">Notre <span className="text-indigo-600">Histoire</span></h1>
                    <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Azimut Games est né d'une passion commune pour le jeu et d'une envie simple : créer des passerelles entre les mondes, les gens et les générations.
                    </p>
                </div>
                <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-200 rounded-full blur-[100px] opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
            </section>

            {/* Vision & Values */}
            <section className="container mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 space-y-6 transform hover:-translate-y-2 transition-transform">
                    <div className="w-16 h-16 bg-red-100 text-red-600 rounded-3xl flex items-center justify-center">
                        <Target size={32} />
                    </div>
                    <h3 className="text-2xl font-black italic">Notre Mission</h3>
                    <p className="text-gray-600 leading-relaxed font-medium">
                        Concevoir des jeux qui ne sont pas seulement des produits, mais des expériences mémorables et immersives.
                    </p>
                </div>
                <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 space-y-6 transform hover:-translate-y-2 transition-transform">
                    <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-3xl flex items-center justify-center">
                        <Lightbulb size={32} />
                    </div>
                    <h3 className="text-2xl font-black italic">Notre Vision</h3>
                    <p className="text-gray-600 leading-relaxed font-medium">
                        Devenir l'aiguille de votre boussole ludique, vous guidant vers de nouveaux horizons de divertissement.
                    </p>
                </div>
                <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 space-y-6 transform hover:-translate-y-2 transition-transform">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-3xl flex items-center justify-center">
                        <Users size={32} />
                    </div>
                    <h3 className="text-2xl font-black italic">Nos Valeurs</h3>
                    <p className="text-gray-600 leading-relaxed font-medium">
                        Partage, fun, et professionnalisme. Nous mettons tout notre cœur dans chaque détail, de la règle au packaging.
                    </p>
                </div>
            </section>

            {/* Team Section */}
            <section className="container mx-auto px-4 py-24 space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-black italic text-gray-900">L'Équipe Azimut</h2>
                    <p className="text-xl text-gray-600">Ceux qui tirent les ficelles (et lancent les dés).</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {[
                        { name: "Marc Dupond", role: "Fondateur & Créateur", emoji: "🧭" },
                        { name: "Julie Martin", role: "Directrice Artistique", emoji: "🎨" },
                        { name: "Samir K.", role: "Game Designer", emoji: "🎲" },
                        { name: "Léa Morel", role: "Responsable Communauté", emoji: "✨" },
                    ].map((member, i) => (
                        <div key={i} className="group flex flex-col items-center space-y-6">
                            <div className="relative w-48 h-48 bg-gray-100 rounded-full flex items-center justify-center text-7xl shadow-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 overflow-hidden">
                                <div className="absolute inset-0 bg-indigo-600 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
                                <span className="relative z-10">{member.emoji}</span>
                            </div>
                            <div className="text-center space-y-1">
                                <h4 className="text-2xl font-black text-gray-900 italic">{member.name}</h4>
                                <p className="text-indigo-600 font-bold">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
