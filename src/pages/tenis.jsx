import React from "react";
import { Link } from "react-router-dom";

function Tenis() {
  const listaTenis = [
    {
      id: 1,
      nome: "Tenis Fila",
      preco: 200,
      img: "tenis1.webp",
    },
    {
      id: 2,
      nome: "Tenis Olympikus",
      preco: 140,
      img: "tenis2.webp",
    },
    {
      id: 3,
      nome: "Tenis Adidas",
      preco: 200,
      img: "tenis3.webp",
    },
    {
      id: 4,
      nome: "Tenis Nike",
      preco: 200,
      img: "tenis4.jpg",
    },
    {
      id: 5,
      nome: "Tenis Vans",
      preco: 200,
      img: "tenis5.jpg",
    },
    {
      id: 6,
      nome: "Tenis Hoka",
      preco: 200,
      img: "tenis6.webp",
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
            <button className="btn-comprar">Comprar</button>
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
