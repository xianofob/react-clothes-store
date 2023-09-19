import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home }  from "./pages/Home"
import { Shirts } from "./pages/Shirts"
import { Pants } from "./pages/Pants"
import { Hodies } from "./pages/Hodies"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shirts" element={<Shirts />} />
          <Route path="/pants" element={<Pants />} />
          <Route path="/hodies" element={<Hodies />} />
    
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
