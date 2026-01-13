import React from "react";
import { Link } from "react-router-dom";

function Camisetas() {
  // criado uma lista de objetos, onde cada um é um produto único
  const produtos = [
    {
      id: 1,
      nome: "Camiseta Internacional",
      preco: "R$ 299,90",
      img: "camiseta1.webp",
      link: "/camisetaInter", // Nova propriedade
    },
    {
      id: 2,
      nome: "Camiseta lobo feroz",
      preco: "R$ 129,90",
      img: "camiseta2.png",
      link: "/camisetaLobo",
    },
    {
      id: 3,
      nome: "Camiseta F1 Malboro",
      preco: "R$ 199,90",
      img: "camiseta3.avif",
      link: "/camisetaF1",
    },
    {
      id: 4,
      nome: "Camiseta Rio de Janeiro",
      preco: "R$ 69,90",
      img: "camiseta4.jpg",
      link: "/camisetaRJ",
    },
    {
      id: 5,
      nome: "Camiseta FuelTech Black",
      preco: "R$ 110,00",
      img: "camiseta5.jpg",
      link: "/camisetaFT",
    },
    {
      id: 6,
      nome: "Camiseta praia",
      preco: "R$ 95,00",
      img: "camiseta6.webp",
      link: "/camisetaPraia",
    },
  ];

  return (
    <div className="container-camisetas">
      <div className="titulos-pagina">
        <h1>Confira Nossa coleção exclusiva de Camisetas!</h1>
      </div>

      <main className="product-grid">
        {/* Agora o .map() usa as informações de cada objeto (p) */}
        {produtos.map((p) => (
          <div className="card" key={p.id}>
            <img src={p.img} alt={p.nome} />
            <h3>{p.nome}</h3>
            <p className="preco">{p.preco}</p>
            <Link to={p.link}>
              <button
                style={{
                  backgroundColor: "#00cc00",
                  color: "white",
                  padding: "10px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Comprar
              </button>
            </Link>
          </div>
        ))}
      </main>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/" className="btn-voltar">
          Voltar para Início
        </Link>
      </div>
    </div>
  );
}

// Exportação essencial para o App.jsx  encontrar;
// "exportar" = deixar esse arquivo publico p/ o restante do projeto;
// "default" indica que a função Calcas é o que esse arquivo entrega como principal
//  quando ele é usado em outro lugar.
export default Camisetas;
