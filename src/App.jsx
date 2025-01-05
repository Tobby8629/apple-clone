import Nav from "./components/Layout/Nav"
import Hero from "./components/Sections/Hero"
import Highlights from "./components/Sections/Highlights"

const App = () => {
  return (
    <main className="bg-black">
      <Nav />
      <Hero />
      <Highlights/>
    </main>
  )
}

export default App
