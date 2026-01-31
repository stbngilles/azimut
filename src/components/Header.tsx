'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Menu, X, Compass } from 'lucide-react'
import { useCart } from '@/lib/CartContext'

const navLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Les Jeux', href: '/jeux' },
  { name: 'La Mascotte', href: '/mascotte' },
  { name: 'Goodies', href: '/goodies' },
  { name: 'Devenir Ambassadeur', href: '/ambassadeur' },
  { name: 'Lieux & Événements', href: '/lieux' },
  { name: 'À propos', href: '/a-propos' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
          <div className="bg-orange-500 p-1.5 rounded-lg text-white">
            <Compass size={24} />
          </div>
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
          <div className="flex items-center space-x-2 border-l pl-4 ml-2">
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

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[600px] border-t border-gray-100' : 'max-h-0'}`}>
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
