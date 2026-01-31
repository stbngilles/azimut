import { Mail, Send, Instagram, Facebook, Twitter, MessageSquare } from 'lucide-react'

export default function ContactPage() {
    return (
        <div className="pb-24">
            <section className="container mx-auto px-4 py-24 space-y-16">
                <div className="text-center space-y-6 max-w-3xl mx-auto">
                    <h1 className="text-6xl font-black italic text-gray-900">On reste en <span className="text-orange-500">Contact</span> ?</h1>
                    <p className="text-xl text-gray-600 leading-relaxed font-medium">
                        Une question sur un jeu ? Une envie de partenariat ? Ou juste envie de nous dire bonjour ? Notre équipe vous répondra sous <span className="text-indigo-600 font-bold italic">48h maximum</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Details */}
                    <div className="space-y-12">
                        <div className="bg-indigo-900 p-12 rounded-[3rem] text-white space-y-8 relative overflow-hidden">
                            <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-500 opacity-20 filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
                            <h3 className="text-3xl font-black italic">Nos coordonnées</h3>
                            <div className="space-y-6 italic">
                                <a href="mailto:contact@azimut.com" className="flex items-center gap-4 group hover:bg-white/5 p-4 -mx-4 rounded-2xl transition-colors">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform flex-shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-indigo-300 text-sm font-bold uppercase tracking-widest">Email</p>
                                        <p className="text-xl font-bold truncate">contact@azimut.com</p>
                                    </div>
                                </a>
                                <div className="flex items-center gap-4 pt-6">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400">
                                        <MessageSquare size={24} />
                                    </div>
                                    <div>
                                        <p className="text-indigo-300 text-sm font-bold uppercase tracking-widest">Suivez-nous</p>
                                        <div className="flex gap-4 mt-2">
                                            <a href="#" className="hover:text-orange-400 transition-colors"><Instagram size={28} /></a>
                                            <a href="#" className="hover:text-orange-400 transition-colors"><Facebook size={28} /></a>
                                            <a href="#" className="hover:text-orange-400 transition-colors"><Twitter size={28} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-orange-50 p-12 rounded-[3rem] border border-orange-100 flex items-center gap-8 group">
                            <div className="text-5xl group-hover:scale-110 transition-transform">🧭</div>
                            <div className="space-y-2">
                                <h4 className="text-2xl font-black italic text-gray-900">Le saviez-vous ?</h4>
                                <p className="text-gray-600 leading-relaxed italic">
                                    Azimut signifie "direction" en arabe. On espère que nos jeux vous guideront vers de bons moments !
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gray-100">
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-700 ml-4 italic">Votre Nom</label>
                                <input required type="text" className="w-full px-8 py-4 bg-gray-50 border-none rounded-full focus:ring-2 focus:ring-indigo-500 transition-all font-medium" placeholder="Ex: Jean Martin" />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-700 ml-4 italic">Votre Email</label>
                                <input required type="email" className="w-full px-8 py-4 bg-gray-50 border-none rounded-full focus:ring-2 focus:ring-indigo-500 transition-all font-medium" placeholder="jean@exemple.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-700 ml-4 italic">Votre Message</label>
                                <textarea required className="w-full px-8 py-4 bg-gray-50 border-none rounded-[2rem] focus:ring-2 focus:ring-indigo-500 transition-all h-40 font-medium" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                            </div>
                            <div className="flex items-start gap-4 p-5 bg-indigo-50 rounded-[2rem] border border-indigo-100">
                                <input required type="checkbox" id="rgpd-contact" className="mt-1.5 w-5 h-5 rounded text-indigo-600 focus:ring-indigo-500" />
                                <label htmlFor="rgpd-contact" className="text-xs text-indigo-900 italic font-medium cursor-pointer">
                                    J’accepte que mes données soient utilisées pour répondre à ma demande conformément à la politique de confidentialité.
                                </label>
                            </div>
                            <button type="submit" className="w-full bg-indigo-600 hover:bg-orange-500 text-white font-black py-5 rounded-full text-xl transition-all shadow-xl shadow-indigo-500/20 flex items-center justify-center gap-3 italic">
                                Envoyer le message <Send size={24} />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
