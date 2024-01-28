import PropTypes from "prop-types";
import "../assets/css/partials/Button.css";

function AddButton({ text, onClick }) {
  return (
    <div className="submit" onClick={onClick}>
      <div className="add-products">{text}</div>
    </div>
  );
}

AddButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AddButton;
