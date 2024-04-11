import React from "react";

/* Icons */

import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

/* IMGS */
import logoCasa from "../Assets/Logos/LogoCasaWhite.png";

const FooterPage = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <img src={logoCasa} alt="Logo Casa" />
          <p>
            Buscamos disponibilidade e soluções completas em segurança e saúde
            ocupacional ao nossos clientes.
          </p>
        </div>
        <div className="footer-content1">
          <p>
            <a
              className="span-footer"
              href="https://casaocupacional.com.br/"
              target="_blank"
            >
              CASA OCUPACIONAL MARKETPLACE LTDA - CNPJ: 43.868.655/0001-99
            </a>
          </p>
          <p>
            <IoIosMail />
            <a href="mailto:comercial@ammarhes.com.br">
              Comercial:
              <span className="span-footer"> comercial@ammarhes.com.br</span>
            </a>
          </p>
          <p>
            <FaPhoneAlt />
            <a className="span-footer" href="tel:+552135491640">
              +55 (21) 3549-1640
            </a>
          </p>
          <p>
            <FaPhoneAlt />
            <a className="span-footer" href="tel:+552120260011">
              +55 (21) 2026-0011
            </a>
          </p>
          <p>
            <FaPhoneAlt />
            <a className="span-footer" href="tel:+552122629752">
              +55 (21) 2262-9752
            </a>
          </p>
        </div>
      </div>
      <hr />
      <div className="bottom-footer">
        <div className="socialMedias">
          <a
            href="https://www.facebook.com/Ammarhesconsultoria/"
            aria-label="https://www.facebook.com/Ammarhesconsultoria/"
            target="_blank"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://www.linkedin.com/in/ammarhesconsultoria/"
            aria-label="https://www.linkedin.com/in/ammarhesconsultoria/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/ammarhesconsultoria/"
            aria-label="https://www.instagram.com/ammarhesconsultoria/"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>
        &copy; {new Date().getFullYear()} Copyright:
        <p>Casa Ocupacional: </p>
      </div>
    </footer>
  );
};

export default FooterPage;
