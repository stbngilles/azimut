'use client'

import Image from 'next/image'
import { GAMES } from '@/lib/constants'
import { ShoppingCart, Info, Clock, Users, Target } from 'lucide-react'
import { useCart } from '@/lib/CartContext'

export default function GamesPage() {
    const { addToCart } = useCart()

    return (
        <div className="bg-parchment bg-topo min-h-screen">
            <div className="container mx-auto px-4 py-16 space-y-24">
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <h1 className="text-5xl font-black text-gray-900 italic">Nos Mondes à Explorer</h1>
                    <p className="text-xl text-gray-600 font-medium">
                        Chaque jeu est une porte ouverte vers une nouvelle aventure. Trouvez votre boussole.
                    </p>
                </div>

                <div className="space-y-32">
                    {GAMES.map((game, index) => (
                        <div
                            key={game.id}
                            id={game.slug}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                        >
                            {/* Image Section */}
                            <div className="flex-1 w-full">
                                <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                                    <Image
                                        src={game.image}
                                        alt={game.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="flex-1 space-y-8">
                                <div className="space-y-2">
                                    <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">{game.category}</span>
                                    <h2 className="text-4xl font-black text-gray-900">{game.title}</h2>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-bold text-gray-700">
                                        <Target size={18} className="text-indigo-600" /> {game.age}
                                    </div>
                                    <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-bold text-gray-700">
                                        <Users size={18} className="text-indigo-600" /> {game.players}
                                    </div>
                                    <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-bold text-gray-700">
                                        <Clock size={18} className="text-indigo-600" /> {game.duration}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-xl text-gray-900 font-bold leading-relaxed">
                                        {game.shortDescription}
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        {game.description}
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-xl space-y-4">
                                    <h4 className="font-bold text-indigo-900 italic">Contenu de l'exploration :</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {game.boxContent.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-indigo-700 text-sm font-medium">
                                                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex items-center justify-between gap-6 pt-4">
                                    <span className="text-3xl md:text-4xl font-black text-gray-900 italic whitespace-nowrap">{game.price}</span>
                                    <button
                                        onClick={() => addToCart(game)}
                                        className="flex-grow flex items-center justify-center gap-2 bg-indigo-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-black text-lg transition-all shadow-xl shadow-indigo-500/20 active:scale-95 group"
                                    >
                                        <ShoppingCart size={22} className="group-hover:rotate-12 transition-transform" /> Ajouter au pack
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
