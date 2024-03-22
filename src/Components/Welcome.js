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
            Ao nosso ecossistema de saúde ocupacinal, fruto de 30 anos de
            experiencia de seus fundadores e 15 anos ininterruptos de atividades
            em diversas marcas. Tudo em um só lugar passa a ser nosso lema de
            atendimento, porém com áreas muito especificas de atendimento
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
                <span> Sabado - Domingo </span>
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
