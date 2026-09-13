// this is the sidebar panel that shows the technologies the user picked
// stack, onRemove and onRemoveAll come from the parent as props
function YourStack({ stack, onRemove, onRemoveAll }) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 sticky top-24">
            <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-lg">Your Stack</h2>
                <span className="text-xs text-gray-400">
                    {stack.length} Technology Selected
                </span>
            </div>

            {/* conditional rendering - show empty message if nothing picked yet */}
            {stack.length === 0 ? (
                <p className="text-sm text-gray-500">
                    You haven't added any technology yet. Click "Add to Stack" on a
                    card to start building your stack.
                </p>
            ) : (
                <>
                    <div className="flex flex-col gap-3">
                        {stack.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-3 bg-white/5 p-3 rounded-lg"
                            >
                                <img src={item.icon} alt={item.name} className="w-8 h-8" />
                                <div className="flex-1">
                                    <p className="font-semibold text-sm">{item.name}</p>
                                    <p className="text-xs text-gray-400">{item.category}</p>
                                </div>
                                <button
                                    onClick={() => onRemove(item.id)}
                                    className="text-gray-400 hover:text-red-400"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={onRemoveAll}
                        className="mt-4 w-full border border-red-400/50 text-red-400 py-2 rounded-full text-sm"
                    >
                        Remove All
                    </button>
                </>
            )}
        </div>
    )
}

export default YourStack
