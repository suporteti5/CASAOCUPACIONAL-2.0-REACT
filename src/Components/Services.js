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
import { FaProjectDiagram } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa";
import { FaEnvira } from "react-icons/fa";

const Services = () => {
  const CardsMessage = [
    {
      icon: <FaProjectDiagram />,
      title: "Controle legal de Terceiros e Quarteirizados",
      content:
        "Gerenciamos todos os documentos essenciais para os trabalhos de risco de seus terceirizados e .",
      contentFull:
        "Gerenciamos todos os documentos essenciais para os trabalhos de risco de seus terceirizados e quarteirizados, proporcionando-lhe tranquilidade. Reforçamos a recomendação de evitar a terceirização ou quarteirização em sua empresa, negócio ou condomínio sem a realização prévia de estudos e monitoramento adequados. Essa abordagem é crucial para identificar quais documentos e treinamentos são necessários, garantindo uma operação segura e em conformidade com as normas vigentes.",
    },
    {
      icon: <FaStethoscope />,
      title: "Exames e Consultas",
      content:
        "Realizamos consultas clínicas e com especialistas em diversas modalidades. Para mais informações sobre.",
      contentFull:
        "Realizamos consultas clínicas e com especialistas em diversas modalidades. Para mais informações sobre uma clínica específica ou consultório, recomendamos consultar a página dedicada a cada um deles.",
    },
    {
      icon: <FaAmbulance />,
      title: "Ambulatório Médico",
      content:
        "Realizamos a Gestão de Ambulatório dentro das empresas, através de práticas e procedimentos modernos.",
      contentFull:
        "Realizamos a gestão de ambulatório dentro das empresas, empregando práticas e procedimentos modernos com o objetivo de reduzir o absenteísmo. Oferecemos essa gestão com ou sem fornecimento de mão de obra, proporcionando soluções adaptadas às necessidades específicas de cada cliente.",
    },
    {
      icon: <FaEnvira />,
      title: "Monitoramento Ambiental",
      content:
        "Realizamos todos os tipos de monitoramentos ambientais e Ocupacionais.",
      contentFull:
        "Realizamos todos os tipos de monitoramentos ambientais e Ocupacionais.",
    },
    {
      icon: <FaFolder />,
      title: "PCMSO",
      content:
        "Realizamos Exames Admissionais, Periódicos e Demissionais em todos os estados do Brasil seja por meio.",
      contentFull:
        "Realizamos Exames Admissionais, Periódicos e Demissionais em todos os estados do Brasil, seja por meio de clínicas próprias ou convênios. Oferecemos a opção de administração por vida, assegurando responsabilidade técnica, ou elaboramos apenas os documentos necessários, conforme a preferência do cliente.",
    },
    {
      icon: <FaFolder />,
      title: "PPP, LTCAT, Perícias",
      content:
        "Oferecemos o gerenciamento completo de todos os documentos essenciais para os trabalhos de .",
      contentFull:
        "Oferecemos o gerenciamento completo de todos os documentos essenciais para os trabalhos de risco de seus terceirizados e quarteirizados, proporcionando-lhe tranquilidade. Reforçamos a recomendação de evitar a terceirização ou quarteirização em sua empresa, negócio ou condomínio sem a realização prévia de estudos e monitoramento adequados. Essa abordagem é crucial para identificar os documentos e treinamentos necessários, garantindo uma operação segura e em conformidade com as normas vigentes.",
    },
    ,
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
