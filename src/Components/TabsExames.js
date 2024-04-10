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
      paragraph: (
        <>
          O exame de acuidade visual é amplamente utilizado na medicina do
          trabalho, tanto em exames admissionais quanto demissionais e de
          rotina. <br />
          <br />
          Ele analisa se o indivíduo apresenta algum déficit de visão que possa
          representar riscos para si mesmo, para outros colegas de trabalho e
          para o patrimônio da empresa. <br />
          <br />
          Problemas como redução da visão periférica, perda da discriminação de
          cores e incapacidade de adaptação à luz, contraste ou brilho podem
          resultar em baixa acuidade visual. <br />
          <br />É essencial realizar esse exame de forma regular para garantir a
          segurança e a saúde no ambiente de trabalho.
        </>
      ),
      paragraphSeccond: "Pré-Requisitos",
      listItem: {
        1: " Repouso Auditivo de 16H",
        2: " Não usar fones 16H antes do exame",
      },
    },
    {
      title: "Acuidade Visual",
      icon: <FaEye />,
      paragraph: (
        <>
          {" "}
          O exame de acuidade visual é bastante utilizado na medicina do
          trabalho, em exames admissionais e demissionais e de rotina,
          analisando se a pessoa possui (ou não) déficit de visão que poderia
          causar riscos a ele mesmo, a outros trabalhadores e ao patrimônio da
          empresa.
          <br />
          <br /> A baixa acuidade visual pode resultar de um decréscimo da visão
          periférica, da perda da visão das cores, da incapacidade ou perda de
          aptidão do olho para se ajustar à luz, contraste ou brilho.
        </>
      ),
      paragraphSeccond: "Pré-Requisitos",
      listItem: {
        1: " Exames com Hora Marcada",
      },
    },
    {
      title: "Laboratóriais",
      icon: <FaFlask />,
      paragraph: (
        <>
          Na saúde ocupacional, diversos exames laboratoriais são frequentemente
          realizados para avaliar a saúde dos colaboradores. Entre os mais
          comuns, destacam-se: Glicemia de jejum, Hemograma completo, EAS (Urina
          tipo 1), Parasitológico de Fezes (EPF), Gama GT, Hepatites A, B e C,
          PSA, Beta HCG, Colesterol total, HDL, LDL, VLDL, VDRL, Ácido úrico,
          Coprocultura e Creatinina. <br />
          <br />A seleção dos exames é feita de acordo com a função desempenhada
          e os riscos associados à atividade.
        </>
      ),
      paragraphSeccond: "Pré - Requisitos",
      listItem: {
        1: " Exames com Hora Marcada",
        2: " Certos exames necessitam de jejum, favor consultar",
      },
    },
    {
      title: "Eletrocardiograma",
      icon: <FaHeartbeat />,
      paragraph: (
        <>
          Tire suas dúvidas sobre o eletrocardiograma (ECG), um exame essencial
          para avaliar a saúde do coração.
          <br />
          <br /> O eletrocardiograma é um procedimento que analisa a atividade
          elétrica do coração por meio de eletrodos colocados na pele. <br />
          <br />
          Os resultados são registrados em gráficos que comparam a atividade
          cardíaca do paciente com padrões normais, identificando possíveis
          alterações nos músculos e nervos cardíacos.
          <br />
          <br /> Esse exame é realizado com um aparelho específico, chamado
          eletrocardiógrafo, que registra as variações de potencial elétrico
          entre diferentes pontos do corpo, produzindo uma representação visual
          em forma de ondas.
          <br />
          <br />
          Esses padrões são interpretados pelo cardiologista para detectar
          quaisquer problemas cardíacos. <br />
          <br />
          Agende seu eletrocardiograma conosco e cuide da saúde do seu coração.
        </>
      ),
      paragraphSeccond: "Pré-Requisitos",
      listItem: {
        1: " Exames com Hora Marcada",
      },
    },
    {
      title: "Eletroencefalograma",
      icon: <FaBrain />,
      paragraph: (
        <>
          O eletroencefalograma (EEG) ocupacional é um exame diagnóstico
          utilizado para monitorar a atividade elétrica cerebral de
          trabalhadores, visando descartar possíveis distúrbios neurológicos ou
          de consciência. <br />
          <br />
          Trata-se de um procedimento simples, rápido, indolor e não invasivo,
          que registra os impulsos elétricos cerebrais em gráficos de linha.{" "}
          <br />
          <br />
          Durante o exame, eletrodos são fixados no couro cabeludo do paciente,
          coletando dados sobre as ondas mentais que são então enviados para
          análise em um monitor, podendo ser analógico ou digital.
        </>
      ),
      paragraphSeccond: "Pré - Requisitos",
      listItem: {
        1: " Exames com Hora Marcada",
        2: " Lavar a cabeça após o exame",
      },
    },
    {
      title: "Raio X",
      icon: <FaXRay />,
      paragraph: (
        <>
          O Rx de tórax OIT é um exame específico utilizado para acompanhar
          possíveis doenças ocupacionais relacionadas ao trabalho. <br />
          <br />
          Além deste, existem outros tipos de exames de raio-X que podem ser
          realizados para diversos fins, como diagnóstico de lesões,
          identificação de fraturas, avaliação de condições pulmonares, entre
          outros. <br />
          <br /> É importante ressaltar que a realização desses exames deve ser
          feita sob a orientação de um profissional de saúde qualificado, a fim
          de garantir resultados precisos e apropriados para cada situação.
          <br />
          <br />
          Entre em contato conosco para saber mais sobre os diferentes tipos de
          exames de raio-X disponíveis e como eles podem ser úteis para sua
          saúde e segurança ocupacional.
        </>
      ),
      paragraphSeccond: "Pré-Requisitos",
      listItem: {
        1: " Exames com Hora Marcada",
      },
    },
    {
      title: "Espirometria",
      icon: <FaLungs />,
      paragraph: (
        <>
          O exame de espirometria ocupacional é crucial para diagnosticar
          condições respiratórias relacionadas ao ambiente de trabalho. <br />
          <br /> Este teste é frequentemente incluído nos Programas de Controle
          Médico de Saúde Ocupacional (PCMSO) de trabalhadores de diversas
          áreas, fornecendo informações vitais para prevenir danos à saúde dos
          colaboradores.
        </>
      ),
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
