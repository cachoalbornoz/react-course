import PropTypes from "prop-types";

function Button({ text = "Click me" }) {
  return <button>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
