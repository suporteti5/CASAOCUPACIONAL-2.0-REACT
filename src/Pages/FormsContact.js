import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

const Contact = () => {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleCaptchaVerify = () => {
    setIsCaptchaVerified(true);
  };

  const handleCaptchaExpire = () => {
    setIsCaptchaVerified(false);
  };

  const [formData, setFormData] = useState({
    nameFrom: "Não Responder",
    emailFrom: "naoresponder@ammarhes.com.br",
    nameTo: "",
    emailTo: "",
    emailSubject: "",
    emailBody: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const [alertVisible, setAlertVisible] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Formulário em processo de envio:", formData);

    try {
      const response = await fetch(
        "http://localhost:3001/enviar-email",
        /* Substituir pela url do servidor. */ {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        document.getElementById("alertForm").style.display = "block";
        setAlertVisible(true);
      } else {
        document.getElementById("alertForm").style.display = "block";
        setAlertVisible(false);
      }
    } catch (error) {
      document.getElementById("alertForm").style.display = "block";
      setAlertVisible(false);
    }
  };

  return (
    <section className="form-section">
      <div className="form-title">
        <h3>Contato</h3>
      </div>
      <div className="form">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite seu nome"
              name="nameTo"
              value={formData.nameTo}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu email"
              name="emailTo"
              value={formData.emailTo}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAssunto">
            <Form.Label>Assunto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o assunto"
              name="emailSubject"
              value={formData.emailSubject}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMensagem">
            <Form.Label>Mensagem</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Digite sua mensagem"
              name="emailBody"
              value={formData.emailBody}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <ReCAPTCHA
            sitekey=/* "6LfEXpApAAAAAF04IFIPWlaX5UrXapz-m8Sh6Yqa" */ "6LcVVY8pAAAAAFY1bnUCTcnVlvdDSClEMmYKO2bj"
            onChange={handleCaptchaVerify}
            onExpired={handleCaptchaExpire}
          />
          <Button
            variant="primary"
            type="submit"
            id="form-submit"
            disabled={!isCaptchaVerified}
          >
            Enviar
          </Button>
        </Form>
        <div id="alertForm">
          {alertVisible ? (
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
              Mensagem enviada com sucesso!
            </Alert>
          ) : (
            <Alert variant="filled" severity="error">
              Erro ao enviar o formulario!
            </Alert>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
