import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="trust-footer">
      <div className="trust-container">
        {/* Item 1: Pagamento */}
        <div className="trust-item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4341/4341764.png"
            alt="Pagamento"
            className="trust-icon"
          />
          <h3>Escolha como pagar</h3>
          <p>Com as melhores opções! Aceitamos todas as bandeiras nacionais.</p>
          <a href="#">Como pagar</a>
        </div>

        {/* Item 2: Frete */}
        <div className="trust-item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/679/679720.png"
            alt="Frete"
            className="trust-icon"
          />
          <h3>Frete grátis a partir de R$ 250</h3>
          <p>
            Entregamos em todo o Brasil. Confira as condições para sua região e
            aproveite o benefício.
          </p>
          <a href="#">Ver condições</a>
        </div>

        {/* Item 3: Segurança */}
        <div className="trust-item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1161/1161388.png"
            alt="Segurança"
            className="trust-icon"
          />
          <h3>Segurança, do início ao fim</h3>
          <p>
            Seus dados estão protegidos. Não gostou do que comprou? Você tem até
            7 dias para devolução grátis.
          </p>
          <a href="#">Como te protegemos</a>
        </div>
      </div>

      <div className="footer-copyright">
        <p>&copy; 2026 Moda Store. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
