import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components.css";
import "./Pages.css";
/* Components */
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTopButton from "./Components/ScrollButton";

/* Pages */
import Homepage from "./Pages/Homepage";
import FormOrcamento from "./Pages/FormsOrcamento";
import FormsContact from "./Pages/FormsContact";
import Atendimento from "./Pages/Atendimento";
import Clinicas from "./Pages/Clinicas";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/atendimento" element={<Atendimento />} />
          <Route path="/orcamento" element={<FormOrcamento />} />
          <Route path="/contato" element={<FormsContact />} />
          <Route path="/clinicas" element={<Clinicas />} />
        </Routes>
        <ScrollToTopButton />
        {<Footer />}{" "}
      </BrowserRouter>
    </>
  );
}

export default App;
