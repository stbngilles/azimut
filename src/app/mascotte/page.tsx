import Image from 'next/image'
import Link from 'next/link'
import { Heart, Sparkles, Smile, Rocket } from 'lucide-react'

export default function MascotPage() {
    return (
        <div className="pb-24">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-indigo-50 to-white py-24 overflow-hidden">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative aspect-square max-w-lg mx-auto lg:mx-0">
                        <div className="absolute inset-0 bg-orange-200 rounded-full blur-[100px] opacity-50 animate-pulse"></div>
                        <Image
                            src="/mascot-new.png"
                            alt="Azi l'explorateur"
                            fill
                            className="object-contain relative z-10 animate-float"
                        />
                    </div>
                    <div className="space-y-8 text-center lg:text-left">
                        <h1 className="text-6xl font-black text-gray-900 leading-tight">
                            Salut, moi c'est <span className="text-indigo-600">Azi</span> !
                        </h1>
                        <p className="text-2xl text-gray-600 font-medium leading-relaxed">
                            Votre guide forestier, expert en bivouac et toujours prêt à vous orienter vers la bonne aventure !
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center lg:items-start gap-4 transform hover:scale-105 transition-transform">
                                <Sparkles className="text-yellow-500" size={32} />
                                <span className="font-bold text-gray-800">Magique</span>
                            </div>
                            <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center lg:items-start gap-4 transform hover:scale-105 transition-transform">
                                <Smile className="text-orange-500" size={32} />
                                <span className="font-bold text-gray-800">Joueur</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="container mx-auto px-4 py-24 space-y-32">
                <div className="text-center max-w-3xl mx-auto space-y-6">
                    <h2 className="text-4xl font-black text-gray-900">Mon Histoire</h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Je suis né d'une étincelle d'imagination lors d'une partie endiablée à minuit. Depuis, j'explore tous les univers d'Azimut Games pour m'assurer que chaque jeu est rempli de fun et de surprises !
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-4 text-center">
                        <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
                            <Heart size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 text-center">Inspirateur</h3>
                        <p className="text-gray-600">
                            Je souffle les meilleures idées aux créateurs de jeux (même si parfois elles sont un peu folles !).
                        </p>
                    </div>
                    <div className="space-y-4 text-center">
                        <div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 transform -rotate-3">
                            <Rocket size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Explorateur</h3>
                        <p className="text-gray-600">
                            Je teste chaque nouveau monde pour vérifier qu'il est vraiment prêt pour vos aventures.
                        </p>
                    </div>
                    <div className="space-y-4 text-center">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 transform rotate-6">
                            <Smile size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Ambianceur</h3>
                        <p className="text-gray-600">
                            Mon but ultime ? Que vous ayez le sourire dès que vous ouvrez une boîte Azimut.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to action */}
            <section className="container mx-auto px-4">
                <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-24 text-center text-white space-y-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl"></div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black">Prêt à jouer avec moi ?</h2>
                    <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
                        Retrouvez-moi sur les boîtes de jeux et venez faire ma connaissance lors des événements Azimut !
                    </p>
                    <Link
                        href="/jeux"
                        className="inline-block px-12 py-5 bg-orange-400 hover:bg-orange-500 text-white rounded-full font-bold text-xl transition-all hover:scale-105"
                    >
                        Voir les Jeux
                    </Link>
                </div>
            </section>
        </div>
    )
}
