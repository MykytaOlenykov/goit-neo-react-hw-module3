import PropTypes from "prop-types";
import css from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  return (
    <>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.field}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        name="filter"
        type="text"
      />
    </>
  );
}

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
