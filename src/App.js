import './App.css';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  return (
    <div className="App">
      <Frase />
      <Frase />
      <Pessoa 
        nome="Caio" 
        idade="21" 
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
      <List />
    </div>
  );
}

export default App;
