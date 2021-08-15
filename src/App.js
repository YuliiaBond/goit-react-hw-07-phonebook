import Container from './components/Container';
import Form from './components/Form';
import Filter from './components/Filter';
import Contacts from './components/Contacts';

export default function App() {
  return (
    <Container>
      <h1>Phonebook</h1>

      <Form />

      <h2>Contacts</h2>

      <Filter />

      <Contacts />
        
    </Container>
  )
};