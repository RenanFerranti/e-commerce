//Importa a biblioteca principal do React,
//  permitindo que o navegador consiga interpretar e executar o código corretamente.
import React from "react";

//Importa um componente especial que permite mudar de página sem precisar recarregar
//  o navegador, tornando a navegação mais rápida e fluida.
import { Link } from "react-router-dom";

//Essa função funciona como um catálogo, onde cada objeto { }
//  guarda as informações de uma calça específica com o id, nome, preço e imagem.
function Calcas() {
  const listaCalcas = [
    {
      id: 1,
      nome: "Calça preta slim",
      preco: "R$ 149,90",
      img: "calca1.webp",
    },
    {
      id: 2,
      nome: "Calça cargo",
      preco: "R$ 159,90",
      img: "calca2.jpg",
    },
    {
      id: 3,
      nome: "Calça marrom casual",
      preco: "R$ 120,00",
      img: "calca3.webp",
    },
    {
      id: 4,
      nome: "Calça Jeans Destroyed",
      preco: "R$ 179,90",
      img: "calca4.jpg",
    },
    {
      id: 5,
      nome: "Calça rasgada",
      preco: "R$ 109,90",
      img: "calca5.webp",
    },
    {
      id: 6,
      nome: "Calça cinza Confort",
      preco: "R$ 99,90",
      img: "calca6.webp",
    },
  ];

  return (
    //É como uma “caixa” que envolve e organiza todo o conteúdo da página de calças.
    <div className="container-paginas">

    {/* Exibe o título principal no topo da página. */}
      <div className="titulos-pagina">
        <h1>Confira Nossa coleção exclusiva de Calças!</h1>
      </div>

     {/* É a classe CSS que organiza os produtos em um layout de grade (grid),
     facilitando a visualização dos itens. */}
      <main className="product-grid">

        {/* Para cada calça criada na lista lá em cima,
         o React cria um card novo automaticamente. */}
        {listaCalcas.map((item) => (

          // Ajuda o React a identificar cada item de forma única, com o id
          <div className="card" key={item.id}>

            <img src={item.img} alt={item.nome} />
            <h3>{item.nome}</h3>
            <p className="preco">{item.preco}</p>

            {/* Cria o botão "comprar" */}
            <button className="btn-comprar">Comprar</button>
          </div>
        ))}
      </main>

            {/* cria o btn para voltar ao home */}
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
export default Calcas;