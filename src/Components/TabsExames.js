import React from "react";

/* LIBS */
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

/* ICONS */
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaFlask } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { FaXRay } from "react-icons/fa";
import { FaLungs } from "react-icons/fa";
import { FaMedkit } from "react-icons/fa";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsExames() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabsContent = [
    {
      title: "Audiometria",
      icon: <FaAssistiveListeningSystems />,
      paragraph:
        "É um exame que avalia o grau de audição do ser humano, voltado especificamente para trabalhadores que são submetidos a ambientes barulhentos com risco de perda funcional do sentido da audição. É chamado audiometria ocupacional porque está relacionado com o trabalho, com a ocupação do colaborador dentro da empresa.",
      paragraphSeccond: "Pré-Requisitos",
      listItem: {
        1: " Repouso Auditivo de 16H",
        2: " Não usar fones 16H antes do exame",
      },
    },
    {
      title: "Acuidade Visual",
      icon: <FaEye />,
      paragraph:
        "O exame de acuidade visual é bastante utilizado na medicina do trabalho, em exames admissionais e demissionais e de rotina, analisando se a pessoa possui (ou não) déficit de visão que poderia causar riscos a ele mesmo, a outros trabalhadores e ao patrimônio da empresa. A baixa acuidade visual pode resultar de um decréscimo da visão periférica, da perda da visão das cores, da incapacidade ou perda de aptidão do olho para se ajustar à luz, contraste ou brilho.",
      paragraphSeccond: "Pré-Requisitos",
      listItem: {
        1: " Exames com Hora Marcada",
      },
    },
    {
      title: "Laboratóriais",
      icon: <FaFlask />,
      paragraph:
        "Os exames laboratoriais mais comuns em saúde ocupacional são: Glicemia de jejum; Hemograma completo; EAS (Urina tipo 1); Parasitológico de Fezez (PPF); Gama GT; Hepatites A, B e C; PSA; Beta HCG; Colesterol total; HDL; LDL; VLDL; VDRL; Ácido Urico; Coprocultura; Creatinina; entre outros, de acordo com a função e risco nela existente.",
      paragraphSeccond: "Pré - Requisitos",
      listItem: {
        1: " Exames com Hora Marcada",
        2: " Certos exames necessitam de jejum, favor consultar",
      },
    },
    {
      title: "Eletrocardiograma",
      icon: <FaHeartbeat />,
      paragraph:
        "Eletrocardiograma, ou como também é conhecido, ECG, é um exame que avalia a atividade elétrica do coração a partir de eletrodos fixados na pele. O resultado deste exame é registrado em gráficos que comparam a atividade cardíaca do paciente com o padrão, indicando se a atividade cardíaca está dentro da normalidade ou se há alterações nos músculos e nervos do coração. Esse exame é realizado em um aparelho – o eletrocardiógrafo. Esse aparelho registra as alterações de potencial elétrico entre dois pontos do corpo, gerando uma imagem linear, em ondas de padrão rítmico, as quais têm significações clínicas particulares reconhecidas pelo cardiologista.",
      paragraphSeccond: "Pré-Requisitos",
      listItem: {
        1: " Exames com Hora Marcada",
      },
    },
    {
      title: "Eletroencefalograma",
      icon: <FaBrain />,
      paragraph:
        "​O eletroencefalograma (EEG) ocupacional é um teste de diagnóstico que monitora a atividade elétrica cerebral do trabalhador, a fim de descartar distúrbios neurológicos ou de consciência. Trata-se de um teste simples, rápido, indolor e não invasivo, que avalia os impulsos elétricos durante alguns minutos e gera gráficos de linha. O procedimento é realizado com a fixação de eletrodos no couro cabeludo do empregado, que colhem dados sobre as ondas mentais e os enviam a um monitor, que pode ser analógico ou digital.",
      paragraphSeccond: "Pré - Requisitos",
      listItem: {
        1: " Exames com Hora Marcada",
        2: " Lavar a cabeça após o exame",
      },
    },
    {
      title: "Raio X",
      icon: <FaXRay />,
      paragraph:
        "​O Rx de tórax OIT é um exame específico para acompanhamento de doenças ocupacionais relacionadas ao trabalho.",
      paragraphSeccond: "Pré-Requisitos",
      listItem: {
        1: " Exames com Hora Marcada",
      },
    },
    {
      title: "Espirometria",
      icon: <FaLungs />,
      paragraph:
        "​O exame de espirometria ocupacional é um dos mais importantes para diagnosticar males respiratórios relacionados ao trabalho. Por isso, o teste aparece em Programas de Controle Médico de Saúde Ocupacional (PCMSO) de trabalhadores que desempenham diversas atividades econômicas, fornecendo dados essenciais para evitar agravos à sua saúde.",
      paragraphSeccond: "Pré-Requisitos",
      listItem: {
        1: " Exames com Hora Marcada",
      },
    },
  ];

  return (
    <>
      <section className="section-exams">
        <h1>Exames</h1>
        <Box sx={{ width: "60%", margin: "50px auto" }} id="box-tabs-exames">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
            >
              {tabsContent.map((item, i) => (
                <Tab
                  className="iconsTabsExams"
                  icon={item.icon}
                  {...a11yProps(i)}
                  label={item.title}
                  key={i}
                />
              ))}
            </Tabs>
          </Box>

          {tabsContent.map((item, i) => (
            <div className="tabs-container">
              <CustomTabPanel value={value} index={i} key={i}>
                <p className="title-tabs">{item.title}</p>
                <p className="paragraph-tabs">{item.paragraph}</p>
                <p className="paragraph-tabs-2">{item.paragraphSeccond}</p>
                <ul className="list-tabs">
                  {Object.values(item.listItem).map((listItem, index) => (
                    <li key={index} className="list-tabs-item">
                      <i>
                        <FaMedkit />
                      </i>
                      {listItem}
                    </li>
                  ))}
                </ul>

                <React.Fragment>
                  <Button variant="outlined" onClick={handleClickOpen}>
                    Ver Datas e Horários
                  </Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      Datas e Horários dos Exames <hr />
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        <p>
                          Clínica Barra da Tijuca: <br /> Segunda | Quarta |
                          Sexta.
                          <br />
                          Horários: 08:00 - 17:00.
                        </p>
                        <hr />
                        <p>
                          Clínica Nova América: <br />
                          Terças | Quintas. <br />
                          Horários: 08:00 - 17:00.
                        </p>
                        <hr />
                        <p>
                          Clínica Centro:
                          <br /> Segunda - Sexta. <br />
                          Horários: 08:00 - 17:00.
                        </p>
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} autoFocus>
                        FECHAR
                      </Button>
                    </DialogActions>
                  </Dialog>
                </React.Fragment>
              </CustomTabPanel>
            </div>
          ))}
        </Box>
      </section>
    </>
  );
}
