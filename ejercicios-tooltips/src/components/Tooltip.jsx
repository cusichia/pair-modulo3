import PropTypes from "prop-types"

function Tooltip({children}) {
  return (
    <>
    <p>?</p>
    <div>{children}</div>
    </>
  )
}

export default Tooltip

Tooltip.propTypes = {children:PropTypes.node} 