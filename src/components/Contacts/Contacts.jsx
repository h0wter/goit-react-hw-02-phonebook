import { Contact } from 'components/Contact/Contact';

export const Contacts = ({ contacts }) => {
  return (
    <>
      <ul>
        {contacts.map(contact => {
          return <Contact contact={contact} key={contact.id}></Contact>;
        })}
      </ul>
    </>
  );
};
