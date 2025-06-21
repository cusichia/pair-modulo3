import PropTypes from "prop-types";

function SendButton({isValidForm}) {
  return (
   <>
        <input
          className="button"
          type="submit"
          value="Enviar"
          disabled={isValidForm() === false}
        />
   </>
  )
}

export default SendButton



SendButton.propTypes = {
    isValidForm: PropTypes.func,
  };