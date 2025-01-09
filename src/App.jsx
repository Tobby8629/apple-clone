import Nav from "./components/Layout/Nav"
import Chip from "./components/Sections/Chip"
import FullStory from "./components/Sections/FullStory"
import Hero from "./components/Sections/Hero"
import Highlights from "./components/Sections/Highlights"
import Model from "./components/Sections/Model"

const App = () => {
  return (
    <main className="bg-black">
      <Nav />
      <Hero />
      <Highlights/>
      <Model />
      <FullStory />
      <Chip />
    </main>
  )
}

export default App
