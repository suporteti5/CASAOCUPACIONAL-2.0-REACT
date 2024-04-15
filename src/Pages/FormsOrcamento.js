import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

const FormsOrcamento = () => {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    businessSector: "",
    city: "",
    cnpj: "",
    companyName: "",
    contactName: "",
    emailBody: "",
    emailFrom: "naoresponder@ammarhes.com.br",
    emailSubject: "",
    emailTo: "",
    employeeCount: "",
    nameFrom: "Não Responder",
    nameTo: "",
    phone: "",
    serviceAddress: "",
    servicesInterest: [],
    servicesInterestOther: "",
    state: "",
  });
  const [alertVisible, setAlertVisible] = useState(null);

  const handleCaptchaVerify = () => {
    setIsCaptchaVerified(true);
  };

  const handleCaptchaExpire = () => {
    setIsCaptchaVerified(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: [...prevData[name], value],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: prevData[name].filter((item) => item !== value),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
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
    }finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="form-section">
      <div className="form-title">
        <h3>Faça seu orçamento</h3>
      </div>
      <div className="form">
        <Form onSubmit={handleSubmit}>
          <div className="form-questions">
            <Form.Group className="mb-3" controlId="formNomeEmpresa">
              <Form.Label>Nome da Empresa</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o nome da empresa"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCNPJ">
              <Form.Label>CNPJ</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o CNPJ da empresa"
                name="cnpj"
                value={formData.cnpj}
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

            <Form.Group className="mb-3" controlId="formEstado">
              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o estado da empresa"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCidade">
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite a cidade da empresa"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNomeContato">
              <Form.Label>Nome do Contato</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o nome do contato"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTelefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o telefone do contato"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formQtdFuncionarios">
              <Form.Label>Quantidade de Funcionários</Form.Label>
              <Form.Control
                type="number"
                placeholder="Digite a quantidade de funcionários"
                name="employeeCount"
                value={formData.employeeCount}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEndereco">
              <Form.Label>Endereço do Local do Serviço</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o endereço do local do serviço"
                name="serviceAddress"
                value={formData.serviceAddress}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRamoAtividade">
              <Form.Label>Ramo de Atividade da Empresa</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o ramo de atividade da empresa"
                name="businessSector"
                value={formData.businessSector}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formServicosInteresse">
              <Form.Label>Quais serviços tem interesse</Form.Label>
              <div className="ServicosInteresseOptions">
                <Form.Check
                  type="checkbox"
                  label="PGR"
                  name="servicesInterest"
                  value="PGR"
                  checked={formData.servicesInterest.includes("PGR")}
                  onChange={handleCheckboxChange}
                />
                <Form.Check
                  type="checkbox"
                  label="PCMSO (Documento)"
                  name="servicesInterest"
                  value="PCMSO (Documento)"
                  checked={formData.servicesInterest.includes(
                    "PCMSO (Documento)"
                  )}
                  onChange={handleCheckboxChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Laudo Periculosidade"
                  name="servicesInterest"
                  value="Laudo Periculosidade"
                  checked={formData.servicesInterest.includes(
                    "Laudo Periculosidade"
                  )}
                  onChange={handleCheckboxChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Laudo Insalubridade"
                  name="servicesInterest"
                  value="Laudo Insalubridade"
                  checked={formData.servicesInterest.includes(
                    "Laudo Insalubridade"
                  )}
                  onChange={handleCheckboxChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Gerenciamento de PCMSO"
                  name="servicesInterest"
                  value="Gerenciamento de PCMSO"
                  checked={formData.servicesInterest.includes(
                    "Gerenciamento de PCMSO"
                  )}
                  onChange={handleCheckboxChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Exames Ocupacionais"
                  name="servicesInterest"
                  value="Exames Ocupacionais"
                  checked={formData.servicesInterest.includes(
                    "Exames Ocupacionais"
                  )}
                  onChange={handleCheckboxChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Treinamento - CIPA"
                  name="servicesInterest"
                  value="Treinamento - CIPA"
                  checked={formData.servicesInterest.includes(
                    "Treinamento - CIPA"
                  )}
                  onChange={handleCheckboxChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Treinamento - NR-33"
                  name="servicesInterest"
                  value="Treinamento - NR-33"
                  checked={formData.servicesInterest.includes(
                    "Treinamento - NR-33"
                  )}
                  onChange={handleCheckboxChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Treinamento - NR-35"
                  name="servicesInterest"
                  value="Treinamento - NR-35"
                  checked={formData.servicesInterest.includes(
                    "Treinamento - NR-35"
                  )}
                  onChange={handleCheckboxChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Envio Eventos de SST E-Social"
                  name="servicesInterest"
                  value="Envio Eventos de SST E-Social"
                  checked={formData.servicesInterest.includes(
                    "Envio Eventos de SST E-Social"
                  )}
                  onChange={handleCheckboxChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Outros..(Descreva abaixo)"
                  name="servicesInterest"
                  value="Outros..(Descreva abaixo)"
                  checked={formData.servicesInterest.includes(
                    "Outros..(Descreva abaixo)"
                  )}
                  onChange={handleCheckboxChange}
                />
              </div>
              {formData.servicesInterest.includes(
                "Outros..(Descreva abaixo)"
              ) && (
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Descreva outros serviços de interesse"
                  name="servicesInterestOther"
                  value={formData.servicesInterestOther}
                  onChange={handleChange}
                  required
                />
              )}
            </Form.Group>
          </div>
          <ReCAPTCHA
            sitekey= /* API KEY GOOGLE V2 */ 'dsad'
            onChange={handleCaptchaVerify}
            onExpired={handleCaptchaExpire}
          />
             <Button
            variant="primary"
            type="submit"
            id="form-submit"
            disabled={!isCaptchaVerified || isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </Button>
        </Form>
        <div id="alertForm">
          {alertVisible ? (
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
              Orçamento enviado com sucesso!
            </Alert>
          ) : (
            <Alert variant="filled" severity="error">
              Erro ao enviar o orçamento!
            </Alert>
          )}
        </div>
      </div>
    </section>
  );
};

export default FormsOrcamento;
