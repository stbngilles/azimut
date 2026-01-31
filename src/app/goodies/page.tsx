'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ShoppingBag, Star, ShieldCheck, Truck } from 'lucide-react'
import { useCart } from '@/lib/CartContext'

const GOODIES = [
    {
        id: 'g1',
        title: 'T-Shirt Azimut "Forest"',
        price: '24,90 €',
        description: 'Le t-shirt officiel en coton bio, couleur vert sapin profond.',
        image: '/goodies/goodies-tshirt.png',
        category: 'Vêtements'
    },
    {
        id: 'g2',
        title: 'Casquette Explorateur',
        price: '19,90 €',
        description: 'Casquette vintage avec broderie boussole Azimut.',
        image: '/goodies/goodies-cap.png',
        category: 'Accessoires'
    },
    {
        id: 'g3',
        title: 'Hoodie "Bivouac" Sable',
        price: '49,90 €',
        description: 'Sweat à capuche ultra-confort pour vos soirées jeu au coin du feu.',
        image: '/goodies/goodies-hoodie.png',
        category: 'Vêtements'
    }
]

export default function GoodiesPage() {
    const { addToCart } = useCart()

    return (
        <div className="bg-parchment bg-topo min-h-screen pb-24">
            {/* Hero Goodies */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[#132a24]">
                    <Image
                        src="/goodies/hoodie-foret.jpg"
                        alt="Azimut Style"
                        fill
                        className="object-cover opacity-30 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#132a24]"></div>
                </div>
                <div className="relative z-10 text-center px-4 space-y-6">
                    <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter">
                        L'ÉQUIPEMENT <br />
                        <span className="text-orange-500 underline decoration-white/20">DE L'AVENTURE</span>
                    </h1>
                    <p className="text-xl text-indigo-100 max-w-xl mx-auto font-medium">
                        Affirmez votre style Azimut avec notre collection de vêtements et accessoires conçus pour l'exploration.
                    </p>
                </div>
            </section>

            {/* Grid Goodies */}
            <section className="container mx-auto px-4 -mt-24 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {GOODIES.map((item) => (
                        <div key={item.id} className="group bg-white rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 flex flex-col">
                            <div className="relative h-80 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl font-black text-indigo-600 shadow-lg italic">
                                    {item.price}
                                </div>
                            </div>
                            <div className="p-10 space-y-6 flex-grow flex flex-col">
                                <div className="space-y-2">
                                    <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">{item.category}</span>
                                    <h3 className="text-3xl font-black text-gray-900 leading-tight italic">{item.title}</h3>
                                </div>
                                <p className="text-gray-600 font-medium flex-grow leading-relaxed">{item.description}</p>
                                <button
                                    onClick={() => addToCart({ ...item, slug: item.id } as any)}
                                    className="w-full flex items-center justify-center gap-3 bg-indigo-600 hover:bg-orange-500 text-white py-5 rounded-full font-black text-lg transition-all shadow-xl shadow-indigo-500/10 group active:scale-95"
                                >
                                    <ShoppingBag size={22} className="group-hover:rotate-12 transition-transform" />
                                    Ajouter au Pack
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Reassurance */}
            <section className="container mx-auto px-4 mt-24">
                <div className="bg-white/80 backdrop-blur-md rounded-[3rem] p-12 lg:p-16 border border-white/50 grid grid-cols-1 md:grid-cols-3 gap-12 text-center shadow-xl">
                    <div className="space-y-4">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Truck size={32} />
                        </div>
                        <h4 className="text-xl font-black italic">Livraison Suivie</h4>
                        <p className="text-gray-500 font-medium">Expédié sous 48h partout dans le monde de l'aventure.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <ShieldCheck size={32} />
                        </div>
                        <h4 className="text-xl font-black italic">Qualité Azimut</h4>
                        <p className="text-gray-500 font-medium">Matériaux durables et confortables testés en bivouac.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Star size={32} />
                        </div>
                        <h4 className="text-xl font-black italic">Club Explorateur</h4>
                        <p className="text-gray-500 font-medium">Gagnez des points sur vos achats de goodies.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
