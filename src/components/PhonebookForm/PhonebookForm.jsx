import { Formik, Field } from 'formik';
import { Box } from 'components/Box';
import { StyledForm } from './PhonebookForm.styled';

export const PhonebookForm = ({ name, number, onChange, onSubmit }) => {
  const initialValues = {
    name,
    number,
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <StyledForm autoComplete="off">
          <label htmlFor="name">Name</label>
          <Box mt="10px" mb="15px">
            <Field
              name="name"
              type="text"
              onChange={onChange}
              value={initialValues.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Box>
          <label htmlFor="number">Number</label>
          <Box mb="15px">
            <Field
              name="number"
              type="tel"
              onChange={onChange}
              value={initialValues.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Box>
          <button type="submit">Add contact</button>
        </StyledForm>
      </Formik>
    </>
  );
};
