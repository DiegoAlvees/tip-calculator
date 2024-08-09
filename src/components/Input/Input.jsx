import PropTypes from "prop-types";
import './input.module.css'

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func
};

export default function Input({ type, value, placeholder, className, onChange }) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  );
}
