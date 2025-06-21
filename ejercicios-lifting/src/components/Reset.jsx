import PropTypes from "prop-types";

function Reset({handleResetButton}) {
  return (
   <>
        <button className="button reset" onClick={handleResetButton}>
          Limpiar el formulario
        </button>
   </>
  )
}

export default Reset



Reset.propTypes = {
    handleResetButton: PropTypes.func,
  };