'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/lib/CartContext'
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react'

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart()

    if (cart.length === 0) {
        return (
            <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center space-y-8 text-center">
                <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center text-6xl">
                    🛒
                </div>
                <h1 className="text-4xl font-black text-gray-900 italic">Votre panier est vide</h1>
                <p className="text-xl text-gray-600 max-w-md">
                    Il semblerait que vous n'ayez pas encore craqué pour l'un de nos jeux...
                </p>
                <Link
                    href="/jeux"
                    className="bg-indigo-600 hover:bg-orange-500 text-white px-10 py-5 rounded-full font-black text-xl transition-all shadow-xl shadow-indigo-500/20"
                >
                    Découvrir nos jeux
                </Link>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="space-y-2">
                        <h1 className="text-5xl font-black text-gray-900 italic">Mon Panier</h1>
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">
                            {totalItems} {totalItems > 1 ? 'articles' : 'article'} sélectionnés
                        </p>
                    </div>
                    <Link href="/jeux" className="flex items-center gap-2 text-indigo-600 font-bold hover:underline">
                        <ArrowLeft size={20} /> Continuer mes achats
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Items List */}
                    <div className="lg:col-span-2 space-y-6">
                        {cart.map((item) => (
                            <div key={item.id} className="bg-white rounded-[2.5rem] p-6 md:p-8 border border-gray-100 shadow-xl flex flex-col md:flex-row items-center gap-8 group">
                                <div className="relative w-32 h-32 rounded-2xl overflow-hidden shadow-lg border-4 border-gray-50 flex-shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex-grow space-y-2 text-center md:text-left">
                                    <h3 className="text-2xl font-black text-gray-900">{item.title}</h3>
                                    <p className="text-indigo-600 font-bold">{item.category}</p>
                                </div>

                                <div className="flex items-center gap-6">
                                    {/* Quantity controls */}
                                    <div className="bg-gray-50 rounded-full flex items-center p-1 border border-gray-100">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-indigo-600 transition-all"
                                        >
                                            <Minus size={18} />
                                        </button>
                                        <span className="w-12 text-center font-black text-lg">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-indigo-600 transition-all"
                                        >
                                            <Plus size={18} />
                                        </button>
                                    </div>

                                    <div className="text-right min-w-[100px]">
                                        <p className="font-black text-2xl text-gray-900">{item.price}</p>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-400 hover:text-red-600 p-2 transition-colors mt-1"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary Block */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-900 rounded-[3rem] p-10 text-white space-y-8 sticky top-32">
                            <h2 className="text-3xl font-black italic">Récapitulatif</h2>

                            <div className="space-y-4 border-b border-white/10 pb-8 italic">
                                <div className="flex justify-between text-gray-400">
                                    <span>Sous-total</span>
                                    <span>{totalPrice.toFixed(2).replace('.', ',')} €</span>
                                </div>
                                <div className="flex justify-between text-gray-400">
                                    <span>Livraison</span>
                                    <span className="text-green-400 font-bold">OFFERTE</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-end">
                                <span className="text-xl font-bold italic">Total TTC</span>
                                <span className="text-4xl font-black text-orange-400">{totalPrice.toFixed(2).replace('.', ',')} €</span>
                            </div>

                            <Link
                                href="/checkout"
                                className="w-full bg-white hover:bg-orange-500 text-gray-900 hover:text-white px-8 py-5 rounded-full font-black text-xl transition-all flex items-center justify-center gap-3 shadow-2xl shadow-white/10 group"
                            >
                                Commander <ShoppingBag size={24} className="group-hover:scale-110 transition-transform" />
                            </Link>

                            <div className="space-y-4 pt-4">
                                <p className="text-xs text-center text-gray-500">
                                    Paiement sécurisé via Stripe & PayPal.<br />
                                    Aucune coordonnée bancaire n'est stockée.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
