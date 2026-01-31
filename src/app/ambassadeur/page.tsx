import { Users, Sparkles, Trophy, Heart, Send, CheckCircle2 } from 'lucide-react'

export default function AmbassadorPage() {
    return (
        <div className="pb-24">
            {/* Hero / Role Explanation */}
            <section className="bg-indigo-900 py-24 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-800 -skew-x-12 translate-x-1/2 opacity-30"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-bold border border-indigo-500/30">
                                <Users size={16} /> Programme Ambassadeur
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black leading-tight italic">
                                Portez la flamme <span className="text-orange-400">Azimut</span>
                            </h1>
                            <p className="text-xl text-indigo-200 leading-relaxed max-w-xl">
                                Devenir ambassadeur Azimut Games, c'est rejoindre une communauté de passionnés qui croient au pouvoir du jeu pour rassembler les gens.
                            </p>
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold flex items-center gap-3">Votre rôle :</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Animer des soirées jeux et des démonstrations",
                                        "Représenter la marque lors de festivals et salons",
                                        "Partager vos parties sur les réseaux sociaux",
                                        "Faire découvrir nos nouveautés en avant-première"
                                    ].map((role, i) => (
                                        <li key={i} className="flex items-center gap-3 text-indigo-100">
                                            <CheckCircle2 size={20} className="text-orange-400 flex-shrink-0" />
                                            {role}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Advantages Box */}
                        <div className="bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border border-white/20 space-y-8">
                            <h2 className="text-3xl font-black text-white italic">Vos Avantages</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { icon: <Sparkles className="text-yellow-400" />, title: "Jeux offerts", desc: "Recevez nos derniers titres gratuitement." },
                                    { icon: <Trophy className="text-orange-400" />, title: "Exclusivités", desc: "Accès prioritaire aux bêtas et prototypes." },
                                    { icon: <Users className="text-blue-400" />, title: "Communauté", desc: "Échangez avec les créateurs et d'autres passionnés." },
                                    { icon: <Heart className="text-red-400" />, title: "Visibilité", desc: "Mise en avant sur nos réseaux officiels." }
                                ].map((adv, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4">{adv.icon}</div>
                                        <h4 className="font-bold text-lg">{adv.title}</h4>
                                        <p className="text-indigo-200 text-sm">{adv.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recruitment Form */}
            <section className="container mx-auto px-4 py-24">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl font-black text-gray-900">Postulez maintenant</h2>
                        <p className="text-lg text-gray-600">Dites-nous qui vous êtes et pourquoi l'aventure Azimut vous tente !</p>
                    </div>

                    <div className="bg-white rounded-[4rem] p-8 md:p-16 shadow-2xl border border-gray-100">
                        <form className="space-y-8">
                            {/* Identity */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-gray-700 ml-4">Prénom</label>
                                    <input required type="text" className="w-full px-8 py-5 bg-gray-50 border-none rounded-full focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="Votre prénom" />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-gray-700 ml-4">Nom</label>
                                    <input required type="text" className="w-full px-8 py-5 bg-gray-50 border-none rounded-full focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="Votre nom" />
                                </div>
                            </div>

                            {/* Contact & Location */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-gray-700 ml-4">Email</label>
                                    <input required type="email" className="w-full px-8 py-5 bg-gray-50 border-none rounded-full focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="votre@email.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-gray-700 ml-4">Ville / Pays</label>
                                    <input required type="text" className="w-full px-8 py-5 bg-gray-50 border-none rounded-full focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="Ex: Paris, France" />
                                </div>
                            </div>

                            {/* Network */}
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-700 ml-4">Type de lieu / réseau (si applicable)</label>
                                <input type="text" className="w-full px-8 py-5 bg-gray-50 border-none rounded-full focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="Ex: Bar à jeux, association, chaîne YouTube..." />
                            </div>

                            {/* Experience */}
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-700 ml-4">Expérience dans le jeu ou l’animation</label>
                                <textarea required className="w-full px-8 py-5 bg-gray-50 border-none rounded-[2.5rem] focus:ring-2 focus:ring-indigo-500 transition-all h-40" placeholder="Décrivez votre parcours ludique..."></textarea>
                            </div>

                            {/* Motivations */}
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-700 ml-4">Disponibilités / Motivations</label>
                                <textarea required className="w-full px-8 py-5 bg-gray-50 border-none rounded-[2.5rem] focus:ring-2 focus:ring-indigo-500 transition-all h-40" placeholder="Pourquoi souhaitez-vous devenir ambassadeur ?"></textarea>
                            </div>

                            {/* Consent RGPD */}
                            <div className="flex items-start gap-4 p-6 bg-indigo-50 rounded-3xl border border-indigo-100">
                                <input required type="checkbox" id="rgpd" className="mt-1.5 w-5 h-5 rounded text-indigo-600 focus:ring-indigo-500" />
                                <label htmlFor="rgpd" className="text-sm text-indigo-900 leading-relaxed cursor-pointer">
                                    J’accepte que mes données soient utilisées pour être recontacté·e dans le cadre du programme ambassadeur conformément à la politique de confidentialité.
                                </label>
                            </div>

                            <button type="submit" className="w-full bg-indigo-600 hover:bg-orange-500 text-white font-black py-4 md:py-6 rounded-full text-lg md:text-2xl transition-all shadow-xl shadow-indigo-500/20 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 group">
                                <span className="whitespace-nowrap">Envoyer ma candidature</span>
                                <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
