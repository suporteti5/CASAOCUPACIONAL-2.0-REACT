import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components.css";
import "./Pages.css";
/* Components */
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";

/* Pages */
import Homepage from "./Pages/Homepage";
import FormOrcamento from "./Pages/FormsOrcamento";
import Atendimento from "./Pages/Atendimento";
import Clinicas from "./Pages/Clinicas";

function App() {
  return (
    <>
      <BrowserRouter>
        {/*                  <NavBar />
         */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/atendimento" element={<Atendimento />} />
          <Route path="/orcamento" element={<FormOrcamento />} />
          <Route path="/clinicas" element={<Clinicas />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
