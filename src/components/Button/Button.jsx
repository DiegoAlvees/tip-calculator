import PropTypes from "prop-types";
import './button.module.css'

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default function Button({ text, onClick, className, type = "button" }) {
  return (
    <button 
    type={type} 
    className={className} 
    onClick={onClick}>
      {text}
    </button>
  );
}
