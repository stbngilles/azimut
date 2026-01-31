export default function PrivacyPolicyPage() {
    return (
        <div className="container mx-auto px-4 py-24 max-w-4xl">
            <div className="space-y-12">
                <div className="text-center space-y-4 pb-12 border-b border-gray-100">
                    <h1 className="text-5xl font-black text-gray-900 italic">Politique de Confidentialité</h1>
                    <p className="text-gray-500 font-bold uppercase tracking-widest">Azimut Games - Protection de vos données</p>
                </div>

                <section className="space-y-6">
                    <h2 className="text-3xl font-black italic text-indigo-600">Introduction</h2>
                    <p className="text-gray-700 leading-relaxed font-medium">
                        Chez Azimut Games, nous accordons une importance capitale à la protection de vos données personnelles. Cette politique détaille comment nous collectons, utilisons et protégeons vos informations conformément au Règlement Général sur la Protection des Données (RGPD).
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-black italic text-indigo-600">Données collectées</h2>
                    <div className="bg-gray-50 rounded-[2.5rem] p-8 space-y-4">
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <span className="text-indigo-600 font-black">01.</span>
                                <div>
                                    <p className="font-bold">Formulaires de contact & ambassadeurs</p>
                                    <p className="text-sm text-gray-600">Nom, prénom, email, ville, motivation et expérience.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-indigo-600 font-black">02.</span>
                                <div>
                                    <p className="font-bold">Commandes & Boutique</p>
                                    <p className="text-sm text-gray-600">Adresse de livraison, email, historique d'achats. <span className="text-orange-600 font-bold">Nous ne stockons aucune donnée bancaire</span>.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-black italic text-indigo-600">Finalités du traitement</h2>
                    <p className="text-gray-700 leading-relaxed font-medium">
                        Vos données sont utilisées exclusivement pour :
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                        <li>Gérer vos commandes et la livraison.</li>
                        <li>Répondre à vos demandes de contact ou de partenariat.</li>
                        <li>Traiter vos candidatures au programme ambassadeur.</li>
                        <li>Améliorer l'expérience utilisateur sur notre site.</li>
                    </ul>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-black italic text-indigo-600">Durée de conservation</h2>
                    <p className="text-gray-700 leading-relaxed font-medium">
                        Les données relatives aux commandes sont conservées 10 ans (obligation légale). Les données de prospection ou de contact sont conservées 3 ans maximum après le dernier contact de votre part.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-black italic text-indigo-600">Vos droits</h2>
                    <p className="text-gray-700 leading-relaxed font-medium">
                        Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement de vos données. Pour exercer ces droits, contactez-nous à : <span className="font-bold text-indigo-600">dpo@azimutgames.com</span>.
                    </p>
                </section>

                <div className="bg-indigo-900 text-white p-12 rounded-[3.5rem] text-center space-y-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 blur-[80px] opacity-20"></div>
                    <h3 className="text-2xl font-black italic">Une question RGPD ?</h3>
                    <p className="text-indigo-200">Notre délégué à la protection des données est là pour vous aider.</p>
                    <a href="mailto:dpo@azimutgames.com" className="inline-block bg-orange-500 hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-bold transition-all">Envoyer un mail</a>
                </div>
            </div>
        </div>
    )
}
