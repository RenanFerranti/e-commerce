import React, { useState } from "react"; // Adicionamos o useState aqui
import { Link } from "react-router-dom";

function CalcaPreta() {
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
          to="/calcas"
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
            src="/calca6.webp"
            alt="Calça Cinza"
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
            Calça Cinza Confort
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
              O cinza é a cor da modernidade, e nesta calça cargo, ele traz um
              visual industrial e clean. Perfeita para quem busca uma peça
              neutra que foge do óbvio, ela combina facilmente com qualquer
              paleta de cores, do neon ao básico.
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
                    <h5 style={{ color: "#888888" }}>Estoque disponível!</h5>

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

export default CalcaPreta;
