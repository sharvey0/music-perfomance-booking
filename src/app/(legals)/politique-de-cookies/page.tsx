import {Header} from "@/components/Header";
import * as React from "react";
import {Footer} from "@/components/Footer";

export default function ConfidentialityPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Header />
            <main className="py-48 px-6">
                <div className="mx-auto max-w-3xl ">
                    <h1 className="text-4xl font-bold mb-4">
                        Politique de cookies
                    </h1>
                    <p className="text-sm text-gray-500 mb-12">
                        Dernière mise à jour : 17 février 2026
                    </p>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">
                            1. Qu’est-ce qu’un cookie ?
                        </h2>
                        <p>
                            Un cookie est un petit fichier texte enregistré sur votre appareil
                            lorsque vous visitez un site web. Il permet notamment d’améliorer
                            l’expérience utilisateur et d’analyser la performance du site.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">
                            2. Cookies utilisés
                        </h2>

                        <h3 className="font-semibold mt-6 mb-2">Cookies essentiels</h3>
                        <p className="mb-4">
                            Ces cookies sont nécessaires au bon fonctionnement du site.
                            Ils ne peuvent pas être désactivés.
                        </p>

                        <h3 className="font-semibold mt-6 mb-2">Cookies analytiques</h3>
                        <p>
                            Nous utilisons les outils analytiques fournis par Vercel afin
                            d’améliorer la performance et comprendre l’utilisation du site.
                            Ces cookies ne sont activés qu’avec votre consentement.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">
                            3. Consentement
                        </h2>
                        <p>
                            Lors de votre première visite, une bannière vous permet d’accepter
                            ou de refuser les cookies non essentiels.
                        </p>
                        <p className="mt-4">
                            Vous pouvez modifier votre choix à tout moment en effaçant
                            les cookies de votre navigateur.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">
                            4. Contact
                        </h2>
                        <p>
                            Pour toute question relative à cette politique, veuillez écrire à{" "}
                            <a
                                href="mailto:productionsbeaulieu@gmail.com"
                                className="text-blue-600 hover:underline"
                            >
                                productionsbeaulieu@gmail.com
                            </a>
                            .
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}