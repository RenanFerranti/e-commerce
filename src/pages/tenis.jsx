import React from "react";
import { Link } from "react-router-dom";

function Tenis() {
  const listaTenis = [
    {
      id: 1,
      nome: "Tenis Fila",
      preco: 200,
      img: "tenis1.webp",
      link: "/Fila",
    },
    {
      id: 2,
      nome: "Tenis Olympikus",
      preco: 140,
      img: "tenis2.webp",
      link: "/Olympikus",
    },
    {
      id: 3,
      nome: "Tenis Adidas",
      preco: 200,
      img: "tenis3.webp",
      link: "/Adidas",
    },
    {
      id: 4,
      nome: "Tenis Nike",
      preco: 200,
      img: "tenis4.jpg",
      link: "/Nike",
    },
    {
      id: 5,
      nome: "Tenis Vans",
      preco: 200,
      img: "tenis5.jpg",
      link: "/Vans",
    },
    {
      id: 6,
      nome: "Tenis Hoka",
      preco: 200,
      img: "tenis6.webp",
      link: "/Hoka",
    },
  ];

  return (
    <div className="container-tenis">
      <div className="titulos-pagina">
        <h1>Confira Nossa coleção exclusiva de Tênis!</h1>
      </div>

      <main className="product-grid">
        {listaTenis.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.img} alt={item.nome} />
            <h3>{item.nome}</h3>
            <p className="preco">R$ {item.preco},00</p>
            <Link to={item.link}>
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
            </Link>{" "}
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
export default Tenis;
