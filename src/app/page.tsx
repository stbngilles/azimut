'use client'

import Image from 'next/image'
import Link from 'next/link'
import { GAMES } from '@/lib/constants'
import { ArrowRight, MapPin, Star, Users, Gamepad2, ShoppingBag } from 'lucide-react'
import { useCart } from '@/lib/CartContext'
import { useI18n } from '@/lib/I18nContext'

export default function Home() {
  const { addToCart } = useCart()
  const { t } = useI18n()

  return (
    <div className="space-y-24 pb-24">
      {/* 1. Hero Section - Adventure Refresh */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070"
            alt="Adventure Mountains"
            fill
            className="object-cover opacity-60 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/50 to-[#0f172a]"></div>
          <div className="absolute inset-0 bg-topo opacity-20"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-indigo-200 text-sm font-bold uppercase tracking-widest animate-pulse">
            <Star size={16} className="text-orange-400" /> {t.hero.badge}
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-tight tracking-tighter">
            {t.hero.title} <br />
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-indigo-400 bg-clip-text text-transparent">{t.hero.titleAccent}</span>
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 font-medium max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/jeux"
              className="px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-black text-xl transition-all hover:scale-105 shadow-2xl shadow-orange-500/40 flex items-center gap-3 group"
            >
              {t.hero.cta} <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Featured Games */}
      <section id="jeux" className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">{t.featured.title}</h2>
            <p className="text-gray-600 text-lg max-w-md">
              {t.featured.subtitle}
            </p>
          </div>
          <Link href="/jeux" className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all underline decoration-2 underline-offset-4">
            {t.featured.viewAll} <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GAMES.map((game) => (
            <div key={game.id} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-indigo-600 shadow-lg">
                  {game.price}
                </div>
              </div>
              <div className="p-8 space-y-4 flex-grow flex flex-col">
                <h3 className="text-2xl font-black text-gray-900 leading-tight">{game.title}</h3>
                <p className="text-gray-600 flex-grow">{game.shortDescription}</p>
                <div className="pt-4 flex items-center justify-between gap-4">
                  <Link
                    href={`/jeux#${game.slug}`}
                    className="flex-grow text-center py-3 bg-indigo-50 text-indigo-700 rounded-2xl font-bold hover:bg-indigo-600 hover:text-white transition-all"
                  >
                    {t.featured.discover}
                  </Link>
                  <button
                    onClick={() => addToCart(game)}
                    className="p-3 border-2 border-indigo-100 text-indigo-600 rounded-2xl hover:border-indigo-600 transition-all active:scale-95"
                    title={t.featured.addToCart}
                  >
                    <ShoppingBag size={24} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Mascot Section - Nature Refresh */}
      <section className="bg-parchment py-24 relative overflow-hidden bg-topo">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-orange-200 rounded-full scale-90 blur-3xl opacity-40 animate-pulse"></div>
            <Image
              src="/mascot-new.png"
              alt="Mascotte Azi"
              width={500}
              height={500}
              className="object-contain relative z-10 animate-float"
            />
          </div>
          <div className="space-y-8 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black leading-tight text-gray-900">
              {t.mascot.title} <span className="text-orange-500">{t.mascot.titleAccent}</span> !
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              {t.mascot.description}
            </p>
            <div className="pt-4">
              <Link
                href="/mascotte"
                className="inline-block px-10 py-5 bg-indigo-600 text-white rounded-full font-black text-lg hover:bg-orange-500 transition-all transform hover:-translate-y-1 shadow-xl shadow-indigo-500/20"
              >
                {t.mascot.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Goodies & Ambassador Blocks */}
      <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Goodies Block */}
        <div className="bg-orange-500 rounded-[3rem] p-12 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-24 -mt-24 group-hover:scale-125 transition-transform duration-500"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl font-black italic">{t.blocks.collection.title}</h2>
            <p className="text-orange-100 text-lg">
              {t.blocks.collection.description}
            </p>
            <Link
              href="/goodies"
              className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all"
            >
              {t.blocks.collection.cta} <ShoppingBag size={20} />
            </Link>
          </div>
        </div>

        {/* Ambassador Block */}
        <div className="bg-indigo-600 rounded-[3rem] p-12 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-black opacity-10 rounded-full -mr-24 -mt-24 group-hover:scale-125 transition-transform duration-500"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl font-black italic">{t.blocks.expedition.title}</h2>
            <p className="text-indigo-100 text-lg">
              {t.blocks.expedition.description}
            </p>
            <Link
              href="/ambassadeur"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all"
            >
              {t.blocks.expedition.cta} <Users size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Venues & Events - Forest Refresh */}
      <section className="bg-[#132a24] py-32 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-topo opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center space-y-16 relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
            <h2 className="text-5xl font-black text-white italic">{t.venues.title}</h2>
            <p className="text-indigo-100/60 text-xl font-medium italic">
              {t.venues.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-lg p-10 rounded-[3rem] border border-white/10 space-y-6 hover:bg-white/10 transition-all group">
              <div className="w-20 h-20 bg-orange-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-6 rotate-3 group-hover:rotate-0 transition-transform">
                <MapPin size={40} />
              </div>
              <h3 className="text-2xl font-black text-white italic">{t.venues.points.title}</h3>
              <p className="text-indigo-100/40 font-medium">{t.venues.points.description}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-10 rounded-[3rem] border border-white/10 space-y-6 hover:bg-white/10 transition-all group lg:-translate-y-4">
              <div className="w-20 h-20 bg-indigo-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-6 -rotate-3 group-hover:rotate-0 transition-transform">
                <Gamepad2 size={40} />
              </div>
              <h3 className="text-2xl font-black text-white italic">{t.venues.places.title}</h3>
              <p className="text-indigo-100/40 font-medium">{t.venues.places.description}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-10 rounded-[3rem] border border-white/10 space-y-6 hover:bg-white/10 transition-all group">
              <div className="w-20 h-20 bg-purple-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-6 rotate-6 group-hover:rotate-0 transition-transform">
                <Star size={40} />
              </div>
              <h3 className="text-2xl font-black text-white italic">{t.venues.events.title}</h3>
              <p className="text-indigo-100/40 font-medium">{t.venues.events.description}</p>
            </div>
          </div>

          <Link
            href="/lieux"
            className="inline-flex items-center gap-3 px-12 py-6 bg-white text-[#132a24] rounded-full font-black text-xl hover:bg-orange-500 hover:text-white transition-all shadow-2xl shadow-indigo-500/10 group active:scale-95"
          >
            {t.venues.cta} <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  )
}
