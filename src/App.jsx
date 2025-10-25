import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Services from "./components/Services/Services"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
