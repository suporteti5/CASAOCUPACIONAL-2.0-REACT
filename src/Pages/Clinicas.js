import React, { useState } from "react";
import { UserCard } from "react-ui-cards";

/* LIBS */
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

/* IMGS */

import NaIMG from "../Assets/IMGS/nova-america.jpg";
import DimensionIMG from "../Assets/IMGS/dimension.jpg";
import CentroIMG from "../Assets/IMGS/uruguaiana.jpg";

const ButtonComponent = (props) => {
  const exames = [];

  const [openDialogs, setOpenDialogs] = useState(
    Array(exames.length).fill(false)
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
      <React.Fragment>
        <Button id="buttons-clinica-page" onClick={() => handleClickOpen(1)}>
          Veja Nossos Exames
        </Button>

        <Dialog
          open={openDialogs[1]}
          onClose={() => handleClose(1)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title-clinica-page">
            Lista de nossos exames
          </DialogTitle>

          <DialogContent>
            <DialogContentText id="alert-dialog-clinica-page">
              {props.exames}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => handleClose(1)}
              id="alert-dialog-close-clinica-page"
            >
              Fechar
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </>
  );
};

const ButtonHorariosComponent = (props) => {
  const exames = [];

  const [openDialogs, setOpenDialogs] = useState(
    Array(exames.length).fill(false)
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
      <React.Fragment>
        <Button id="buttons-clinica-page" onClick={() => handleClickOpen(1)}>
          Veja Nossos Horarios
        </Button>

        <Dialog
          open={openDialogs[1]}
          onClose={() => handleClose(1)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title-clinica-page">
            Horarios{" "}
          </DialogTitle>

          <DialogContent>
            <DialogContentText id="alert-dialog-clinica-page">
              {props.horario}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => handleClose(1)}
              id="alert-dialog-close-clinica-page"
            >
              Fechar
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </>
  );
};

const Clinicas = () => {
  return (
    <>
      <main>
        <section className="novaAmerica">
          <div className="container-clinica">
            <div className="content-clinica">
              <h2>Clinica Nova America</h2>
              <p>Cuidando do seu bem estar</p>
              <div className="buttons">
                <ButtonComponent
                  exames={
                    <p>
                      Audiometria
                      <br />
                      Visual
                      <br />
                      laboratoriais
                      <br />
                      Eletrocardiograma
                      <br />
                      Eletroencefalograma
                      <br />
                      Espirometria
                    </p>
                  }
                />
                <ButtonHorariosComponent
                  horario={
                    <p className="p-dialog-clinica-page">
                      Ter: 08hrs - 17hrs <br />
                      Qui: 08hrs - 17hrs <br />
                    </p>
                  }
                />
              </div>
            </div>
            <div className="location-clinicas">
              <UserCard
                float
                href={
                  "https://www.google.com/maps/place/Av.+Pres.+Vargas,+542+-+1315+-+Centro,+Rio+de+Janeiro+-+RJ,+20071-000/@-22.9014949,-43.183466,17z/data=!3m1!4b1!4m5!3m4!1s0x997f5c68e5d6b1:0x39c0154b5b313b5d!8m2!3d-22.9014949!4d-43.1812773s"
                }
                target="_blank"
                header={NaIMG}
                positionName="Av. Pastor Martin Luther King Júnior, 126 Shopping Nova América Office 3000, Sl. 801, Rio de Janeiro - RJ"
              />
            </div>
          </div>
        </section>{" "}
        <hr />
        <section className="centro">
          <div className="container-clinica">
            <div className="location-clinicas">
              <UserCard
                float
                href={
                  "https://www.google.com/maps/place/Av.+Pres.+Vargas,+542+-+1315+-+Centro,+Rio+de+Janeiro+-+RJ,+20071-000/@-22.9014949,-43.183466,17z/data=!3m1!4b1!4m5!3m4!1s0x997f5c68e5d6b1:0x39c0154b5b313b5d!8m2!3d-22.9014949!4d-43.1812773s"
                }
                target="_blank"
                header={CentroIMG}
                positionName="Av.  Presidente  Vargas   435, SALA 1502,  Centro,  Rio de Janeiro  -  RJ,  20071-904, (Próximo a estação uruguaina do metro)"
                name="Uruguaiana - Centro"
              />
            </div>{" "}
            <div className="content-clinica">
              <h2>Clinica Centro</h2>
              <p>Cuidando do seu bem estar</p>
              <div className="buttons">
                <ButtonComponent
                  exames={
                    <p>
                      Audiometria
                      <br />
                      Visual
                      <br />
                      laboratoriais
                      <br />
                      Eletrocardiograma
                      <br />
                      Eletroencefalograma
                      <br />
                      Raio-X
                      <br />
                      Espirometria
                    </p>
                  }
                />
                <ButtonHorariosComponent
                  horario={
                    <p className="p-dialog-clinica-page">
                      Seg: 08hrs - 17hrs <br />
                      Ter: 08hrs - 17hrs <br />
                      Qua: 08hrs - 17hrs <br />
                      Qui: 08hrs - 17hrs <br />
                      Sex: 08hrs - 17hrs <br />
                    </p>
                  }
                />
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className="barra">
          <div className="container-clinica">
            <div className="content-clinica">
              <h2>Clinica Barra da Tijuca</h2>
              <p>Cuidando do seu bem estar</p>
              <div className="buttons">
                <ButtonComponent
                  exames={
                    <p>
                      Audiometria
                      <br />
                      Visual
                      <br />
                      laboratoriais
                      <br />
                      Eletrocardiograma
                      <br />
                      Eletroencefalograma
                      <br />
                      Raio-X
                      <br />
                      Espirometria
                    </p>
                  }
                />
                <ButtonHorariosComponent
                  horario={
                    <p className="p-dialog-clinica-page">
                      Seg: 08hrs - 17hrs <br />
                      Qua: 08hrs - 17hrs <br />
                      Sex: 08hrs - 17hrs <br />
                    </p>
                  }
                />
              </div>
            </div>
            <div className="location-clinicas">
              <UserCard
                float
                href={
                  "https://www.google.com/maps/place/Cl%C3%ADnica+Sa%C3%BAde+10/@-22.9738475,-43.3679368,17z/data=!3m1!4b1!4m5!3m4!1s0x9bd980fbb4ed03:0x5dd84404fb5975c2!8m2!3d-22.9738475!4d-43.3657481"
                }
                target="_blank"
                header={DimensionIMG}
                positionName="Av. Abelardo Bueno, 1 - loja 108 , Barra da Tijuca,  22790-703. (Em frente a Estação Centro-Metropolitano do BRT)"
                name="Barra da Tijuca"
              />
            </div>
          </div>
        </section>
      </main>
      );
    </>
  );
};

export default Clinicas;
