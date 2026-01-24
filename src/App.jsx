import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

// Importação do Rodapé
import Footer from "./components/Footer";

// Importações das Páginas
import Camisetas from "./pages/camisetas";
import Calcas from "./pages/calcas";
import Tenis from "./pages/tenis";
import CamisetaInter from "./pages/camisetaInter";
import CamisetaLobo from "./pages/camisetaLobo";
import CamisetaF1 from "./pages/camisetaF1";
import CamisetaRJ from "./pages/camisetaRJ";
import CamisetaFT from "./pages/camisetaFT";
import CamisetaPraia from "./pages/camisetaPraia";
import CalcaPreta from "./pages/calcaPreta";
import CalcaCargo from "./pages/calcaCargo";
import CalcaMarrom from "./pages/calcaMarrom";
import CalcaJeans from "./pages/calcaJeans";
import CalcaRasgada from "./pages/calcaRasgada";
import CalcaCinza from "./pages/calcaCinza";
import Fila from "./pages/Fila";
import Olympikus from "./pages/Olympikus";
import Adidas from "./pages/Adidas";
import Nike from "./pages/Nike";
import Vans from "./pages/Vans";
import Hoka from "./pages/Hoka";

// COMPONENTE DA HOME
const Home = () => (
  <>
    <header className="hero">
      <h2>Bem-vindo à Moda Store</h2>
      <p>Confira as últimas tendências em roupas!</p>
    </header>

    <main className="product-grid">
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
          alt="Camisetas"
        />
        <h3>Camisetas</h3>
        <Link to="/camisetas" className="btn-camisetas">
          Ver camisetas
        </Link>
      </div>

      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1542272604-787c3835535d?w=500"
          alt="Calças"
        />
        <h3>Calças</h3>
        <Link to="/calcas" className="btn-calcas">
          Ver calças
        </Link>
      </div>

      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500"
          alt="Tênis"
        />
        <h3>Tênis</h3>
        <Link to="/tenis" className="btn-tenis">
          Ver tênis
        </Link>
      </div>
    </main>
  </>
);

function App() {
  return (
    <div className="App">
      {/* Menu Superior Fixo */}
      <nav className="navbar">
        <div className="nav-spacer"></div>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <h1>MODA STORE</h1>
        </Link>
        <div className="cart-container">
          <button className="btn-carrinho">Carrinho (0)</button>
        </div>
      </nav>

      {/* Conteúdo que muda conforme a página */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camisetas" element={<Camisetas />} />
        <Route path="/calcas" element={<Calcas />} />
        <Route path="/tenis" element={<Tenis />} />
        <Route path="/camisetaInter" element={<CamisetaInter />} />
        <Route path="/camisetaLobo" element={<CamisetaLobo />} />
        <Route path="/camisetaF1" element={<CamisetaF1 />} />
        <Route path="/camisetaRJ" element={<CamisetaRJ />} />
        <Route path="/camisetaFT" element={<CamisetaFT />} />
        <Route path="/camisetaPraia" element={<CamisetaPraia />} />
        <Route path="/calcaPreta" element={<CalcaPreta />} />
        <Route path="/calcaCargo" element={<CalcaCargo />} />
        <Route path="/calcaMarrom" element={<CalcaMarrom />} />
        <Route path="/calcaJeans" element={<CalcaJeans />} />
        <Route path="/calcaRasgada" element={<CalcaRasgada />} />
        <Route path="/calcaCinza" element={<CalcaCinza />} />
        <Route path="/Fila" element={<Fila />} />
        <Route path="/Olympikus" element={<Olympikus />} />
        <Route path="/Adidas" element={<Adidas />} />
        <Route path="/Nike" element={<Nike />} />
        <Route path="/Vans" element={<Vans />} />
        <Route path="/Hoka" element={<Hoka />} />
      </Routes>

      {/* Rodapé que aparece em todas as páginas */}
      <Footer />
    </div>
  );
}

export default App;
