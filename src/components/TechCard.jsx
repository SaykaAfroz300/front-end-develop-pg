
function TechCard({ tech, isAdded, onAdd }) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col gap-3">
            <div className="flex items-start justify-between">
                <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
                <span className="text-xs bg-pink-500/20 text-pink-300 px-2 py-1 rounded-full">
                    {tech.badge}
                </span>
            </div>

            <h3 className="text-lg font-bold">{tech.name}</h3>
            <p className="text-sm text-gray-400">{tech.description}</p>

            <div className="flex items-center gap-2 text-xs text-gray-300">
                <span className="bg-white/10 px-2 py-1 rounded-full">{tech.category}</span>
                <span className="bg-white/10 px-2 py-1 rounded-full">{tech.difficulty}</span>
            </div>

            <div className="flex items-center gap-1 text-yellow-400 text-sm">
                ⭐ {tech.rating}
            </div>

            <button
                disabled={isAdded}
                onClick={() => onAdd(tech)}
                className={
                    isAdded
                        ? "mt-2 bg-white/10 text-gray-400 py-2 rounded-full cursor-not-allowed"
                        : "mt-2 bg-black text-white py-2 rounded-full font-semibold"
                }
            >
                {isAdded ? "✓ Added to Stack" : "Add to Stack"}
            </button>
        </div>
    )
}

export default TechCard
