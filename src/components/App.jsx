import { useDispatch, useSelector } from 'react-redux';
import { Blocks } from 'react-loader-spinner';
import { useEffect } from 'react';
import {
  selectContacts,
  selectContactsError,
  selectContactsFilter,
  selectContactsIsLoading,
} from 'redux/message.selectors';
import { MainSection } from './MainSection/mainSection';

export function App() {
  // const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);
  // const isLoading = useSelector(selectContactsIsLoading);
  // const error = useSelector(selectContactsError);
  // const filter = useSelector(selectContactsFilter);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  // const addContacts = contactData => {
  //   if (
  //     contacts.some(
  //       contact =>
  //         contact.name.toLocaleLowerCase() ===
  //         contactData.name.toLocaleLowerCase()
  //     )
  //   ) {
  //     alert(`${contactData.name} is already in contacts.`);
  //     return;
  //   }
  //   dispatch(addContact(contactData));
  // };

  // const delitContacts = id => {
  //   dispatch(removeContacts(id));
  // };

  // const Filtration = event => {
  //   dispatch(handlFiltration(event.target.value));
  // };

  // const filteredContacts = () => {
  //   const normalizedContacts = filter.toLocaleLowerCase();
  //   return contacts.filter(contact => {
  //     return contact.name.toLocaleLowerCase().includes(normalizedContacts);
  //   });
  // };

  // const afterFiltration = filteredContacts();

  return <MainSection></MainSection>;
}
