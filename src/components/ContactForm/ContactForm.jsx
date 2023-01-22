import { useDispatch, useSelector } from 'react-redux';
import { addContacts, getContacts } from 'components/redux/contactsSlice';
import { Form} from './ContactForm.styled';
import { Label, Input } from '../components.styled';
import { Button } from 'components/components.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const { name, number } = e.target.elements;
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase().includes(name.value.toLowerCase())
    );

    if (existingContact) {
      alert(`${name.value} is already in contacts!`);
      return;
    };

    const obj = {
      name: name.value,
      phone: Number(number.value),
    };

     dispatch(addContacts(obj));

    number.value = '';
    name.value = '';
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Tel:
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};