import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter, fetchContacts } from './redux/contactsSlice';
import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
import { Container } from './App.styled';

export const App = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

    useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const onFilterSearch = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Container>
      <Phonebook />
      <Contacts
        onFilterSearch={onFilterSearch}
        filter={filter}
      />
    </Container>
  );
};
