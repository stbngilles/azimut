'use client'

import { useState } from 'react'
import { MapPin, Calendar, Store, Gamepad2, Globe, Send, PlusCircle, ExternalLink } from 'lucide-react'

const LOCATIONS = [
    { name: "L'Antre du Joueur", address: "12 rue de la Paix, Paris", city: "Paris", type: "Boutique", link: "https://example.com", category: "buy" },
    { name: "Le Bar à Dés", address: "45 avenue des Jeux, Lyon", city: "Lyon", type: "Bar à Jeux", link: "https://example.com", category: "play" },
    { name: "Ludothèque Centrale", address: "Square des Enfants, Bordeaux", city: "Bordeaux", type: "Ludothèque", link: "https://example.com", category: "play" },
    { name: "Jeux & Passion", address: "8 bis rue du Commerce, Nantes", city: "Nantes", type: "Boutique", link: "https://example.com", category: "buy" },
]

const EVENTS = [
    { title: "Tournoi Galactic Strategy", date: "15 Février 2026", location: "L'Antre du Joueur, Paris", type: "Tournoi", link: "#" },
    { title: "Soirée Découverte Azimut", date: "22 Février 2026", location: "Le Bar à Dés, Lyon", type: "Démo", link: "#" },
    { title: "Festival Ludique de Printemps", date: "12 Mars 2026", location: "Palais des Congrès, Nantes", type: "Festival", link: "#" },
]

