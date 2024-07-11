import './App.css';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Yasmin"

  return (
    <div className="App">
      <Pessoa 
        nome="Caio" 
        idade="21" 
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
