import {Header} from "@/components/Header";
import * as React from "react";
import {Footer} from "@/components/Footer";

export default function ConfidentialityPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Header />
            <main className="py-48 px-6">
                <div className="mx-auto max-w-3xl text-white">
                    <h1 className="text-4xl font-bold mb-4">
                        Politique de confidentialité
                    </h1>
                    <p className="text-sm text-gray-500 mb-12">
                        Dernière mise à jour : 17 février 2026
                    </p>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">
                            1. Responsable de la protection des renseignements personnels
                        </h2>
                        <p className="mb-4">
                            Productions Beaulieu est une entreprise individuelle exploitée à
                            Québec (Québec), Canada.
                        </p>
                        <p className="mb-4">
                            Responsable : <strong>Anthony Beaulieu</strong>
                            <br />
                            Courriel :{" "}
                            <a
                                href="mailto:productionsbeaulieu@gmail.com"
                                className="text-blue-600 hover:underline"
                            >
                                productionsbeaulieu@gmail.com
                            </a>
                        </p>
                        <p>
                            Toute question relative à la protection des renseignements
                            personnels peut être adressée à cette adresse.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">
                            2. Renseignements personnels collectés
                        </h2>
                        <p className="mb-4">
                            Nous collectons uniquement les renseignements nécessaires à la
                            gestion des demandes de réservation.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Nom</li>
                            <li>Adresse courriel</li>
                            <li>Type d’événement</li>
                            <li>Date de l’événement</li>
                            <li>Durée prévue</li>
                            <li>Description ou informations supplémentaires concernant l’événement</li>
                        </ul>
                        <p>
                            Aucun compte utilisateur n’est requis pour utiliser le site. Aucun
                            renseignement bancaire n’est collecté.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">
                            3. Finalités de la collecte
                        </h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Répondre aux demandes de réservation</li>
                            <li>Communiquer avec le client</li>
                            <li>Préparer une offre de service</li>
                            <li>Assurer le suivi des demandes</li>
                        </ul>
                        <p className="mt-4">
                            Les renseignements ne sont pas utilisés à des fins de marketing
                            sans consentement explicite.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">
                            4. Hébergement et fournisseurs de services
                        </h2>
                        <p className="mb-4">
                            Les données sont hébergées et traitées via Supabase (infrastructure
                            de base de données) et Vercel (hébergement du site et outils
                            analytiques).
                        </p>
                        <p>
                            Ces fournisseurs peuvent héberger des données à l’extérieur du
                            Québec. Des mesures contractuelles et techniques sont mises en place
                            afin d’assurer un niveau de protection adéquat.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">
                            5. Conservation des renseignements
                        </h2>
                        <p>
                            Les renseignements personnels sont conservés pour une durée maximale
                            de un (1) mois suivant la demande, sauf si une relation contractuelle
                            est établie.
                        </p>
                        <p className="mt-4">
                            Après cette période, les données sont supprimées de manière sécuritaire.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">
                            6. Sécurité des renseignements
                        </h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Connexion sécurisée HTTPS</li>
                            <li>Accès restreint à la base de données</li>
                            <li>Mesures de sécurité offertes par nos fournisseurs technologiques</li>
                            <li>Accès limité au responsable de l’entreprise</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">
                            7. Droits des utilisateurs
                        </h2>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Demander l’accès aux renseignements personnels détenus</li>
                            <li>Demander la rectification de renseignements inexacts</li>
                            <li>Retirer son consentement à la conservation des données</li>
                        </ul>
                        <p>
                            Pour exercer ces droits, veuillez écrire à{" "}
                            <a
                                href="mailto:productionsbeaulieu@gmail.com"
                                className="text-blue-600 hover:underline"
                            >
                                productionsbeaulieu@gmail.com
                            </a>
                            .
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">
                            8. Cookies et outils analytiques
                        </h2>
                        <p>
                            Le site utilise des outils analytiques afin d’améliorer la
                            performance et l’expérience utilisateur. Une bannière de
                            consentement aux cookies sera mise en place afin de permettre aux
                            utilisateurs d’accepter ou de refuser les cookies non essentiels.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}