export default function VenuesPage() {
    const [filter, setFilter] = useState('all')
    const [requestType, setRequestType] = useState('venue')

    const filteredLocations = LOCATIONS.filter(loc =>
        filter === 'all' || loc.category === filter
    )

    return (
        <div className="pb-24">
            {/* Hero Section */}
            <section className="bg-orange-500 py-24 text-white">
                <div className="container mx-auto px-4 text-center space-y-8">
                    <h1 className="text-6xl font-black italic">Où nous <span className="underline decoration-indigo-600 underline-offset-8">trouver</span> ?</h1>
                    <p className="text-2xl text-orange-100 max-w-2xl mx-auto">
                        Explorez les lieux partenaires où vous pouvez acheter nos jeux ou simplement y disputer une partie endiablée !
                    </p>
                </div>
            </section>

            {/* Venues Listing */}
            <section className="container mx-auto px-4 py-24 space-y-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <h2 className="text-4xl font-black text-gray-900 italic">Nos Partenaires</h2>
                    <div className="flex bg-gray-100 p-1.5 rounded-full">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-8 py-3 rounded-full font-bold transition-all ${filter === 'all' ? 'bg-white text-indigo-600 shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            Tout
                        </button>
                        <button
                            onClick={() => setFilter('buy')}
                            className={`px-8 py-3 rounded-full font-bold transition-all ${filter === 'buy' ? 'bg-white text-indigo-600 shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            Acheter
                        </button>
                        <button
                            onClick={() => setFilter('play')}
                            className={`px-8 py-3 rounded-full font-bold transition-all ${filter === 'play' ? 'bg-white text-indigo-600 shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            Jouer
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredLocations.map((loc, i) => (
                        <div key={i} className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all group flex flex-col justify-between">
                            <div className="space-y-6">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${loc.category === 'buy' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                                    {loc.category === 'buy' ? <Store size={28} /> : <Gamepad2 size={28} />}
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-gray-900">{loc.name}</h3>
                                    <p className="text-gray-500 text-sm flex items-start gap-2">
                                        <MapPin size={16} className="text-indigo-400 mt-0.5" />
                                        {loc.address}
                                    </p>
                                </div>
                            </div>
                            <div className="pt-8 border-t border-gray-100 mt-8 flex justify-between items-center">
                                <span className="text-xs font-black uppercase tracking-wider text-gray-400">{loc.type}</span>
                                <a href={loc.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 rounded-2xl text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all">
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Events Roadmap */}
            <section className="bg-gray-900 py-24 text-white">
                <div className="container mx-auto px-4 space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl font-black italic">Agenda Ludique</h2>
                        <p className="text-gray-400 text-lg">Ne manquez aucun de nos prochains rendez-vous !</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {EVENTS.map((event, i) => (
                            <div key={i} className="bg-gray-800 p-10 rounded-[3rem] border border-gray-700 space-y-6 group hover:border-orange-500 transition-all">
                                <div className="flex justify-between items-start">
                                    <div className="bg-orange-500/20 text-orange-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-orange-500/30">
                                        {event.type}
                                    </div>
                                    <Calendar className="text-gray-600" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold group-hover:text-orange-400 transition-colors">{event.title}</h3>
                                    <p className="text-gray-400 font-medium">{event.date}</p>
                                </div>
                                <p className="text-gray-500 text-sm flex items-center gap-2">
                                    <MapPin size={16} /> {event.location}
                                </p>
                                <button className="w-full py-4 bg-gray-700 hover:bg-white hover:text-gray-900 rounded-full font-bold transition-all mt-4">
                                    En savoir plus
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Submission Form */}
            <section className="container mx-auto px-4 py-24">
                <div className="max-w-4xl mx-auto bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
                    <div className="bg-indigo-600 md:w-1/3 p-12 text-white space-y-8">
                        <h2 className="text-3xl font-black italic">Vous aussi ?</h2>
                        <p className="text-indigo-100 leading-relaxed font-medium">
                            Vous gérez un lieu ou organisez un événement et souhaitez être référencé sur notre site ?
                        </p>
                        <div className="space-y-6 pt-12">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/10 rounded-2xl"><PlusCircle size={24} /></div>
                                <span className="font-bold">Simple & Gratuit</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/10 rounded-2xl"><Globe size={24} /></div>
                                <span className="font-bold">Visibilité accrue</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 p-8 md:p-16 space-y-8">
                        <div className="flex gap-4 border-b border-gray-100 pb-4">
                            <button
                                onClick={() => setRequestType('venue')}
                                className={`font-bold transition-colors ${requestType === 'venue' ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' : 'text-gray-400'}`}
                            >
                                Référencer un lieu
                            </button>
                            <button
                                onClick={() => setRequestType('event')}
                                className={`font-bold transition-colors ${requestType === 'event' ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' : 'text-gray-400'}`}
                            >
                                Annoncer un événement
                            </button>
                        </div>

                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-700 ml-4">Nom du lieu / structure</label>
                                <input required type="text" className="w-full px-8 py-4 bg-gray-50 border-none rounded-full focus:ring-2 focus:ring-indigo-500 transition-all" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-gray-700 ml-4">Email de contact</label>
                                    <input required type="email" className="w-full px-8 py-4 bg-gray-50 border-none rounded-full focus:ring-2 focus:ring-indigo-500 transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-gray-700 ml-4">Téléphone (optionnel)</label>
                                    <input type="tel" className="w-full px-8 py-4 bg-gray-50 border-none rounded-full focus:ring-2 focus:ring-indigo-500 transition-all" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-700 ml-4">Adresse complète</label>
                                <input required type="text" className="w-full px-8 py-4 bg-gray-50 border-none rounded-full focus:ring-2 focus:ring-indigo-500 transition-all" />
                            </div>

                            {requestType === 'event' && (
                                <div className="space-y-2 animate-in fade-in slide-in-from-top-4">
                                    <label className="block text-sm font-bold text-gray-700 ml-4">Détails de l'événement (date, description, lien...)</label>
                                    <textarea required className="w-full px-8 py-4 bg-gray-50 border-none rounded-[2rem] focus:ring-2 focus:ring-indigo-500 transition-all h-32"></textarea>
                                </div>
                            )}

                            <div className="flex items-start gap-4 p-5 bg-indigo-50 rounded-[2rem] border border-indigo-100 italic">
                                <input required type="checkbox" id="rgpd-venues" className="mt-1.5 w-5 h-5 rounded text-indigo-600 focus:ring-indigo-500" />
                                <label htmlFor="rgpd-venues" className="text-xs text-indigo-900 leading-relaxed cursor-pointer">
                                    J’autorise l’utilisation de mes données pour être recontacté·e et éventuellement être affiché·e sur le site Azimut Games.
                                </label>
                            </div>

                            <button type="submit" className="w-full bg-indigo-600 hover:bg-orange-500 text-white font-black py-5 rounded-full text-xl transition-all shadow-xl shadow-indigo-500/20 flex items-center justify-center gap-3">
                                Envoyer ma demande <Send size={24} />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
