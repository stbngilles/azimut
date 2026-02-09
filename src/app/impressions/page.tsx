'use client'

import { useState } from 'react'
import { Send, MessageCircle } from 'lucide-react'
import { useI18n } from '@/lib/I18nContext'

export default function ImpressionsPage() {
    const { t } = useI18n()
    const ti = t.impressions

    const [formData, setFormData] = useState({
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [hasSubmitted, setHasSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        setHasSubmitted(true)
        setFormData({ email: '', message: '' })
    }

    return (
        <div className="pb-24 space-y-24">
            <section className="relative h-[60vh] bg-gradient-to-br from-indigo-900 via-slate-900 to-orange-900/40 flex items-center justify-center overflow-hidden">
                {/* 1. Hero Section - Solid Orange Background */}

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-orange-200 text-sm font-bold uppercase tracking-widest animate-pulse">
                        <MessageCircle size={16} className="text-orange-400" /> {ti.badge}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
                        {ti.title} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-indigo-400">{ti.titleSuffix}</span>
                    </h1>
                    <p className="text-xl text-indigo-100/90 font-medium max-w-2xl mx-auto leading-relaxed">
                        {ti.subtitle}
                    </p>
                </div>
            </section>

            {/* 2. Submission Form Only */}
            <section className="container mx-auto px-4 max-w-3xl relative">
                <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-2xl relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute -top-12 -right-12 w-40 h-40 bg-indigo-100 rounded-full opacity-50 blur-2xl"></div>
                    <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-orange-100 rounded-full opacity-50 blur-2xl"></div>

                    <div className="relative z-10 text-center space-y-4 mb-10">
                        <h2 className="text-3xl font-black italic text-gray-900">{ti.formTitle}</h2>
                        <p className="text-gray-600 font-medium">
                            {ti.formSubtitle}
                        </p>
                    </div>

                    {hasSubmitted ? (
                        <div className="bg-gray-50 rounded-[2rem] p-12 text-center space-y-6 animate-fade-in border border-gray-100">
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                                <Send size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-gray-900">{ti.successTitle}</h3>
                            <p className="text-gray-600">{ti.successMessage}</p>
                            <button
                                onClick={() => setHasSubmitted(false)}
                                className="text-indigo-600 font-bold hover:underline"
                            >
                                {ti.newOne}
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-700 ml-4 italic">{ti.emailLabel}</label>
                                <input
                                    required
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-full focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
                                    placeholder={ti.emailPlaceholder}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-700 ml-4 italic">{ti.messageLabel}</label>
                                <textarea
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-[2rem] focus:ring-2 focus:ring-indigo-500 transition-all h-48 font-medium resize-none text-lg"
                                    placeholder={ti.messagePlaceholder}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-indigo-600 hover:bg-orange-500 text-white font-black py-5 rounded-full text-xl transition-all shadow-xl shadow-indigo-500/20 flex items-center justify-center gap-3 italic disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? ti.sending : ti.submitButton} <Send size={24} />
                            </button>

                            <p className="text-xs text-center text-gray-400 mt-4">
                                {ti.privacy}
                            </p>
                        </form>
                    )}
                </div>
            </section>
        </div>
    )
}
