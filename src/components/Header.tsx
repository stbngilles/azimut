'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useCart } from '@/lib/CartContext'
import { useI18n } from '@/lib/I18nContext'
import { Locale } from '@/locales'

const languages: { code: Locale; label: string; flag: string }[] = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', label: 'Português', flag: '🇵🇹' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'lb', label: 'Lëtzebuergesch', flag: '🇱🇺' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [showLangs, setShowLangs] = useState(false)
  const { totalItems } = useCart()
  const { locale, setLocale, t } = useI18n()

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.games, href: '/jeux' },
    { name: t.nav.impressions, href: '/impressions' },
    { name: t.nav.mascot, href: '/mascotte' },
    { name: t.nav.goodies, href: '/goodies' },
    { name: t.nav.ambassador, href: '/ambassadeur' },
    { name: t.nav.venues, href: '/lieux' },
    { name: t.nav.about, href: '/a-propos' },
    { name: t.nav.contact, href: '/contact' },
  ]

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <nav className="container mx-auto px-6 md:px-12 pt-8 pb-4 lg:py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
          <span className="text-2xl font-bold text-gray-900 tracking-tight">
            Azimut
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-1 lg:space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-2 border-l pl-4 ml-2 gap-2">
            {/* Desktop Language Switcher */}
            <div className="relative group">
              <button className="p-2 rounded-full text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all flex items-center">
                {languages.find(l => l.code === locale)?.flag}
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLocale(lang.code)}
                    className={`w-full text-left px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-3 transition-colors ${locale === lang.code ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <Link href="/cart" className="p-2 rounded-full text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all relative">
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Icons & Burger */}
        <div className="lg:hidden flex items-center space-x-2">
          {/* Mobile Lang Shortcut */}
          <button
            onClick={() => setShowLangs(!showLangs)}
            className="p-2 rounded-full text-gray-600 hover:bg-gray-100"
          >
            {languages.find(l => l.code === locale)?.flag}
          </button>

          <Link href="/cart" className="p-2 rounded-full text-gray-600 relative">
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Language Selection Bar (Mobile/Tablet) */}
      {showLangs && (
        <div className="lg:hidden border-t border-gray-100 bg-white p-4 animate-fade-in-down overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLocale(lang.code)
                  setShowLangs(false)
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold transition-all ${locale === lang.code ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-gray-200 text-gray-600'}`}
              >
                <span>{lang.flag}</span>
                <span>{lang.code.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] border-t border-gray-100' : 'max-h-0'}`}>
        <div className="bg-white py-4 px-4 space-y-2 pb-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-4 py-3 text-lg font-medium text-gray-700 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {/* Mobile menu bottom section removed */}
        </div>
      </div>
    </header>
  )
}
