import './App.css';
import OutraLista from './components/OutraLista';

function App() {

  const meusItens = ['React', 'Vue', 'Angular']
  const meusItens2 = ''

  return (
    <div className="App">
      <h1>Renderização de listas</h1>
      <OutraLista itens={meusItens} />
      <OutraLista itens={meusItens2} />
    </div>
  );
}

export default App;
