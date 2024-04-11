import React from "react";

/* Images */
import Agenda from "../Assets/Logos/LogoAgenda.png";
import Casa from "../Assets/Logos/LogoCasa.png";
import Saude10 from "../Assets/Logos/LogoSaude10.png";
import LogoAmmarhesWrite from "../Assets/Logos/LogoAmmarhesWrite.png";

const AlterarNome = () => {
  return (
    <>
      <section className="companies-section">
        <div className="companies-container">
          <h1>Conheça Nossas Empresas</h1>
          <div className="companies-logos-container">
            <div className="logo-link">
              <a target="_blank" href="https://ammarhes.com.br/">
                <img
                  className="companies-logos-imgs"
                  src={LogoAmmarhesWrite}
                  alt="Logo Ammarhes"
                />
              </a>
              <a
                target="_blank"
                href="https://ammarhes.com.br/"
                className="logo-link-button"
              >
                Clique e Acesse
              </a>
            </div>

            <div className="logo-link">
              <a target="_blank" href="https://casaocupacional.com.br/">
                <img
                  className="companies-logos-imgs"
                  src={Casa}
                  alt="Logo Casa Ocupacional"
                />
              </a>
              <a
                target="_blank"
                href="https://casaocupacional.com.br/"
                className="logo-link-button"
              >
                Clique e Acesse
              </a>
            </div>
            <div className="logo-link">
              <a target="_blank" href="https://www.agendatecnica.com.br/">
                <img
                  className="companies-logos-imgs"
                  src={Agenda}
                  alt="Logo Agenda Técnica"
                />
              </a>
              <a
                target="_blank"
                href="https://www.agendatecnica.com.br/"
                className="logo-link-button"
              >
                Clique e Acesse
              </a>
            </div>
            <div className="logo-link">
              <a target="_blank" href="https://saude10clinica.com.br/">
                <img
                  className="companies-logos-imgs"
                  src={Saude10}
                  alt="Logo Saúde 10"
                  id="saude10"
                />
              </a>
              <a
                target="_blank"
                href="https://saude10clinica.com.br/"
                className="logo-link-button"
              >
                Clique e Acesse
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AlterarNome;
