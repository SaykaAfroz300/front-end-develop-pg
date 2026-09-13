import { useState } from "react"


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"]

    return (
        <header className="sticky top-0 z-50 bg-[#ffff]/90 backdrop-blur border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* left side - on mobile this is the hamburger, on desktop it is the logo */}
                <div className="flex items-center gap-2">
                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>
                    <img src="assets/logo-text.png" alt="Dev Stack logo" className="hidden md:inline-block w-25 h-8" />
                    <span className="hidden md:inline-block font-bold text-xl brand-gradient-text">

                    </span>
                </div>

                {/* center - on mobile this becomes the logo, on desktop the nav links */}
                <div className="md:hidden flex items-center gap-2">
                    <img src="/logo.png" alt="Dev Stack logo" className="w-7 h-7" />
                    <span className="font-bold text-lg brand-gradient-text">Dev Stack</span>
                </div>

                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    {navLinks.map((link) => (
                        <a key={link} href="#" className="hover:text-pink-400">
                            {link}
                        </a>
                    ))}
                </nav>

                {/* right side buttons, same on mobile and desktop */}
                <div className="flex items-center gap-3">
                    <button className="text-sm hidden sm:inline">Sign In</button>
                    <button className="brand-gradient text-white text-sm px-4 py-2 rounded-full">
                        Sign Up
                    </button>
                </div>
            </div>

            {/* mobile dropdown menu, only shows when hamburger is clicked */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm">
                    {navLinks.map((link) => (
                        <a key={link} href="#" onClick={() => setMenuOpen(false)}>
                            {link}
                        </a>
                    ))}
                </div>
            )}
        </header>
    )
}

export default Navbar
