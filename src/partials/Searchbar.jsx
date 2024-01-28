import PropTypes from "prop-types";
import "../assets/css/partials/SearchBar.css";

function SearchBarButton({ value, onChange, placeholder }) {
  return (
    <div className="searchbar">
      <div className="searchbar-container">
        <svg
          className="searchbar-vector"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.7394 15.2936L12.8856 11.4398C13.8135 10.2046 14.3143 8.70115 14.3126 7.15632C14.3126 3.21035 11.1023 0 7.15632 0C3.21035 0 0 3.21035 0 7.15632C0 11.1023 3.21035 14.3126 7.15632 14.3126C8.70115 14.3143 10.2046 13.8135 11.4398 12.8856L15.2936 16.7394C15.4887 16.9138 15.7431 17.0069 16.0047 16.9996C16.2662 16.9923 16.5151 16.8851 16.7001 16.7001C16.8851 16.5151 16.9923 16.2662 16.9996 16.0047C17.0069 15.7431 16.9138 15.4887 16.7394 15.2936ZM2.04466 7.15632C2.04466 6.14533 2.34446 5.15704 2.90613 4.31644C3.46781 3.47583 4.26614 2.82065 5.20017 2.43376C6.13421 2.04688 7.16199 1.94565 8.15355 2.14288C9.14512 2.34012 10.0559 2.82695 10.7708 3.54183C11.4857 4.25671 11.9725 5.16752 12.1698 6.15908C12.367 7.15065 12.2658 8.17843 11.8789 9.11247C11.492 10.0465 10.8368 10.8448 9.9962 11.4065C9.1556 11.9682 8.16731 12.268 7.15632 12.268C5.80112 12.2663 4.5019 11.7273 3.54363 10.769C2.58536 9.81074 2.04629 8.51152 2.04466 7.15632Z" />
        </svg>
        <input
          type="text"
          className="searchbar-input"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

SearchBarButton.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default SearchBarButton;
