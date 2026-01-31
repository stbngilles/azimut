'use client'

import { useState } from 'react'
import { useCart } from '@/lib/CartContext'
import { ShieldCheck, Truck, CreditCard, Send, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function CheckoutPage() {
    const { cart, totalPrice, clearCart } = useCart()
    const [isOrdered, setIsOrdered] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Simulate API call
        setTimeout(() => {
            setIsOrdered(true)
            clearCart()
            window.scrollTo(0, 0)
        }, 1500)
    }

    if (isOrdered) {
        return (
            <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center space-y-8 text-center">
                <div className="w-32 h-32 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={80} />
                </div>
                <h1 className="text-5xl font-black text-gray-900 italic">Commande Confirmée !</h1>
                <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                    Merci pour votre confiance. Un email de confirmation a été envoyé à votre adresse. Préparez-vous à jouer ! 🧭
                </p>
                <Link
                    href="/"
                    className="bg-indigo-600 hover:bg-orange-500 text-white px-10 py-5 rounded-full font-black text-xl transition-all shadow-xl shadow-indigo-500/20"
                >
                    Retour à l'accueil
                </Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return (
            <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center space-y-8 text-center border-t">
                <h1 className="text-4xl font-black text-gray-900 italic">Rien à payer ici !</h1>
                <Link href="/jeux" className="text-indigo-600 font-bold hover:underline">Voir les jeux</Link>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Form Section */}
                <div className="space-y-12">
                    <div className="space-y-2">
                        <h1 className="text-5xl font-black text-gray-900 italic">Finaliser ma commande</h1>
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-sm italic">Étape unique - Livraison & Paiement</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-12">
                        {/* Identity & Contact */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-black italic flex items-center gap-3">
                                <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-lg">1</div>
                                Coordonnées
                            </h3>
                            <div className="grid grid-cols-2 gap-6">
                                <input required type="text" placeholder="Prénom" className="w-full px-8 py-4 bg-gray-50 border-none rounded-full focus:ring-2 focus:ring-indigo-500 transition-all font-medium" />
                                <input required type="text" placeholder="Nom" className="w-full px-8 py-4 bg-gray-50 border-none rounded-full focus:ring-2 focus:ring-indigo-500 transition-all font-medium" />
                            </div>
                            <input required type="email" placeholder="Email de contact" className="w-full px-8 py-4 bg-gray-50 border-none rounded-full focus:ring-2 focus:ring-indigo-500 transition-all font-medium" />
                        </div>

                        {/* Shipping */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-black italic flex items-center gap-3">
                                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-lg">2</div>
                                Livraison
                            </h3>
                            <input required type="text" placeholder="Adresse complète" className="w-full px-8 py-4 bg-gray-50 border-none rounded-full focus:ring-2 focus:ring-indigo-500 transition-all font-medium" />
                            <div className="grid grid-cols-2 gap-6">
                                <input required type="text" placeholder="Code Postal" className="w-full px-8 py-4 bg-gray-50 border-none rounded-full focus:ring-2 focus:ring-indigo-500 transition-all font-medium" />
                                <input required type="text" placeholder="Ville" className="w-full px-8 py-4 bg-gray-50 border-none rounded-full focus:ring-2 focus:ring-indigo-500 transition-all font-medium" />
                            </div>
                            <input required type="text" placeholder="Pays" className="w-full px-8 py-4 bg-gray-50 border-none rounded-full focus:ring-2 focus:ring-indigo-500 transition-all font-medium" defaultValue="France" />

                            <div className="bg-green-50 p-6 rounded-[2rem] border border-green-100 flex items-center justify-between group">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-sm"><Truck size={24} /></div>
                                    <div>
                                        <p className="font-bold text-green-900">Standard Domicile</p>
                                        <p className="text-sm text-green-700">Livraison en 3-5 jours ouvrés</p>
                                    </div>
                                </div>
                                <span className="font-black text-green-600">OFFERT</span>
                            </div>
                        </div>

                        {/* Payment (Simulated) */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-black italic flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-lg">3</div>
                                Paiement
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <button type="button" className="p-6 border-2 border-indigo-600 bg-indigo-50 rounded-[2rem] flex flex-col items-center gap-3 transition-all">
                                    <CreditCard size={32} className="text-indigo-600" />
                                    <span className="font-bold text-indigo-900">Carte Bancaire</span>
                                </button>
                                <button type="button" className="p-6 border-2 border-gray-100 hover:border-indigo-200 rounded-[2rem] flex flex-col items-center gap-3 transition-all grayscale hover:grayscale-0">
                                    <div className="text-3xl">🧩</div>
                                    <span className="font-bold text-gray-500">PayPal</span>
                                </button>
                            </div>
                            <div className="space-y-4">
                                <input required type="text" placeholder="Numéro de carte (SIMULATION)" className="w-full px-8 py-4 bg-gray-50 border-none rounded-full focus:ring-2 focus:ring-indigo-500 transition-all font-mono" />
                                <div className="grid grid-cols-2 gap-6">
                                    <input required type="text" placeholder="MM / YY" className="w-full px-8 py-4 bg-gray-50 border-none rounded-full focus:ring-2 focus:ring-indigo-500 transition-all font-mono" />
                                    <input required type="text" placeholder="CVC" className="w-full px-8 py-4 bg-gray-50 border-none rounded-full focus:ring-2 focus:ring-indigo-500 transition-all font-mono" />
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-indigo-600 hover:bg-orange-500 text-white font-black py-6 rounded-full text-2xl transition-all shadow-xl shadow-indigo-500/20 flex items-center justify-center gap-3 group italic">
                            Payer {totalPrice.toFixed(2).replace('.', ',')} € <Send size={28} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                </div>

                {/* Order Summary Summary */}
                <div className="lg:block">
                    <div className="bg-gray-50 rounded-[4rem] p-10 md:p-16 border border-gray-100 space-y-10 sticky top-32">
                        <h2 className="text-3xl font-black italic text-gray-900 border-b border-gray-200 pb-6">Votre Commande</h2>

                        <div className="space-y-6 max-h-[400px] overflow-y-auto pr-4 scrollbar-hide">
                            {cart.map((item) => (
                                <div key={item.id} className="flex items-center gap-6 group">
                                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                                        <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold w-6 h-6 rounded-bl-xl flex items-center justify-center">
                                            x{item.quantity}
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="font-black text-lg text-gray-900">{item.title}</h4>
                                        <p className="text-gray-500 text-sm italic">{item.category}</p>
                                    </div>
                                    <p className="font-black text-gray-900 whitespace-nowrap">{item.price}</p>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4 border-t border-gray-200 pt-10">
                            <div className="flex justify-between items-end">
                                <span className="text-xl font-bold italic text-gray-600">Total à régler</span>
                                <span className="text-4xl font-black text-indigo-600">{totalPrice.toFixed(2).replace('.', ',')} €</span>
                            </div>
                        </div>

                        <div className="pt-8 grid grid-cols-2 gap-4 border-t border-gray-200 mt-8">
                            <div className="flex items-center gap-2 text-xs text-gray-500 font-bold italic uppercase"><ShieldCheck className="text-green-500" size={16} /> Sécurisé SSL</div>
                            <div className="flex items-center gap-2 text-xs text-gray-500 font-bold italic uppercase"><CheckCircle2 className="text-green-500" size={16} /> RGPD Compliant</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
