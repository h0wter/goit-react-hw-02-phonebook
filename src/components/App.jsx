import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  addContact = () => {
    const contacts = [...this.state.contacts];
    contacts.push({
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    });
    this.setState({ contacts: contacts, name: '', number: '' });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <Box as="h2" mb="10px">
          Phonebook
        </Box>
        <PhonebookForm
          name={this.state.name}
          number={this.state.number}
          onChange={this.onInputChange}
          onSubmit={this.addContact}
        />
        <h2>Contacts</h2>
        <Filter onChange={this.onInputChange}></Filter>
        <Contacts
          contacts={this.filterContacts()}
          onChange={this.onInputChange}
        />
        <GlobalStyle />
      </>
    );
  }
}
