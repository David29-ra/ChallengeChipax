import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Results } from './components/body';

function App() {
  return (
    <>
      <Header title="Rick and Morty"/>
      <Results />
      <Footer name="David Rivas"/>
    </>
  );
}

export default App;
