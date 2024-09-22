import PropTypes from "prop-types";
import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({
  contactId,
  contactName,
  contactNumber,
  onDeleteContactById,
}) {
  return (
    <div className={css.container}>
      <div className={css["info-bar"]}>
        <p className={css.info}>
          <FaUserAlt />
          {contactName}
        </p>
        <p className={css.info}>
          <FaPhoneAlt />
          {contactNumber}
        </p>
      </div>
      <button
        type="button"
        className={css.button}
        onClick={() => onDeleteContactById(contactId)}
      >
        Delete
      </button>
    </div>
  );
}

Contact.propTypes = {
  contactId: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  onDeleteContactById: PropTypes.func.isRequired,
};
