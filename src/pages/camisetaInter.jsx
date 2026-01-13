import React from "react";
import { Link } from "react-router-dom";

function CamisetaInter() {
  return (
    <div style={{ padding: "40px", textAlign: "center", fontFamily: "Arial" }}>
      <Link
        to="/camisetas"
        style={{ textDecoration: "none", color: "blue", fontWeight: "bold" }}
      >
        ← Voltar para Camisetas
      </Link>

      <div
        style={{
          marginTop: "20px",
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px",
          display: "inline-block",
        }}
      >
        <img
          src="/camiseta1.webp"
          alt="Camiseta Internacional"
          style={{ width: "300px", borderRadius: "8px" }}
        />
        <h1 style={{ fontSize: "24px", margin: "15px 0" }}>
          Camiseta Internacional
        </h1>
        <p style={{ fontSize: "20px", color: "#2ecc71", fontWeight: "bold" }}>
          R$ 299,90
        </p>

        <p style={{ maxWidth: "400px", color: "#666" }}>
          Camiseta oficial do Sport Club Internacional. Tecido leve e
          respirável, ideal para torcer no Beira-Rio ou praticar esportes.
        </p>

        <button
          style={{
            backgroundColor: "#00cc00",
            color: "white",
            border: "none",
            padding: "12px 30px",
            fontSize: "16px",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}

export default CamisetaInter;
