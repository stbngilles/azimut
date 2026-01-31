import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <h3 className="text-xl font-black">AZIMUT GAMES</h3>
                    <p className="text-gray-400 text-sm">
                        Créateur d'univers ludiques et d'aventures inoubliables.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Navigation</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
                        <li><Link href="/jeux" className="hover:text-white transition-colors">Les Jeux</Link></li>
                        <li><Link href="/mascotte" className="hover:text-white transition-colors">La Mascotte</Link></li>
                        <li><Link href="/goodies" className="hover:text-white transition-colors">Goodies</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Communauté</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><Link href="/ambassadeur" className="hover:text-white transition-colors">Devenir Ambassadeur</Link></li>
                        <li><Link href="/lieux" className="hover:text-white transition-colors">Lieux & Événements</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Légal</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link></li>
                        <li><Link href="/cgv" className="hover:text-white transition-colors">CGV</Link></li>
                        <li><Link href="/politique-de-confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
                &copy; {new Date().getFullYear()} Azimut Games. Tous droits réservés.
            </div>
        </footer>
    )
}
