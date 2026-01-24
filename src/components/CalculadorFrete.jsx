import React, { useState } from "react";

const CalculadorFrete = () => {
  const [cep, setCep] = useState("");
  const [resultado, setResultado] = useState(null);

  const handleCalcular = () => {
    // Validação básica de tamanho de CEP
    if (cep.length < 8) {
      alert("Por favor, digite um CEP válido.");
      return;
    }

    // Lógica Fictícia baseada no primeiro dígito
    const primeiroDigito = cep.charAt(0);
    let valorFrete = 0;
    let prazo = "";

    if (primeiroDigito === "0" || primeiroDigito === "1") {
      valorFrete = 12.5;
      prazo = "2 a 4 dias úteis";
    } else if (primeiroDigito === "2" || primeiroDigito === "3") {
      valorFrete = 22.9;
      prazo = "5 a 7 dias úteis";
    } else {
      valorFrete = 35.0;
      prazo = "10 a 15 dias úteis";
    }

    setResultado({ valor: valorFrete, prazo: prazo });
  };

  return (
    <div className="frete-container">
      <h4>Calcular Frete</h4>
      <div className="frete-input-group">
        <input
          type="text"
          placeholder="00000-000"
          maxLength="8"
          value={cep}
          onChange={(e) => setCep(e.target.value.replace(/\D/g, ""))}
        />
        <button onClick={handleCalcular}>Calcular</button>
      </div>

      {resultado && (
        <div className="resultado-frete">
          <p>
            Frete: <strong>R$ {resultado.valor.toFixed(2)}</strong> (
            {resultado.prazo})
          </p>
        </div>
      )}
    </div>
  );
};

export default CalculadorFrete;
