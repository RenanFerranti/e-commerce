import React from "react";
import { Link } from "react-router-dom";

function camisetaFT() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Botão Voltar Refinado */}
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

      {/* Container Principal do Produto */}
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
        {/* Lado Esquerdo: Imagem */}
        <div
          style={{
            flex: "1 1 400px",
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <img
            src="/camiseta5.jpg"
            alt="Camiseta Fuel Tech"
            style={{ width: "100%", maxWidth: "450px", objectFit: "contain" }}
          />
        </div>

        {/* Lado Direito: Informações */}
        <div
          style={{
            flex: "1 1 400px",
            padding: "60px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              color: "#315ceb",
              fontWeight: "bold",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Edição Turbo
          </span>

          <h1 style={{ fontSize: "36px", margin: "10px 0", color: "#1a1a1a" }}>
            Camiseta Fuel Tech
          </h1>

          <div
            style={{
              fontSize: "28px",
              color: "#1a1a1a",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            R$ 110,00
            <span
              style={{
                fontSize: "14px",
                color: "#888",
                fontWeight: "normal",
                marginLeft: "10px",
              }}
            >
              ou 2x de R$ 55,00
            </span>
          </div>

          <div style={{ borderTop: "1px solid #eee", paddingTop: "20px" }}>
            <h4 style={{ marginBottom: "10px", color: "#555" }}>Descrição</h4>
            <p style={{ lineHeight: "1.6", color: "#666", fontSize: "16px" }}>
              Domine as pistas com a Camiseta FuelTech. Desenvolvida para os
              entusiastas de alta performance, esta peça carrega o DNA da
              tecnologia automotiva que revolucionou o automobilismo mundial.
            </p>
          </div>

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
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(46, 204, 113, 0.3)",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#27ae60")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#2ecc71")}
          >
            FINALIZAR COMPRA
          </button>
        </div>
      </div>
    </div>
  );
}

export default camisetaFT;
