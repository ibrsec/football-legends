 
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/header/Header';
import LegendsContainer from './components/legends/LegendsContainer';

function App() {
  return (
    <Container>
      <Header/>
      <LegendsContainer/>
    </Container>
  );
}

export default App;
