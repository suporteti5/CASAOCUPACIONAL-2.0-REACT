import React from "react";

const Welcome = () => {
  return (
    <>
      <section className="welcome-section">
        <div className="welcome-content-text">
          <p className="welcome-content-title">
            <span className="welcome-content-span">Seja bem vindo a </span>
            <br /> CASA OCUPACIONAL
          </p>
          <p className="welcome-content-paragraph">
            Nosso ecossistema de saúde ocupacional, resultado de 30 anos de
            experiência de nossos fundadores e 15 anos de atividades contínuas
            em diversas marcas, oferece uma abordagem integrada para atender às
            suas necessidades. Nosso lema é proporcionar tudo em um só lugar,
            embora com áreas de atendimento altamente especializadas.
          </p>
        </div>
        <div className="hours-open-container">
          <h5>Horário de Funcionamento</h5>
          <div className="opening-hours">
            <ul className="list-unstyled">
              <li>
                <span> Segunda à Sexta </span>
                <div> 07:30 - 17:30 </div>
              </li>
              <li>
                <span> Sábado - Domingo </span>
                <div> FECHADO </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
