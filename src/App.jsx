import { useState, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import TechCard from "./components/TechCard.jsx"
import YourStack from "./components/YourStack.jsx"
import Footer from "./components/Footer.jsx"
import Loading from "./components/Loading.jsx"

function App() {
    // all the technologies loaded from the json file
    const [techList, setTechList] = useState([])
    // the technologies the user picked for their own stack
    const [myStack, setMyStack] = useState([])
    // true while we are still fetching the json data
    const [loading, setLoading] = useState(true)

    // load the json data once when the app first loads
    useEffect(() => {
        fetch("/technologies.json")
            .then((res) => res.json())
            .then((data) => {
                setTechList(data)
                setLoading(false)
            })
            .catch((err) => {
                console.log("error loading data", err)
                setLoading(false)
            })
    }, [])

    // check if a technology is already added to the stack
    function isInStack(id) {
        return myStack.some((item) => item.id === id)
    }

    function handleAdd(tech) {
        if (isInStack(tech.id)) {
            toast.warning(tech.name + " is already in your stack!")
            return
        }
        setMyStack([...myStack, tech])
        toast.success(tech.name + " added to your stack")
    }

    function handleRemove(id) {
        setMyStack(myStack.filter((item) => item.id !== id))
        toast.info("Removed from your stack")
    }

    function handleRemoveAll() {
        setMyStack([])
        toast.info("Stack cleared")
    }

    return (
        <div className="bg-[#ffff] min-h-screen text-black">
            <Navbar />
            <Hero />

            <main className="max-w-7xl mx-auto px-4 py-10">
                <h2 className="text-2xl font-bold mb-6">Popular Technologies</h2>

                {loading ? (
                    <Loading />
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* technology cards, 3 column grid on large screens */}
                        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {techList.map((tech) => (
                                <TechCard
                                    key={tech.id}
                                    tech={tech}
                                    isAdded={isInStack(tech.id)}
                                    onAdd={handleAdd}
                                />
                            ))}
                        </div>

                        {/* your stack sidebar */}
                        <div className="lg:col-span-1">
                            <YourStack
                                stack={myStack}
                                onRemove={handleRemove}
                                onRemoveAll={handleRemoveAll}
                            />
                        </div>
                    </div>
                )}
            </main>

            <Footer />

            <ToastContainer position="top-right" autoClose={2500} theme="dark" />
        </div>
    )
}

export default App
