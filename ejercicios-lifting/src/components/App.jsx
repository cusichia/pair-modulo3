import { useState } from "react";
import Form from "./Form.jsx";
import Preview from "./Preview.jsx"
import SendButton from "./SendButton.jsx"
import Reset from "./Reset.jsx"

function App  () {
  // Estados del componente
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("España peninsular"); // Iniciamos el componente con la primera opción del select
  const [paymentType, setPaymentType] = useState("");
  const [legalTerms, setLegalTerms] = useState(false);

  // Eventos
  const handleName = (ev) => {
    setName(ev.target.value);
  };

  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };

  const handleRegion = (ev) => {
    setRegion(ev.target.value);
  };

  const handlePaymentType = (ev) => {
    setPaymentType(ev.target.value);
  };

  const handleLegalTerms = (ev) => {
    // Como lo que nos interesa es si está activo o no, guardamos el checked
    setLegalTerms(ev.target.checked);
  };

  const handleResetButton = () => {
    // Ponemos los mismos valores que hemos usado arriba en los useState
    setName("");
    setEmail("");
    setRegion("España peninsular");
    setPaymentType("");
    setLegalTerms(false);
  };

  const handleForm = (ev) => {
    ev.preventDefault();
    console.log("Enviando datos al servidor...");
  };

  // Funciones que nos ayudan a renderizar
  const renderPaymentTypeText = () => {
    if (paymentType === "creditCard") {
      return "Tarjeta de crédito";
    } else if (paymentType === "cash") {
      return "Efectivo";
    } else if (paymentType === "cashOnDelivery") {
      return "Contra reembolso";
    }
  };

  const isValidForm = () => {
    // El formulario solo es válido cuando los inputs de tipo texto no estén vacíos, cuando se haya marcado un tipo de pago y cuando los términos legales sean true
    // También podríamos comprobar que el email tiene el formato correcto, pero no queremos complicar este ejemplo
    if (
      name !== "" &&
      email !== "" &&
      paymentType !== "" &&
      legalTerms === true
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <Form handleForm={handleForm}
      handleName={handleName} name={name} handleEmail={handleEmail} email={email} handleRegion={handleRegion} region={region} handlePaymentType={handlePaymentType} paymentType={paymentType} handleLegalTerms={handleLegalTerms} legalTerms={legalTerms}/>
      <Preview name={name} email={email} region={region} renderPaymentTypeText={renderPaymentTypeText} legalTerms={legalTerms}></Preview>
        

        {/* send */}
        {/* Este botón debe estar inhabilitado mientras el formulario no sea válido */}
        <SendButton isValidForm={isValidForm}></SendButton>

        {/* reset */}
        <Reset handleResetButton={handleResetButton}></Reset>
      
    </div>
  );
};

export default App;