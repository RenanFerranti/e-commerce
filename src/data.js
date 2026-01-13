export const products = [
  {
    id: 1,
    name: "Camiseta Branca",
    price: 79.9,
    category: "camisetas",
    img: "URL_DA_FOTO",
  },
  {
    id: 2,
    name: "Camiseta Preta",
    price: 85.0,
    category: "camisetas",
    img: "URL_DA_FOTO",
  },
  {
    id: 3,
    name: "Calça Jeans Escura",
    price: 189.0,
    category: "calcas",
    img: "URL_DA_FOTO",
  },
  {
    id: 4,
    name: "Calça Sarja",
    price: 150.0,
    category: "calcas",
    img: "URL_DA_FOTO",
  },
  {
    id: 5,
    name: "Tênis Runner",
    price: 299.0,
    category: "tenis",
    img: "URL_DA_FOTO",
  },
];

// Por que o data.js não precisa do "X"?
// Apenas Dados: O seu arquivo data.js contém apenas informações puras: textos, números e listas (arrays/objetos).

// Sem Interface: Como ele não cria elementos visuais (não tem aquele "HTML" do React), ele é um arquivo JavaScript puro.

// Padrão de Organização: Usar apenas .js ajuda você a bater o olho na pasta e saber: "Este arquivo é só lógica/dados, não é uma tela do site".
