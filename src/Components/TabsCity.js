import React from "react";

/* LIBS */
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

/* ICONS */
import AL from "../Assets/Icons/AL.png";
import BA from "../Assets/Icons/BA.png";
import CE from "../Assets/Icons/CE.png";
import DF from "../Assets/Icons/DF.png";
import ES from "../Assets/Icons/ES.png";
import GO from "../Assets/Icons/GO.png";
import MG from "../Assets/Icons/MG.png";
import MT from "../Assets/Icons/MT.png";
import PA from "../Assets/Icons/PA.png";
import PB from "../Assets/Icons/PB.png";
import PE from "../Assets/Icons/PE.png";
import PI from "../Assets/Icons/PI.png";
import PR from "../Assets/Icons/PR.png";
import RJ from "../Assets/Icons/RJ.png";
import RN from "../Assets/Icons/RN.png";
import SP from "../Assets/Icons/SP.png";

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
      title: "Rio de Janeiro",
      icon: <img src={RJ} alt="Icone dos estados" />,
      id: 1,
      listItem: [
        "Centro",
        "Campo Grande",
        "Nova América",
        "Barra da Tijuca",
        "Duque de Caxias",
        "Campos",
        "Cabo Frio",
        "Barra Mansa",
        "Volta Redonda",
        "Três Rios",
        "Niterói",
        "Campos dos Goytacazes",
        "Teresópolis",
        "Nova Iguaçu",
        "Macaé",
        "Nova Friburgo",
        "Angra dos Reis",
        "Resende",
        "Itaperuna",
      ],
    },
    {
      title: "São Paulo",
      icon: <img src={SP} alt="Icone dos estados" />,
      id: 2,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em todas as regiões. Visando sempre o melhor atendimento e comodidade, estamos presentes nos seguintes locais:",
      listItem: [
        "Centro",
        "Campinas",
        "Lapa",
        "Santo Amaro",
        "Vila Clementino",
        "Sumaré",
        "São José do Rio Preto",
        "Bauru",
        "Jundiaí",
        "Ribeirão Preto",
        "Presidente Prudente",
      ],
    },
    {
      title: "Espírito Santo",
      icon: <img src={ES} alt="Icone dos estados" />,
      id: 3,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em todas as regiões. Visando sempre o melhor atendimento e comodidade, estamos presentes nos seguintes locais:",
      listItem: ["Vitória"],
    },
    {
      title: "Distrito Federal",
      icon: <img src={DF} alt="Icone dos estados" />,
      id: 4,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em todas as regiões. Visando sempre o melhor atendimento e comodidade, estamos presentes nos seguintes locais:",
      listItem: ["Brasília"],
    },
    {
      title: "Mato Grosso",
      icon: <img src={MT} alt="Icone dos estados" />,
      id: 5,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em todas as regiões. Visando sempre o melhor atendimento e comodidade, estamos presentes nos seguintes locais:",
      listItem: ["Cuiabá"],
    },
    {
      title: "Goiás",
      icon: <img src={GO} alt="Icone dos estados" />,
      id: 6,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em todas as regiões. Visando sempre o melhor atendimento e comodidade, estamos presentes nos seguintes locais:",
      listItem: ["Rio Verde", "Catalão", "Caldas Novas"],
    },
    {
      title: "Pernambuco",
      icon: <img src={PE} alt="Icone dos estados" />,
      id: 7,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em todas as regiões. Visando sempre o melhor atendimento e comodidade, estamos presentes nos seguintes locais:",
      listItem: ["Recife", "Cabo de Santo Agostinho"],
    },
    {
      title: "Bahia",
      icon: <img src={BA} alt="Icone dos estados" />,
      id: 8,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em todas as regiões. Visando sempre o melhor atendimento e comodidade, estamos presentes nos seguintes locais:",
      listItem: ["Salvador"],
    },
    {
      title: "Piauí",
      icon: <img src={PI} alt="Icone dos estados" />,
      id: 9,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em todas as regiões. Visando sempre o melhor atendimento e comodidade, estamos presentes nos seguintes locais:",
      listItem: ["Piauí"],
    },
    {
      title: "Alagoas",
      icon: <img src={AL} alt="Icone dos estados" />,
      id: 10,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em todas as regiões. Visando sempre o melhor atendimento e comodidade, estamos presentes nos seguintes locais:",
      listItem: ["Maceió"],
    },
    {
      title: "Paraiba",
      icon: <img src={PB} alt="Icone dos estados" />,
      id: 11,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em todas as regiões. Visando sempre o melhor atendimento e comodidade, estamos presentes nos seguintes locais:",
      listItem: ["Jõao Pessoa"],
    },
    {
      title: "Rio Grande do Norte",
      icon: <img src={RN} alt="Icone dos estados" />,
      id: 12,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em todas as regiões. Visando sempre o melhor atendimento e comodidade, estamos presentes nos seguintes locais:",
      listItem: ["Rio Grande Do Norte"],
    },
    {
      title: "Minas Gerais",
      icon: <img src={MG} alt="Icone dos estados" />,
      id: 13,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em todas as regiões. Visando sempre o melhor atendimento e comodidade, estamos presentes nos seguintes locais:",
      listItem: ["Belo Horizonte", "Lavras"],
    },
    {
      title: "Ceara",
      icon: <img src={CE} alt="Icone dos estados" />,
      id: 14,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em todas as regiões. Visando sempre o melhor atendimento e comodidade, estamos presentes nos seguintes locais:",
      listItem: ["Fortaleza", "Crateus", "Sobral"],
    },
    {
      title: "Parana",
      icon: <img src={PR} alt="Icone dos estados" />,
      id: 15,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em todas as regiões. Visando sempre o melhor atendimento e comodidade, estamos presentes nos seguintes locais:",
      listItem: ["Curitiba", "Parana"],
    },
    {
      title: "Para",
      icon: <img src={PA} alt="Icone dos estados" />,
      id: 16,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em todas as regiões. Visando sempre o melhor atendimento e comodidade, estamos presentes nos seguintes locais:",
      listItem: ["Belém"],
    },
  ];

  return (
    <>
      <section className="section-city" id="city">
        <h1>Locais de Atendimento</h1>
        <p className="section-city-p">
          Nossa missão é proporcionar acesso fácil e conveniente aos nossos
          serviços em todas as regiões. Comprometidos com o melhor atendimento e
          comodidade para nossos clientes, estamos presentes nos seguintes
          locais:
        </p>
        <Box sx={{ width: "60%", margin: "50px auto" }} id="box-tab-citys">
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
                  icon={item.icon}
                  {...a11yProps(i)}
                  label={item.title}
                  key={i}
                  id="tab-icon"
                />
              ))}
            </Tabs>
          </Box>

          {tabsContent.map((item, i) => (
            <div className="tabs-container" key={item.id}>
              <CustomTabPanel value={value} index={i}>
                <p className="title-tabs">{item.title}</p>
                <ul className="list-tabs" id="tabs-citys">
                  {Object.values(item.listItem).map((listItem, index) => (
                    <li
                      key={index}
                      className="list-tabs-item"
                      id="tabs-item-city"
                    >
                      {listItem}
                    </li>
                  ))}
                </ul>
              </CustomTabPanel>
            </div>
          ))}
        </Box>
      </section>
    </>
  );
}
