import PropTypes from "prop-types";
import Contact from "../Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDeleteContactById }) {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact
            contactId={id}
            contactName={name}
            contactNumber={number}
            onDeleteContactById={onDeleteContactById}
          />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContactById: PropTypes.func.isRequired,
};
