import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "../ContactForm";
import SearchBox from "../SearchBox";
import ContactList from "../ContactList";
import css from "./App.module.css";

const CONTACTS_LS_KEY = "contacts";

const defaultValues = JSON.stringify([
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
]);

export default function App() {
  const [contacts, setContacts] = useState(() => {
    try {
      const data = window.localStorage.getItem(CONTACTS_LS_KEY);
      if (data === null) return JSON.parse(defaultValues);
      const parsedData = JSON.parse(data);
      return Array.isArray(parsedData) ? parsedData : JSON.parse(defaultValues);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      return JSON.parse(defaultValues);
    }
  });
  const [filter, setFilter] = useState("");

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem(CONTACTS_LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = (value) => setFilter(value);

  const addContact = (contact) => {
    const contactId = nanoid();
    setContacts((prev) => [...prev, { ...contact, id: contactId }]);
  };

  const deleteContactById = (contactId) =>
    setContacts((prev) => prev.filter(({ id }) => id !== contactId));

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox value={filter} onChange={changeFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContactById={deleteContactById}
      />
    </div>
  );
}
