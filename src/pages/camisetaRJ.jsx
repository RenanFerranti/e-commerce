import React, { useState } from "react"; // Adicionamos o useState aqui
import { Link } from "react-router-dom";
import CalculadorFrete from "../components/CalculadorFrete";


function CamisetaRJ() {
  // Criamos uma variável para guardar o tamanho (P, M, G ou GG)
  const [tamanho, setTamanho] = useState("");

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Botão Voltar */}
      <div style={{ maxWidth: "1000px", margin: "0 auto 20px" }}>
        <Link
          to="/camisetas"
          style={{
            textDecoration: "none",
            color: "#555",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <span>←</span> Voltar para a vitrine
        </Link>
      </div>

      {/* Container Principal */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          backgroundColor: "#fff",
          borderRadius: "15px",
          display: "flex",
          flexWrap: "wrap",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        }}
      >
        {/* Imagem */}
        <div
          style={{
            flex: "1 1 400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <img
            src="/camiseta4.jpg"
            alt="Camiseta RJ"
            style={{ width: "100%", maxWidth: "450px", objectFit: "contain" }}
          />
        </div>

        {/* Informações */}
        <div
          style={{
            flex: "1 1 400px",
            padding: "60px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "36px", margin: "10px 0", color: "#1a1a1a" }}>
            Camiseta Rio de Janeiro
          </h1>
          <div
            style={{
              fontSize: "28px",
              color: "#1a1a1a",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            R$ 99,90
          </div>

          <div style={{ borderTop: "1px solid #eee", paddingTop: "20px" }}>
            <h4 style={{ color: "#555" }}>Descrição</h4>
            <p style={{ color: "#666" }}>
              Leve a energia da Cidade Maravilhosa com você onde quer que vá.
              Nossa camiseta celebra o lifestyle carioca com um design que une o
              calçadão de Copacabana ao pôr do sol do Arpoador. Feita em tecido
              leve e respirável, é a peça ideal para quem busca o máximo de
              conforto sem perder o borogodó e a ginga que só o Rio tem.
            </p>
          </div>

          {/* --- ESCOLHA DE TAMANHO BÁSICA --- */}
          <div style={{ marginTop: "20px" }}>
            <p>
              <strong>Selecione o tamanho:</strong> {tamanho}
            </p>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <button
                onClick={() => setTamanho("P")}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  border:
                    tamanho === "P" ? "2px solid green" : "1px solid #ccc",
                }}
              >
                P
              </button>
              <button
                onClick={() => setTamanho("M")}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  border:
                    tamanho === "M" ? "2px solid green" : "1px solid #ccc",
                }}
              >
                M
              </button>
              <button
                onClick={() => setTamanho("G")}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  border:
                    tamanho === "G" ? "2px solid green" : "1px solid #ccc",
                }}
              >
                G
              </button>
              <button
                onClick={() => setTamanho("GG")}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  border:
                    tamanho === "GG" ? "2px solid green" : "1px solid #ccc",
                }}
              >
                GG
              </button>
            </div>
          </div>
<CalculadorFrete />

          {/* ---------------------------------- */}

          <button
            style={{
              backgroundColor: "#2ecc71",
              color: "white",
              border: "none",
              padding: "18px 30px",
              fontSize: "18px",
              fontWeight: "bold",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "30px",
            }}
            onClick={() =>
              alert(
                tamanho
                  ? "Comprado tamanho: " + tamanho
                  : "Selecione um tamanho!",
              )
            }
          >
            FINALIZAR COMPRA
          </button>
        </div>
      </div>
    </div>
  );
}

export default CamisetaRJ;
