import React, { useState } from "react";

/* LIBS */
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

/* ICONS */

import { FaFolder } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa";
import { FaEnvira } from "react-icons/fa";

const Services = () => {
  const CardsMessage = [
    {
      icon: <FaFolder />,
      title: "Controle legal de Terceiros e Quarteirizados",
      content:
        "Temos expertise em gerenciar todos os documentos cruciais para as atividades de risco de seus.",
      contentFull: (
        <>
          Temos expertise em gerenciar todos os documentos cruciais para as
          atividades de risco de seus terceirizados e quarteirizados.
          <br />
          <br />
          Reforçamos a importância de evitar terceirizações ou quarteirizações
          em sua empresa, negócio ou condomínio sem realizar estudos e
          monitoramentos adequados.
          <br />
          <br />
          Essa abordagem é vital para identificar os documentos e treinamentos
          necessários, assegurando uma operação segura e em conformidade com as
          normas vigentes.
          <br />
          <br />
          Entre em contato conosco para uma consultoria especializada e proteja
          seu empreendimento contra potenciais riscos.
        </>
      ),
    },
    {
      icon: <FaStethoscope />,
      title: "Exames e Consultas",
      content:
        "Oferecemos uma variedade de consultas clínicas e especializadas em diversas modalidades. Para.",
      contentFull: (
        <>
          Oferecemos uma variedade de consultas clínicas e especializadas em
          diversas modalidades.
          <br />
          <br />
          Para obter informações mais detalhadas sobre cada uma de nossas
          clínicas ou consultórios, sugerimos visitar as páginas dedicadas a
          cada serviço.
        </>
      ),
    },
    {
      icon: <FaAmbulance />,
      title: "Ambulatório Médico",
      content:
        "Oferecemos serviços de gestão de ambulatório empresarial, utilizando práticas modernas e eficazes.",
      contentFull: (
        <>
          Oferecemos serviços de gestão de ambulatório empresarial, utilizando
          práticas modernas e eficazes para combater o absenteísmo.
          <br />
          <br />
          Nossa abordagem flexível inclui opções com ou sem fornecimento de mão
          de obra, adaptando-se às demandas individuais de cada cliente.
          <br />
          <br />
          Conte conosco para soluções personalizadas que promovem um ambiente de
          trabalho mais saudável e produtivo.
        </>
      ),
    },
    {
      icon: <FaEnvira />,
      title: "Monitoramento Ambiental",
      content:
        "Oferecemos uma ampla gama de serviços de monitoramento ambiental e ocupacional.",
      contentFull: (
        <>
          Oferecemos uma ampla gama de serviços de monitoramento ambiental e
          ocupacional, abrangendo todas as necessidades e exigências
          regulatórias.
          <br />
          <br />
          Nossa equipe especializada realiza uma variedade de monitoramentos
          para garantir a segurança e o cumprimento das normas, proporcionando
          tranquilidade e conformidade aos nossos clientes.
        </>
      ),
    },
    {
      icon: <FaFolder />,
      title: "PCMSO",
      content:
        "Oferecemos serviços completos de Saúde Ocupacional, incluindo Exames Admissionais, Periódicos.",
      contentFull: (
        <>
          Oferecemos serviços completos de Saúde Ocupacional, incluindo Exames
          Admissionais, Periódicos e Demissionais, em todo o território
          brasileiro.
          <br />
          <br />
          Contamos com clínicas próprias e parcerias em diversos estados.
          <br />
          <br />
          Proporcionamos flexibilidade aos clientes, oferecendo a opção de
          administração contínua, garantindo responsabilidade técnica, ou
          elaborando apenas os documentos necessários, conforme a preferência de
          cada cliente.
          <br />
          <br />
          Nossa equipe está comprometida em garantir a conformidade com o
          eSocial e todas as normas de segurança do trabalho vigentes.
        </>
      ),
    },
    {
      icon: <FaFolder />,
      title: "PPP, LTCAT, Perícias",
      content:
        "Oferecemos um serviço abrangente de gerenciamento de documentos essenciais para as.",
      contentFull: (
        <>
          Oferecemos um serviço abrangente de gerenciamento de documentos
          essenciais para as operações de terceirizados e quarteirizados,
          proporcionando-lhe total tranquilidade.
          <br />
          <br />
          É altamente recomendável evitar a terceirização ou quarteirização em
          sua empresa, negócio ou condomínio sem a devida análise prévia e
          monitoramento constante.
          <br />
          <br />
          Essa abordagem é fundamental para identificar os documentos e
          treinamentos necessários, assegurando uma operação segura e em
          conformidade com as normas vigentes.
          <br />
          <br />
          Conte conosco para garantir a segurança e o cumprimento das exigências
          legais em seu ambiente de trabalho.
        </>
      ),
    },
  ];

  const [openDialogs, setOpenDialogs] = useState(
    Array(CardsMessage.length).fill(false)
  );

  const handleClickOpen = (i) => {
    const newOpenDialogs = [...openDialogs];
    newOpenDialogs[i] = true;
    setOpenDialogs(newOpenDialogs);
  };

  const handleClose = (i) => {
    const newOpenDialogs = [...openDialogs];
    newOpenDialogs[i] = false;
    setOpenDialogs(newOpenDialogs);
  };

  return (
    <>
      <section className="section-service">
        <div className="services-container">
          <h3>Principais Serviços</h3>
          <div className="grid-container">
            {CardsMessage.map((item, i) => (
              <div className="grid-items" key={i}>
                <i href="#"> {item.icon}</i>
                <div className="content">
                  <h5>{item.title}</h5>
                  <p>
                    {item.content}...
                    <React.Fragment key={i}>
                      <Button
                        className="button-open-alert2"
                        onClick={() => handleClickOpen(i)}
                      >
                        Ver mais
                      </Button>

                      <Dialog
                        open={openDialogs[i]}
                        onClose={() => handleClose(i)}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle className="alert-dialog-title">
                          {item.icon} - {item.title}
                        </DialogTitle>

                        <DialogContent>
                          <DialogContentText className="alert-dialog-description">
                            {item.contentFull}
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button
                            onClick={() => handleClose(i)}
                            id="alert-dialog-close-button"
                          >
                            Fechar
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </React.Fragment>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
