import React, { useState } from "react"; // Adicionamos o useState aqui
import { Link } from "react-router-dom";

function Vans() {
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
          to="/tenis"
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
            src="/tenis5.jpg"
            alt="Vans"
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
            Tenis Vans
          </h1>
          <div
            style={{
              fontSize: "28px",
              color: "#1a1a1a",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            R$ 200,00
          </div>
          <div style={{ borderTop: "1px solid #eee", paddingTop: "20px" }}>
            <h4 style={{ color: "#555" }}>Descrição</h4>
            <p style={{ color: "#666" }}>
              Nascido na Califórnia e adotado pelos skatistas, o Vans é muito
              mais que um tênis: é um ícone de expressão criativa. Com sua
              silhueta inconfundível e a famosa sola de borracha Waffle (que
              garante aderência máxima), ele é a escolha ideal para quem vive o
              lifestyle urbano. Seja na lixa do skate ou no rolê com os amigos,
              a atitude está garantida.
            </p>
          </div>
          {/* --- ESCOLHA DE TAMANHO BÁSICA --- */}
          <div style={{ marginTop: "20px" }}>
            <p>
              <strong>Selecione o tamanho:</strong> {tamanho}
            </p>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <button
                onClick={() => setTamanho("38")}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  border:
                    tamanho === "38" ? "2px solid green" : "1px solid #ccc",
                }}
              >
                38
              </button>
              <button
                onClick={() => setTamanho("39")}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  border:
                    tamanho === "39" ? "2px solid green" : "1px solid #ccc",
                }}
              >
                39
              </button>
              <button
                onClick={() => setTamanho("40")}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  border:
                    tamanho === "40" ? "2px solid green" : "1px solid #ccc",
                }}
              >
                40
              </button>
              <button
                onClick={() => setTamanho("41")}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  border:
                    tamanho === "41" ? "2px solid green" : "1px solid #ccc",
                }}
              >
                41
              </button>
            </div>
          </div>
          <h5 style={{ color: "#888888" }}>Estoque disponível!</h5>
          const [cep, setCep] = useState("");
         
         
         
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

export default Vans;
