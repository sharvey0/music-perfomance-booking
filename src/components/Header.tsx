import Link from "next/link";

export function Header() {
    return (
        <header className="w-full bg-white shadow-md px-8 py-6 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">♪</div>
                <div className="flex flex-col">
                    <Link href="/" className="text-3xl font-bold text-purple-900">Productions Beaulieu</Link>
                    <span className="text-sm text-purple-600">Services de musique professionnels</span>
                </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
                <Link href="events" className="text-purple-700 hover:text-purple-900 font-medium transition duration-300 hover:underline underline-offset-4">Évènements</Link>
                <Link href="bookings" className="text-purple-700 hover:text-purple-900 font-medium transition duration-300 hover:underline underline-offset-4">Rendez-vous</Link>
                <Link href="contact" className="text-purple-700 hover:text-purple-900 font-medium transition duration-300 hover:underline underline-offset-4">Contactez-nous</Link>
            </nav>
        </header>
    );
}