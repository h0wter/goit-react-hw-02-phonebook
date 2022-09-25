import { ContactItem } from './Contact.styled';

export const Contact = ({ contact }) => {
  return (
    <ContactItem>
      {contact.name}: {contact.number}
    </ContactItem>
  );
};
