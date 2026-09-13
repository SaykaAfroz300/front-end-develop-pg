function Hero() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                    Build Your Perfect{" "}
                    <span className="brand-gradient-text">Dev Stack</span>
                </h1>
                <p className="mt-4 text-gray-400 max-w-lg mx-auto md:mx-0">
                    Browse popular technologies, compare them, and pick the ones that
                    fit your next project. Save your favorites to your own stack list.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <button className="brand-gradient text-white px-6 py-3 rounded-full font-semibold">
                        Explore Technologies
                    </button>
                    <button className="border border-white/30 px-6 py-3 rounded-full font-semibold">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="flex-1">
                <img
                    src="https://icon.icepanel.io/Technology/svg/React.svg"
                    alt="dev stack banner"
                    className="w-64 h-64 mx-auto opacity-90"
                />
            </div>
        </section>
    )
}

export default Hero
