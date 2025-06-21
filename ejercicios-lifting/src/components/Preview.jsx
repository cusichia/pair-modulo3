import PropTypes from "prop-types";

function Preview({name, email, region, renderPaymentTypeText, legalTerms}) {
  return (
    <>
    <div className="preview">
          <h2>Tus datos son:</h2>
          <ul>
            <li>Nombre: {name}</li>
            <li>Email: {email}</li>
            <li>Región: {region}</li>
            <li>Método de pago: {renderPaymentTypeText()}</li>
            <li>
              Has aceptado nuestros términos legales:{" "}
              {legalTerms === true ? "Sí" : "No"}
            </li>
          </ul>
        </div>
    </>
  )
}

export default Preview


Preview.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    paymentType: PropTypes.string,
    legalTerms: PropTypes.bool.isRequired,
    handlePaymentType: PropTypes.func,
    renderPaymentTypeText: PropTypes.func,
  };